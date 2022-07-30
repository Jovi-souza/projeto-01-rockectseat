import styles from './avatar.module.css'

// const user = { nome: 'Vitor' } // usando o destructuring no meu objeto com reactJS

// const { nome } = user // aqui eu estou pegando apenas o nome da minha constante  user

export function Avatar({ hasBorder = true, src}) { // usando o destruturing na minha props recebida e passando um valor default para o hasBorder

    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} // aplicando a logica 
        src={src} />
    )
}