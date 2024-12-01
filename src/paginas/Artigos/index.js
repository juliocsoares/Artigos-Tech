import posts from "../../json/posts.json"
import PostCard from "../../componentes/PostCard"
import styles from "./artigos.module.css"

export default function Artigos() {
    return (
        <>
        <h1 className={styles.titulo}>Artigos</h1>
        <ul className={styles.posts}>
        {posts.map((post) => (
            <li key={post.id}>
                <PostCard post={post}/>
            </li>
        ))}
        </ul>
        </>
    )
}