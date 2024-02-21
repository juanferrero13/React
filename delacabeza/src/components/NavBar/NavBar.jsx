import styles from "./navbar.module.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to="/">
                    <img src="img/deLaCabeza!-logo_transparent.png" alt="logo" className={styles.logo} />
                </Link>
                <ul className={styles.nav}>
                    <Link to="/">
                        <li><button className={styles.button_nav}>Home</button></li>
                    </Link>
                    <Link to="category/style">
                        <li><button className={styles.button_nav}>Gorras Style</button></li>
                    </Link>
                    <Link to="category/clasica">
                        <li><button className={styles.button_nav}>Gorras Clásicas</button></li>
                    </Link>
                    <Link to="category/beanie">
                        <li><button className={styles.button_nav}>Beanies</button></li>
                    </Link>
                </ul>
            </nav>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </header>
    )
}
