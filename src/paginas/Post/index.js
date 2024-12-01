import { Route, Routes, useParams } from "react-router-dom"
import posts from "../../json/posts.json"
import PostModelo from "../../componentes/PostModelo";
import ReactMarkdown from "react-markdown"
import "./Post.css"
import NaoEncontrada from "../NaoEncontrada";
import styles from "./Post.module.css"
import PostCard from "../../componentes/PostCard"

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    console.log(post.id)

    return (
        <Routes >
            <Route index element={
                <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                    <h1 className={styles.titulo}>Veja também</h1>

                    <ul className={styles.posts}>
                        {posts.slice(0, 3).map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>

                </ PostModelo>} />

        </Routes>
    )
}