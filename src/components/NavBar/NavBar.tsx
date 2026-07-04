import styles from '../NavBar/NavBar.module.css'

export const NavBar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    window.history.replaceState(null, '', window.location.pathname)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h2 className={styles.logo}>MyPortfolio</h2>

        <ul className={styles.navLinks}>
          <li><button onClick={() => scrollToSection('home')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('about')}>Sobre mi</button></li>
          <li><button onClick={() => scrollToSection('project')}>Proyectos</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contacteme</button></li>
        </ul>
      </div>
    </nav>
  )
}