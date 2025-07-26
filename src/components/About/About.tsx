import { useState } from 'react';
import styles from '../About/About.module.css';

export const About = () => {
  const [activeTab, setActiveTab] = useState('experience')
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>Bienvenido a Home</p>;
      case 'experience':
        return (
          <>
            <section className={styles.experience}>
              <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Practicante en ePayco</h5>
                  <p className={styles.cardText}>
                    Como practicante de desarrollo backend en ePayco, colaboré en la documentación de endpoints, depuración de flujos del sistema, corrección de errores y mejora de funcionalidades existentes. Además, participé en la realización de pruebas para asegurar el correcto funcionamiento del sistema.
                  </p>
                  <span className={styles.cardDuration}>6 meses</span>
                </div>

                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Proyectos personales</h5>
                  <p className={styles.cardText}>
                    Desde mi proceso de formación como desarrollador, he llevado a cabo proyectos formativos y personales con el objetivo de fortalecer mis habilidades y adquirir nuevos conocimientos de forma práctica.
                  </p>
                  <span className={styles.cardDuration}>6 meses</span>
                </div>
              </div>
            </section>


          </>
        );
      case 'education':
        return (
          <>
            <section className={styles.experience}>
              <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Tecnologia</h5>
                  <p className={styles.cardText}>
                    Analisis y desarrollo de software
                  </p>
                  <p className={styles.cardText}>
                    Sena
                  </p>
                  <span className={styles.cardDuration}>Enero 2023 - Mayo 2025</span>
                </div>
              </div>
              <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Tecnologia</h5>
                  <p className={styles.cardText}>
                    Variables y estructuras de control en Python
                  </p>
                  <p className={styles.cardText}>
                    Sena - 48 horas
                  </p>
                  <span className={styles.cardDuration}>Octubre 2023</span>
                </div>
              </div>
              <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Curso</h5>
                  <p className={styles.cardText}>
                    Maquetacion de sitios web con html5 y css3
                  </p>
                  <p className={styles.cardText}>
                    Sena - 48 horas
                  </p>
                  <span className={styles.cardDuration}>Agosto 2023</span>
                </div>
              </div>

            </section>


          </>
        );
      default:
        return <p>Tab no encontrado</p>;
    }
  };
  return (
    <>
      <div id='about' className={styles.principal}>
        <h1 className='text-center'>Sobre mi</h1>
        <section className={styles.contenedor}>
          <div>
            <div className={styles.botones}>
              <button
                onClick={() => setActiveTab("experience")}
                className={`${styles.tabButton} ${activeTab === 'experience' ? styles.active : ''}`}
              >
                Experiencia
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`${styles.tabButton} ${activeTab === 'about' ? styles.active : ''}`}
              >
                Sobre mi
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`${styles.tabButton} ${activeTab === 'education' ? styles.active : ''}`}
              >
                Educacion
              </button>
            </div>
          </div>
          <div> {renderTabContent()}</div>
        </section>
      </div>
    </>
  )
}
