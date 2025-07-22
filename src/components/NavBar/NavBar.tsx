import styles from '../NavBar/NavBar.module.css'
export const NavBar = () => {

    return (
        <nav>
            <div className={styles.navtabswrapper}>
                <ul className="nav nav-tabs nav-tabs-custom">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#project">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact me</a>
                    </li>
                </ul>
            </div>


        </nav>
    )

}
