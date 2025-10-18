import styles from './Project.module.css';

const projects = [
  {
    title: "Store NestJS",
    description: "Api para la gestion de una tienda, ingreso de articulos, marcas, carrito de ventas y clientes",
    tech: ["NestJS", "MySQL"],
    github: "https://github.com/EspiSebas/ecommerce-back"
  },
  {
    title: "TaskManager Api",
    description: "Api para asignación y seguimiento de tareas para equipos de desarrollo.",
    tech: ["NestJs", "TypeScript"],
    github: "https://github.com/EspiSebas/TaskManager"
  },
  {
    title: "RepWheels",
    description: "Gestión de citas, compra e inventario de talleres automotrices.",
    tech: ["Django", "SQLite", "HTML"],
    github: "https://github.com/EspiSebas/RepWheels"
  },
  {
    title: "Gestion de Tareas",
    description: "Interfaces para la gestion de tareas consumiendo la API creada con Nest",
    tech: ["React", "Bootstrap", "CSS"],
    github: "https://github.com/EspiSebas/TaskManager-Frontend"
  },
  
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
