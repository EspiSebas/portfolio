import styles from './/Project.module.css';

const projects = [
  {
    title: "Ecommerce NestJS",
    description: "Plataforma de compras con pasarela de pagos e integración con Google Calendar.",
    tech: "NestJS, MySQL, ePayco API",
    github: "#"
  },
  {
    title: "Gestor de Tareas React",
    description: "Asignación y seguimiento de tareas para equipos de desarrollo.",
    tech:["React", "TypeScript", "Bootstrap"],
    github: "#"
  }
]

export const Project = () => {
  return (
    <>
     <h2 className='text-center' >Proyectos</h2>
    <section id="project" className={styles.project}>
      { projects.map((project, index) => (
      <div className="card" style={{width: 300}}>
          <div key={index}>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <a href={project.github} className="text-blue-600 mt-2 inline-block">🔗 GitHub</a>
          </div>
      </div>
      ))}
    </section>
    <div className={styles.project}>
      <button className='btn btn-primary'>Ver mas</button>
    </div>
    
  </>
  )
}
