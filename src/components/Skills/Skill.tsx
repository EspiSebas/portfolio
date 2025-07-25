import styles from '../Skills/Skill.module.css';
import html from '../../assets/html5.svg';
import css from '../../assets/css_old.svg';
import python from '../../assets/python.svg'
import nest from '../../assets/nestjs.svg'
import node from '../../assets/nodejs.svg'
import django from '../../assets/django.svg'
import js from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import mysql from '../../assets/mysql.svg'
import mongo from '../../assets/mongodb-wordmark.svg'
import typescript from '../../assets/typescript.svg'
import git from '../../assets/github_light.svg'
import visual from '../../assets/vscode.svg'
import postman from '../../assets/postman.svg'


const projects = [
  {
    title: "Frontend",
    tech: [html, css, js, react],

  },
  {
    title: "Backend",
    tech: [python, nest, node, django,typescript,mongo,mysql],
  },
  {
    title:"Tools",
    tech: [visual,postman,git]
  }
]

export const Skill = () => {
  return (
   <>
      <div className={styles.principal}>
      <h2 className='text-center' >Habilidades</h2>
      <section id="project" className={styles.skill}>
        {projects.map((project, index) => (
          <div className={styles.card} style={{ width: 300 }} key={index}>
            <h3 className="card-title">{project.title}</h3>
            <div className={styles.gridIcons}>
              {project.tech.map((tech, idx) => (
                <div key={idx} className={styles.logoWrapper}>
                  <img src={tech} alt="" width={50} />
                </div>
              ))}
            </div>
          </div>
        ))}

      </section>
      </div>
    </>
  )
}
