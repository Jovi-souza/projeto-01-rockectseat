// JSX = javascript + XML (HTML)
import { Header } from "./components/header"
import { SideBar } from "./components/sideBar"
import { Post } from "./components/post"
import { Comment } from "./components/comment"

import './global.css' // as importações de CSS nunca vão ser no meu HTML e sempre no meu arquivo javascript
import styles from './app.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Jovi-souza.png",
      name: 'Joao vitor',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-08-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/brunodatac.png",
      name: 'Bruno',
      role: 'Dev Junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-29 13:00:00')
  },
]

// iteração

export function App() {
  return ( // no meu return eu não posso ter multiplos elementos sem um pai para cobrir
    <div>
      <Header />
      <div className={styles.wrapper}>

        <SideBar />
        <main>
          {posts.map( post => { // sempre que eu for fazer uma iteração eu vou utilizar o map, pq o map tem retorno
            return (
            <Post 
              key={post.id} // sempre queeu quiser mostrar elementos JSx para o ususario eu preciso colocar a key para diferenciar os elementos
              author={post.author}
              content={post.content}
              role={post.role}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}
