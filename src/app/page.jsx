"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import styles from './styles/welcome.module.css'
export default function Index() {
    useEffect(()=>{
      router.push('/login');
    },[])
    const router = useRouter();
  return (
    <main className={styles.conteiner}>
    <h1 className={styles.title}>Iniciando</h1>
    <div className={styles.spinner}>
  <div className={styles.bounce1}></div>
  <div className={styles.bounce2}></div>
  <div className={styles.bounce3}></div>
</div>

    </main>
  )
}
