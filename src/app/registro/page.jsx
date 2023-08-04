"use client"
import { useState } from "react";
import styles from "../styles/registro.module.css";
export default function Registro() {
  const [rol,setRol] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let username = "wewin";
    let password = "1234";
    let headers = new Headers();
    
    headers.append("Authorization","Basic " + btoa(username + ":" + password));
    headers.append('Content-Type', 'application/json');
      await fetch('http://localhost:8080/api/user/create', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          "username": "Dreing",
          "name": data.get("name"),
          "lastName": data.get("lastName"),
          "motherLastName":data.get("motherLastName"),
          "phone": Number(data.get("phone")),
          "password": data.get("password"),
          "enabled": true,
          "roles": [
              {
                  "name": rol
              }
          ]
      }),
      });
  };
  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Registrate</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.nombre_conteiner}>
            <div className={styles.section}>
              <label htmlFor="Nombre">Nombres (s)</label>
              <input type="text" placeholder="Ingresa tu nombre" name="name" />
            </div>

            <div className={styles.section}>
              <label htmlFor="Apellido Paterno">Apellido Paterno</label>
              <input type="text" placeholder="Ingresa apellido paterno" name="lastName" />
            </div>

            <div className={styles.section}>
              <label htmlFor="Apellido Materno">Apellido Materno</label>
              <input type="text" placeholder="Ingresa apellido materno" name="motherLastName" />
            </div>
          </div>

          <div className={styles.conteiner_password}>
            <div className={styles.section}>
              <label htmlFor="Contraseña">Contraseña</label>
              <input type="password" placeholder="Ingresa tu contraseña" name="password" />
            </div>

            <div className={styles.section}>
              <label htmlFor="telefono">Telefono</label>
              <input type="number" placeholder="ejem: 5512346543" name="phone" />
            </div>
          </div>
          <div className={styles.section}>
            <label htmlFor="Sexo">Rol</label>
            <select className={styles.option_conteiner} value={rol} onChange={e => setRol(e.target.value)}>
              <option className={styles.option} value="">
                {" "}
              </option>
              <option className={styles.option} value="ROLE_ADMIN" >
              Admin
              </option>
              <option className={styles.option} value="ROLE_CHEF" >
              Cocinero
              </option>
            </select>
          </div>

       
          <div className={styles.bt_conteiner}>
          <button className={styles.bt}>Registrate</button>
          </div>

         
        </form>
      </div>
    </main>
  );
}
