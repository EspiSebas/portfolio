import { useState } from 'react';
import styles from '../About/About.module.css';

export const About = () => {
  const [activeTab, setActiveTab] = useState('experience')
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>Bienvenido a Home</p>;
      case 'experience':
        return <p>Este es tu perfil</p>;
      case 'education':
        return <p>Sena</p>;
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
              >
                Experiencia
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
              >
                Sobre mi
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`${styles.tab} ${activeTab === "education" ? styles.active : ""}`}
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
