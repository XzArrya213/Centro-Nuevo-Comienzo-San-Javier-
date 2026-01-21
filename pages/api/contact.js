import { promises as fs } from 'fs'
import path from 'path'

async function saveLocal(entry) {
  const dir = path.join(process.cwd(), 'data')
  const file = path.join(dir, 'contacts.json')
  await fs.mkdir(dir, { recursive: true })
  let list = []
  try {
    const content = await fs.readFile(file, 'utf8')
    list = JSON.parse(content || '[]')
  } catch (e) {
    list = []
  }
  list.push(entry)
  await fs.writeFile(file, JSON.stringify(list, null, 2), 'utf8')
}

async function trySendEmail(entry) {
  // Send email only if SMTP variables are present
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) return { sent: false, reason: 'SMTP not configured' }

  let nodemailer
  try {
    nodemailer = require('nodemailer')
  } catch (e) {
    return { sent: false, reason: 'nodemailer not installed' }
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  })

  const html = `<h3>Nuevo contacto</h3>
  <p><strong>Nombre:</strong> ${entry.name}</p>
  <p><strong>Email:</strong> ${entry.email}</p>
  <p><strong>Teléfono:</strong> ${entry.phone || ''}</p>
  <p><strong>Facebook:</strong> ${entry.facebook || ''}</p>
  <p><strong>Mensaje:</strong><br/>${entry.message}</p>
  <p>Enviado: ${entry.createdAt}</p>`

  const info = await transporter.sendMail({
    from: SMTP_USER,
    to: CONTACT_RECIPIENT,
    subject: `Contacto desde sitio: ${entry.name}`,
    html
  })

  return { sent: true, info }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, facebook, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Faltan campos requeridos' })

  const entry = {
    name,
    email,
    phone: phone || null,
    facebook: facebook || null,
    message,
    createdAt: new Date().toISOString()
  }

  try {
    await saveLocal(entry)
    // If CONTACT_RECIPIENT not set, try to read from data/site.json
    if (!process.env.CONTACT_RECIPIENT) {
      try {
        const sitePath = path.join(process.cwd(), 'data', 'site.json')
        const siteContent = await fs.readFile(sitePath, 'utf8')
        const site = JSON.parse(siteContent || '{}')
        if (site.email) process.env.CONTACT_RECIPIENT = site.email
      } catch (e) {
        // ignore
      }
    }

    const emailResult = await trySendEmail(entry)
    console.log('Nuevo contacto:', entry)
    if (emailResult.sent) {
      console.log('Email enviado:', emailResult.info)
    } else {
      console.log('Email no enviado:', emailResult.reason)
    }
    return res.status(200).json({ ok: true, email: emailResult })
  } catch (err) {
    console.error('Error saving contact', err)
    return res.status(500).json({ error: 'Error del servidor' })
  }
}
