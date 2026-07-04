import styles from './Project.module.css';

const projects = [
  {
    title: "SaaS Multi Tiendas",
    description: "APi rest para el manejo y administracion de invetario y ventas. Tiene su respectivo front-end",
    tech: ["Spring Boot", "MySQL","Java"],
    github: "https://github.com/EspiSebas/SaasMultiTent"
  },
  {
    title: "Calculadora Salarial",
    description: "Aplicativo web para subir el archivo de excel correspondiente a las horas trabajadas y calcular salario",
    tech: ["Python"],
    github: "https://github.com/EspiSebas/Calculadora_salarial"
  },
  {
    title: "RepWheels",
    description: "Gestión de citas, compra e inventario de talleres automotrices.",
    tech: ["Django", "SQLite", "HTML"],
    github: "https://github.com/EspiSebas/RepWheels"
  },
  {
    title: "Microservicio Stock",
    description: "API rest creada con arquitectura hexagonal para gestionar el inventario",
    tech: ["Spring Boot", "SQL", "Java"],
    github: "https://github.com/EspiSebas/MicroserviceStock"
  },

  {
    title: "Administracion de Tickets",
    description: "Creacion de ticekts para la asignacion de agentes",
    tech: ["React", "Express", "CSS", "Bootstrap","SQL"],
    github: "https://github.com/EspiSebas/basicsystemtickets"
  },
  
  {
    title: "API Logs",
    description: "Registra en el log los endpoints consumidos de una API externa y permite las operaciones de crud",
    tech: ["Spring Boot", "Java", "SQL"],
    github: "https://github.com/EspiSebas/Api-Logs"
  },
  
];

const urlGitHub = "https://github.com/EspiSebas";

export const Project = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techList}>
              {project.tech.map((tech, i) => (
                <span className={styles.techBadge} key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.github} className={styles.link} target="_blank">🔗 Ver en GitHub</a>
          </div>
        ))}
      </div>
      <div className={styles.moreButtonContainer}>
        <a href={urlGitHub} className={styles.moreButton}>Ver más proyectos</a>
      </div>
    </section>
  );
};
