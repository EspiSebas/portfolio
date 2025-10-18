import styles from '../Footer/Footer.module.css'
import git from '../../assets/github_light.svg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'

const urlGit = 'https://github.com/EspiSebas'
const urlLinkedin = 'https://www.linkedin.com/in/sebastian-espinosa-dev/'

export const Footer = () => {
  return (
    <footer className={styles.contenedorFooter}>
      <p>
        <img src={gmail} width={20} alt="Gmail" />
        sebasespinosa2016@gmail.com
      </p>
      <div className={styles.iconos}>
        <a href={urlGit} target="_blank" rel="noopener noreferrer">
          <img src={git} alt="GitHub" />
        </a>
        <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <span className={styles.copy}>© 2025 Sebastián Espinosa</span>
    </footer>
  )
}
