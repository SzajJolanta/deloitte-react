import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copy &copy; {new Date().getFullYear()}</p>
            <p>with <span className={styles.heart}>&hearts;</span> by me</p>
        </footer>
    )
}

export default Footer;