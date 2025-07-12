import styles from '../NavBar/NavBar.module.css'
export const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <div className={styles.navtabswrapper}>
                <ul className="nav nav-tabs nav-tabs-custom">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact me</a>
                    </li>
                </ul>
            </div>


        </nav>
    )

}
