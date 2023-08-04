import Nav from "@/app/nav"
import PlatillosSection from "./platillos"
import styles from '../../styles/platillos.module.css'
export default function Platillos() {
  return (
    <div className={styles.main_conteiner}>
    <Nav/>
    <PlatillosSection/>
    
    </div>
  )
}
