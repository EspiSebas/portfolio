import resume from '../../assets/CV Sebastian.pdf'
import styles from '../Hero/Hero.module.css'

export const Hero = () => {
   return (
    <section className={styles.contenedor} >
      <h1>Sebastián</h1>
      <p >Desarrollador de Software</p>
      <p >Apasionado por construir soluciones eficientes y modernas.</p>
      <div className={styles.botones}>
          <a href={resume} download>Descargar CV</a>
          <a className='btn btn-primary'>Contactame</a>
      </div>
      
    </section>
  )
}
