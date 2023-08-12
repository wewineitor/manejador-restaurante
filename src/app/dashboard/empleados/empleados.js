import styles from "../../styles/empleados.module.css"
import Empleado from "./empleado"
export default function EmpleadosSection({empleados}) {
  return (
    <section className={styles.main}>
        <h1 className={styles.title}>Empleados</h1>
        <div className={styles.conteiner}>
        <select className={styles.select} name="" id="">
            <option className={styles.option} value="">Filtrar</option>
            <option className={styles.option} value="Cocinero">Cocinero</option>
            <option className={styles.option} value="Mesero">Mesero</option>
        </select>
        </div>
        <section className={styles.empleados_content}>
          {empleados.map(empleado=>(
              <Empleado
              key={empleado.username} 
              empleado={empleado}/>
          ))}
        </section>
    </section>
  )
}
