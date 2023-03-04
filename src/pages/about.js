import Image from "next/image"
import styles from "../styles/About.module.css"
export default function About() {
    return (
        <div className={styles.about}>
            <h1>
                Sobre o projeto
            </h1>
            <p> Esse projeto......... </p>
            <Image src="/images/blastoise.png" width="300" height="300" alt="Imagem do Blastoise"/>
        </div>
    )
}