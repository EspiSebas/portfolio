import resume from '../../assets/CV Sebastian.pdf'

export const Hero = () => {
   return (
    <section >
      <h1>Sebastián</h1>
      <p >Desarrollador de Software</p>
      <p >Apasionado por construir soluciones eficientes y modernas.</p>
      <a href={resume} download>Descargar CV</a>
    </section>
  )
}
