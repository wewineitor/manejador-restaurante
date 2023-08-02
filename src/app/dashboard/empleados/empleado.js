import styles from '../../styles/empleado.module.css'
export default function Empleado() {
  return (
    <div className={styles.conteiner}>
        <div className={styles.puesto_conteiner}>
            <p>Puesto: </p>
            <select className={styles.section} name="" id="">
                <option value=""></option>
                <option value="">Cocinero</option>
                <option value="">Mecero</option>
                <option value="">Encargado</option>
            </select>
        </div>
        <div className={styles.content}>
            <p>Nombre: <span>Zeus Mendoza Lopez</span></p>
        </div>
        <div className={styles.content}>
            <p>Correo: <span>zeta_anima@hotmail.com</span></p>
        </div>
        <div className={styles.conteiner_edad_sexo}>
        <div className={styles.content}>
            <p>Sexo: <span>Hombre</span></p>
        </div>
        <div className={styles.content}>
            <p>Edad: <span>24</span> Años</p>
        </div>
        </div>
        <div className={styles.content}>
            <p>Telefono: <span>7551119439</span></p>
        </div>
        
    </div>
  )
}
