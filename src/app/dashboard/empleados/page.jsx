import Nav from "../nav"
import Empleados from "./empleados"
import styles from '../../styles/empleados.module.css'
export default function Dashboard() {
  return (
    <main className={styles.main_conteiner}>
    <Nav/>
    <Empleados/>
    </main>
  )
}
