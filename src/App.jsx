// JSX = javascript + XML (HTML)
import { Header } from "./components/header"
import { SideBar } from "./components/sideBar"
import { Post } from "./components/post"
import { Comment } from "./components/comment"

import './global.css' // as importações de CSS nunca vão ser no meu HTML e sempre no meu arquivo javascript
import styles from './app.module.css'

export function App() {
  return ( // no meu return eu não posso ter multiplos elementos sem um pai para cobrir
    <div>
      <Header />
      <div className={styles.wrapper}>

        <SideBar />
        <main>

          <Post /> 
          <Post />

        </main>
      </div>
    </div>
  )
}
