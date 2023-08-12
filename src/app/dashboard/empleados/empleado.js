import { useState, useEffect } from 'react'
import styles from '../../styles/empleado.module.css'
export default function Empleado({empleado}) {

    const ConsumirApi = async ()=>{
        let username = "admin";
        let password = "admin";
        let headers = new Headers();
      
        headers.append(
          "Authorization",
          "Basic " + btoa(username + ":" + password));

        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/delete/${empleado.username}`,{
            headers:headers,
            method:'DELETE'
        })
    }

    const {username,name,lastName,motherLastName,phone,roles} = empleado;
  return (
    <div className={styles.conteiner}>
        <div className={styles.puesto_conteiner}>
            <p>Puesto: </p>
            <span className={styles.section}>
                {roles[0].name}
            </span>
        </div>
        <div className={styles.content}>
            <p>Usuario: <span>{username}</span></p>
        </div>
        <div className={styles.content}>
            <p>Nombre: <span>{name + ' ' + lastName + ' ' + motherLastName}</span></p>
        </div>
        <div className={styles.content}>
            <p>Telefono: <span>{phone}</span></p>
        </div>
        <div className={styles.bts_conteiner}>
            <button className={styles.bt_editar}>Editar</button>
            <button className={styles.bt_eliminar} onClick={ConsumirApi}>Eliminar</button>
        </div>
        
    </div>
  )
}
