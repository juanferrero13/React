import styles from "./navbar.module.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>deLaCabeza!</div>
                <ul className={styles.nav}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Gorras</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
                <CartWidget />
        </header>
    )
}