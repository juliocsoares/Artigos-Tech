import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Tech Insights</h1>
                <p className={styles.paragrafo}>Olá e seja bem-vindo ao Tech Insights! Eu sou Julio, estagiário de Service Desk, e este é o meu espaço pessoal onde compartilho artigos, tutoriais e insights sobre as últimas tendências e tecnologias do mundo tech.</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='foto de um circulo colorido' />

                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto' />
            </div>
        </div>
    )
}