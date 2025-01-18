import styles from './Footer.module.css'
import Header from '../Header/index'

function Footer() {
    return(
        <>
            <Header />
            <footer className={styles.footer}>
                <p>&copy; 2025 EBAC Ecommerce v2</p>
                <p>Feito por Fabio Conceição</p>
            </footer>
        </>    
    )
}

export default Footer