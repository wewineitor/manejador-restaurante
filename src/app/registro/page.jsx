import styles from "../styles/registro.module.css";
export default function Registro() {
  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Registrate</h1>
        <form action="">
          <div className={styles.nombre_conteiner}>
            <div className={styles.section}>
              <label htmlFor="Nombre">Nombres (s)</label>
              <input type="text" placeholder="Ingresa tu nombre" />
            </div>

            <div className={styles.section}>
              <label htmlFor="Apellido Paterno">Apellido Paterno</label>
              <input type="text" placeholder="Ingresa apellido paterno" />
            </div>

            <div className={styles.section}>
              <label htmlFor="Apellido Materno">Apellido Materno</label>
              <input type="text" placeholder="Ingresa apellido materno" />
            </div>
          </div>
          
          <div className={styles.section}>
            <label htmlFor="Correo">Correo</label>
            <input type="email" placeholder="Ingresa tu correo" />
          </div>
          <div className={styles.conteiner_password}>
          <div className={styles.section}>
            <label htmlFor="Contraseña">Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" />
          </div>
          <div className={styles.section}>
            <label htmlFor="ConfirmaContraseña">Confirma contraseña</label>
            <input type="password" placeholder="Confirma tu contraseña" />
          </div>

          <div className={styles.section}>
            <label htmlFor="telefono">Telefono</label>
            <input type="number" placeholder="ejem: 5512346543" />
          </div>
          </div>
         
     
          <div className={styles.section}>
            <label htmlFor="Sexo">Sexo</label>
            <select className={styles.option_conteiner}>
              <option className={styles.option} value=""> </option>
              <option className={styles.option} value="masculino">Masculino</option>
              <option className={styles.option} value="femenino">Femenino</option>
            </select>
          </div>



          <button className={styles.bt}>Registrate</button>
        </form>
      </div>
    </main>
  );
}
