import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <p className={styles.footer_p}>© 2023 <strong className={styles.footer_strong}>deLaCabeza!</strong> - Todos los derechos reservados</p>
        </div>
    )
}
