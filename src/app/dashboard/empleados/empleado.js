import { useState, useEffect, use } from 'react'
import scrollOff from '../../../hooks/scrollOff';
import styles from '../../styles/empleado.module.css'
export default function Empleado({empleado,setModal}) {

    const HandleModal = ()=>{
        setModal(true);
        scrollOff('true')
        sessionStorage.setItem('EmpleadoPorEliminar',empleado.username)
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
            <button className={styles.bt_eliminar} onClick={HandleModal}>Eliminar</button>
        </div>
        
    </div>
  )
}
