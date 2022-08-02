import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './avatar'
import styles from './comment.module.css'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(event) {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount( state => {                    {/* padrão de função (olhar explicação no caderno )*/}
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Jovi-souza.png " />
            <div className={styles.commentBox}> {/* quando eu quiser que um elemento não tenha algumas estilizações, eu passo uma propriedade(eu posso dar qualquer nome para essa propriedade) e eu passo um valor boolean para ela */}
                <div className={styles.commentContent}>
                    <header className={styles.headerContent}>
                        <div className={styles.authorAndTime}>

                            <strong>João vitor</strong>
                            <time 
                            className={styles.time} 
                            title='29 de julho às 14:32hr' 
                            dateTime='2022-07-29 14:32:54'>
                                Cerca há 1h atrás
                            </time>

                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário' className={styles.btnDelete}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className={styles.paragrapContent}>{content}</p>
                </div>
                <footer className={styles.commentBoxFooter}>
                    <button className={styles.commentBoxFooterBtn} onClick={handleLikeComment}> {/* sempre evitar de passar uma função diretamente no componente do tipo ON, ele tem que receber um função e não uma execução de uma função*/}
                        <ThumbsUp /> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}