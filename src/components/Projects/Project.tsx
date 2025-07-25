import styles from './Project.module.css';

const projects = [
  {
    title: "Ecommerce NestJS",
    description: "Plataforma de compras con pasarela de pagos e integración con Google Calendar.",
    tech: ["NestJS", "MySQL", "ePayco API"],
    github: "#"
  },
  {
    title: "Gestor de Tareas React",
    description: "Asignación y seguimiento de tareas para equipos de desarrollo.",
    tech: ["React", "TypeScript", "Bootstrap"],
    github: "#"
  },
  {
    title: "Blog con Django",
    description: "Gestión de contenido con panel de administración personalizado.",
    tech: ["Django", "SQLite", "Tailwind"],
    github: "#"
  },
  {
    title: "Portfolio Personal",
    description: "Página web con proyectos, contacto y experiencia.",
    tech: ["React", "Vite", "Bootstrap"],
    github: "#"
  }
];

const urlGitHub = "https://github.com/EspiSebas";

export const Project = () => {
  return (
    <section className={styles.container}>
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
