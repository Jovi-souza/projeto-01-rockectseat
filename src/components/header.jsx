import styles from './header.module.css'

import igniteLogo from '../images/Ignite-logo.svg'
// para importar um css module eu preciso importar ele como se fosse m componente 
export function Header() {
    return ( // para aplicar a stylização no meu componente eu preciso colocar o className e envolver o conteúdo em chaves pq ele é uma variavel, e no reactJS variaveis são colocadas em chaves
        <header className={styles.header}>
            <img src={igniteLogo} alt="LogoTipo do ignite" />
        </header>
    )
}