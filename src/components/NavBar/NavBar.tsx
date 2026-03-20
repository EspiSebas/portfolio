import styles from '../NavBar/NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <h2 className={styles.logo}>MyPortfolio</h2>

                <ul className={styles.navLinks}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre mi</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#contact">Contacteme</a></li>
                </ul>
            </div>
        </nav>
    )
}