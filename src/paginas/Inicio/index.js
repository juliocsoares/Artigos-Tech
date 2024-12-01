import styles from "./inicio.module.css"
import posts from "../../json/posts"
import PostCard from "../../componentes/PostCard";
import NoticiaPrincipal from "../../componentes/NoticiaPrincipal";


export default function Inicio() {
    return (
        <>
            <h1 className={styles.titulo}> Notícia de Hoje </h1>
            <NoticiaPrincipal />
            <h1 className={styles.titulo}> Principais Artigos </h1>
            <ul className={styles.posts}>
                {posts.slice(0, 4).map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </>
    )
}