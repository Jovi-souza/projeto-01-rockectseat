import { PencilLine } from 'phosphor-react'
import { Avatar } from './avatar'

import styles from './sideBar.module.css'

export function SideBar() {
    return (
        <aside className={styles.sideBar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
            />

            <div className={styles.profile}>
                <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQEWtKaS1jnUUA/profile-displayphoto-shrink_200_200/0/1658183337097?e=1664409600&v=beta&t=2qTqTkJ7RepyPkUjvBR0sDcSylM4xpLxcL5-B4cFrSc' />

                <strong className={styles.nomeUsuario}>João vitor</strong>
                <span className={styles.cargo}>Web Developer</span>
            </div>
            <footer className={styles.SideBarFooter}>
                <a className={styles.footerLink} href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}