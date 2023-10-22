"use client"
import Link from "next/link"
import styles from '../../styles/registroExitoso.module.css'
export default function page() {
  const username = sessionStorage.getItem('username')
  return (
    <main className={styles.conteiner}>
        <h1>Te has registrado con existo!</h1>
        <h2>Nombre de usuario</h2>
        <h3 className={styles.usuario}>{username}</h3>
        <Link href='/login' legacyBehavior><a className={styles.bt} >Ir a inicio</a></Link>
    </main>
  )
}
