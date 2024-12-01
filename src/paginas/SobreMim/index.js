import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from "../../assets/minha_foto.jpeg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Julio!
            </h3>

            <img src={fotoSobreMim}
                alt="Minha foto"
                className={styles.fotoSobreMim} />

<p className={styles.paragrafo}>
    Oi, tudo bem? Eu sou estagiário de service desk, e quem sabe no futuro, estagiário de desenvolvimento rsrs. Estou feliz de te ver por aqui.
</p>
<p className={styles.paragrafo}>
    Minha jornada em tech começou quando, decidi cursar Sistemas de Informação, onde tive a oportunidade de aprender mais sobre desenvolvimento de software e design de interfaces. Durante a universidade, participei de grupos acadêmicos e estudei muito sobre o mundo de tecnologia, o que consolidou minha paixão pela área.
</p>
<p className={styles.paragrafo}>
    Foi nesse período que comecei a aplicar meus conhecimentos em projetos reais, como a criação de websites e sistemas para otimizar processos. Isso me deu uma experiência mais próxima da realidade profissional.
</p>
<p className={styles.paragrafo}>
    Em 2024 entrei em uma empresa maravilhosa, onde trabalho com service desk em geral, e também algumas automações de processos, utilizando ferramentas como Power Apps, Power Automate e Microsoft Lists. Além disso, também desenvolvi um app no Power Apps para gestão de chamados, o que tem sido uma experiência rica em aprendizado prático.
</p>
<p className={styles.paragrafo}>
    Hoje, também continuo minha jornada de aprendizado constante, aplicando todos esses conhecimentos em meus projetos de UI design e automação. Adoro poder compartilhar essas experiências e conhecimentos com outros profissionais e espero que você aproveite o conteúdo que estou trazendo para você.
</p>

        </PostModelo>
    )
}