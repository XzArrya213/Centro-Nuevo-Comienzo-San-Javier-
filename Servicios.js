import styles from './Servicios.module.css';

const servicios = [

    {

      name: 'Nutriólogo - Rafael Méndez (Tel: 4646537861)',

      days: 'Lunes a Viernes / Sábado',

      hours: '04:00 PM a 08:00 PM / 11:00 AM a 01:00 PM',

      cost: '$150.00 Por Consulta'

    },

    {

      name: 'Terapia de Lenguaje - Mtra. Tania Arroyo (Tel: 4646559508)',

      days: 'Lunes a Viernes',

      hours: '12:00 PM a 06:00 PM',

      cost: '$200.00 Por Consulta'

    },

    {

      name: 'Terapia de Lenguaje - Neuropsicologa. Becky de la Peña (Tel: 4641652487)',

      days: 'Martes a Jueves',

      hours: '10:00 AM a 05:00 PM',

      cost: '$250.00 Por Consulta'

    },

        {

      name: 'Tanatologa - Candy Saavedra (Tel: 4641810180)',

      days: 'Viernes y Sábado',

      hours: '09:00 AM a 03:00 PM',

      cost: '$250.00 Por Consulta'

    },

    {

      name: 'Psicologa - Adriana Saavedra (Tel: 4646461489)',

      days: 'Lunes a Viernes',

      hours: '09:00 AM a 06:00 PM',

      cost: '$250.00 Por Consulta'

    },

    {

      name: 'Psicologa - Angelica Montero (Tel: 4641206967)',

      days: 'Lunes a Viernes',

      hours: '09:00 AM a 01:00 PM',

      cost: '$200.00 Por Consulta'

    },

    {

      name: 'Psicologo - Lothar Saldierna (Tel: 4641371253)',

      days: 'Lunes a Viernes / Sábado',

      hours: '09:00 AM a 06:00 PM / 09:00 AM a 11:00 AM',

      cost: '$250.00 Por Consulta'

    },

    {

      name: 'Psicologa - Andrea Gonzales (Tel: 4641043387)',

      days: 'Viernes / Sabado',

      hours: '02:00 PM a 06:00 PM / 09:00 AM a 11:00 AM ',

      cost: '$250.00 Por Consulta'

    },

    {

      name: 'Dentista - Diana Garcia (Tel: 4431684287)',

      days: 'Lunes a Viernes',

      hours: '10:00 AM a 07:00 PM',

      cost: '$200.00 Por Consulta'

    },

    {

      name: 'Terapia Filosofica. Adquiere herramientas y trabaja por tu bienestar - Paola Mares',

      days: 'Previa Cita (Tel: 4772525385)',

      hours: '',

      cost: '$200.00 Por Consulta'

    },

    {

      name: 'Asesoria Juridica - Lic. Rubi Miranda (Tel: 4641346720)',

      days: 'Miercoles y Viernes',

      hours: '07:00 AM a 11:00 AM',

      cost: '$250.00 Por Consulta'

    },

    {

      name: 'Fisioterapeuta - Victor Tierrablanca (Tel: 4646549599)',

      days: 'Lunes a Viernes / Sabado',

      hours: '04:00 PM a 07:00 PM / 08:00 AM a 02:00 PM',

      cost: '$150.00 Por Consulta'

    }

  ];



export default function Servicios() {

  return (

    <section id="servicios" className={styles.serviciosSection}>

      <div className={styles.card}>

        <div className={styles.header}>
          <h2 className={styles.title}>Servicios (Horarios y Días)</h2>
        </div>

        <div className={styles.body}>

          <div className={styles.tableWrap}>
            <table className={styles.servicesTable}>
              <thead>
                <tr>
                  <th className={styles.colServicio}>Servicio</th>
                  <th className={styles.colDias}>Días de Atención</th>
                  <th className={styles.colHorario}>Horario</th>
                  <th className={styles.colCosto}>Costo</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((s, i) => (
                  <tr key={i}>
                    <td className={styles.colServicio}>
                      <strong>{s.name}</strong>
                    </td>
                    <td className={styles.colDias}>{s.days}</td>
                    <td className={styles.colHorario}>{s.hours || 'Previa Cita'}</td>
                    <td className={styles.colCosto}><strong>{s.cost}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.smallNote}>
            * Todos los servicios requieren previa cita.
          </p>

          <p className={styles.smallNote}>
            MENORES DE EDAD: Comprobante de domicilio e INE de madre, padre o tutor.
          </p>

          <p className={styles.smallNote}>
            MAYORES DE EDAD: INE, CURP y comprobante de domicilio.
          </p>

        </div>

      </div>

    </section>

  );

}