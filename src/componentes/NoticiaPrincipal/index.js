import fotonoticia from '../../assets/rede-5g.png';
import styles from './Noticia.principal.module.css';

export default function NoticiaPrincipal() {
    return (
        <div className={styles.abacompleta}>
            <h1 className={styles.titulo}>
                5G: Anatel confirma liberação da frequência de 3,5 GHz em todo o país
            </h1>
            <img
                src={fotonoticia}
                className={styles.fotonoticia}
                alt="noticia de hoje"
            />
            <p>A Agência Nacional de Telecomunicações (Anatel) e a Entidade Administradora da Faixa (EAF) confirmaram a liberação da frequência 3,5 GHz em todo o Brasil. Com o anúncio feito nesta terça-feira (26), o sinal 5G pode ser ativado em todo o território nacional, atendendo às cidades que ainda não têm a tecnologia.
                <p>Usada anteriormente pelo serviço de TV aberta via satélite, essa frequência precisou passar por um processo de “limpeza”, possibilitando a migração para a quinta geração da internet móvel. Isso se deu por meio da troca das antigas antenas parabólicas por modelos mais modernos, compatíveis com o sinal digital.</p>
            </p>
        </div>
    );
}
