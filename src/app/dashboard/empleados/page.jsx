"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from '../../styles/empleados.module.css'
import EmpleadosSection from "./empleados.js"
import {sesionNoValida} from '../../../helpers/helper.js'
export default function Empleados() {
  const [empleados,setEmpleados]= useState([]);
  sesionNoValida();
  useEffect(()=>{
    
    const ConsumirApi = async()=>{
      let username = "admin";
      let password = "admin";
      let headers = new Headers();
    
      headers.append(
        "Authorization",
        "Basic " + btoa(username + ":" + password));
    
      const consulta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/get`,{method:'GET', headers:headers});
      const respuesta = await consulta.json();
      setEmpleados(respuesta)
        return respuesta
         }
      
    ConsumirApi();
  },[])
  return (
    <main className={styles.main_conteiner}>
    <EmpleadosSection
    empleados={empleados}/>
    </main>
  )
}

