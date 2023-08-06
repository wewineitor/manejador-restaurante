import Nav from "../../nav.js"
import EmpleadosSection from "./empleados.js"
import styles from '../../styles/empleados.module.css'
export default function Empleados() {
  return (
    <main className={styles.main_conteiner}>
    <Nav/>
    <EmpleadosSection/>
    </main>
  )
}
