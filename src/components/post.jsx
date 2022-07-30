import { Avatar } from './avatar'
import { Comment } from './comment'
import styles from './post.module.css'

export function Post() {
    return (
        
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <Avatar
                    hasBorder // no react quando eu quero enviar um propriedade que o valor dela é true eu não preciso passar valor pq o react vai entender por padrão que ela ja é true
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQEWtKaS1jnUUA/profile-displayphoto-shrink_200_200/0/1658183337097?e=1664409600&v=beta&t=2qTqTkJ7RepyPkUjvBR0sDcSylM4xpLxcL5-B4cFrSc"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Vitor Rodrigues</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time className={styles.time} title='29 de julho às 14:32hr' dateTime='2022-07-29 14:32:54'>Publicado há 1h</time> {/* a tag time é usada quando falamos de tempo */} 
            </header>

            <div className={styles.content}>
                <p className={styles.contentParagraph} >Fala galeraa 👋</p>

                <p className={styles.contentParagraph} >Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p className={styles.contentParagraph} >👉 {' '}
                    <a href="">jane.design/doctorcare</a>
                </p>

                <p className={styles.contentParagraph} >
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    className={styles.textAreaForm} 
                    placeholder='Deixe um comentário'
                />
                <footer className={styles.commentFooter}>
                    <button className={styles.btnForm} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}