import styles from './Banner.module.css'

function Banner() {
    return(
        <section className={styles.banner}>
            <h1>Seja Bem-vindo ao nosso ecommerce com JavaScript</h1>
            <p>Encontre aqui o seu produto</p>
            <button>Compre Agora</button>
        </section>
    )
}

export default Banner