import Nav from "../../nav.js"
import EmpleadosSection from "./empleados.js"
import styles from '../../styles/empleados.module.css'
export default function Empleados() {
  return (
    <div className={styles.principal_main}>
    <Nav/>
    <EmpleadosSection/>
    </div>
  )
}
