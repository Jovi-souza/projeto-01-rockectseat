import { useState } from 'react'
import { Avatar } from './avatar'
import { Comment } from './comment'
import styles from './post.module.css'

// estado = são variavei que eu quero que o componente monitore

export function Post({ author, publishedAt, content}) {

    const [comments, setComments] = useState([ // o use state me retorna duas coisas dentro de um array, o primeiro é o estado atual da minha variavel e o segundo parametro recebe uma função para alterar o valor da minha variavel 
        'post muito bacana, hein?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event) {
        event.preventDefault()
        
        setComments([...comments, newCommentText]) // aqui eu não passo somente oq eu quero inserir, eu passo qual é o novo valor( imutabilidade )
        setNewCommentText('')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('') // eu tenho que lembrar de resetar a mensagem do required por conta dos bugs
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório') // esse metodo do event é para customizar a mensagem do required
    }

    function deleteComment(commentToDelete) {
        // imutabilidade => as variáveis não sofrem mutação, nós criamos um anovo valor (um novo espaço na memoria)
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentInputEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <Avatar
                    hasBorder // no react quando eu quero enviar um propriedade que o valor dela é true eu não preciso passar valor pq o react vai entender por padrão que ela ja é true
                    src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                className={styles.time}
                title='' 
                dateTime='2022-07-29 14:32:54'>
                    {/* {publishedDateFormatted} */}
                </time> {/* a tag time é usada quando falamos de tempo */} 
            </header>

            <div className={styles.content}>

                {content.map( line => {
                    if( line.type === 'paragraph') {
                        return <p key={line.content} className={styles.contentParagraph}>{line.content}</p>
                    } else if (line.type) {
                        return <p key={line.content}><a className={styles.contentLink} href="#">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    className={styles.textAreaForm} 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid} // é chamada sempre que o html indentificar que a gente tentou realizar um submit do formulario mas o texto é invalido
                    required
                />

                <footer className={styles.commentFooter}>
                    <button 
                    className={styles.btnForm} type='submit' disabled={isNewCommentInputEmpty}>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment} // boas praticas // quando eu passo funcões para um componente como propriedades que vão ser disparadas a partir de alguma ação que acontece, eu começo o nome da propriedade com ON
                        /> 
                    )
                })}
            </div>
        </article>
    )
}