import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <p className={styles.footer_p}>© 2023 <span className={styles.footer_span}>deLaCabeza!</span> - Todos los derechos reservados</p>
        </div>
    )
}
