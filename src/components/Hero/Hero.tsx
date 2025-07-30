import resume from '../../assets/CV Sebastian.pdf';
import styles from '../Hero/Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.contenedor}>
      <div className="container">
        <h1 className="display-4 fw-bold">Sebastián</h1>
        <p className="lead text-muted mb-4">Desarrollador de Software</p>
        <p className="mb-4">
          Enfocado en crear soluciones limpias, escalables y bien documentadas. 
          Tengo experiencia en la integración y consumo de APIs, así como un enfoque metódico 
          en la depuración y mejora continua del código.
          Aunque mi especialidad es el backend, también cuento con conocimientos en <span className="fw-semibold text-dark">frontend</span>, lo que me permite comprender el flujo completo de las aplicaciones y colaborar de forma más efectiva con equipos multidisciplinarios.
        </p>
        
        <div className="d-flex justify-content-center gap-3">
          <a className="btn btn-primary btn-lg" href={resume} download>
            Descargar CV
          </a>
          <a className="btn btn-outline-primary btn-lg" href="#contact">
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};
