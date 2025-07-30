import styles from '../Footer/Footer.module.css'
import git from '../../assets/github_light.svg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'

const urlGit = 'https://github.com/EspiSebas'
const urlLinkedin = 'https://www.linkedin.com/in/sebastian-espinosa-dev/'
export const Footer = () => {
  return (
    <div className={styles.contenedorFooter}>
        <div >
            <p>sebasespinosa2016@gmail.com <img src={gmail} width={20} alt="" /></p>
        </div>
        <div>
            <a href={urlGit}><img src={git} alt="" width={20}/></a>
        </div>
        <div>
           <a href={urlLinkedin}><img src={linkedin} alt="" width={20}/></a>
        </div>
    </div>
  )
}
