import { useRouter } from 'next/navigation'
import scrollOff from '../hooks/scrollOff'
import styles from '../app/styles/modal.module.css'
export default function DeleteModal({setModal}) {
  const HandleClose=()=>{
    setModal(false)
    scrollOff('false')
  }
  const ConsumirApi = async ()=>{
    let username = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');
    let headers = new Headers();
  
    headers.append(
      "Authorization",
      "Basic " + btoa(username + ":" + password));

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/delete/${sessionStorage.getItem('EmpleadoPorEliminar')}`,{
        headers:headers,
        method:'DELETE'
    })
    location.reload();
}
  return (
    <div className={styles.conteiner}>
        <div className={styles.modal_conteiner}>
        <div className={styles.conteiner_bt_cerrar}>
        <p className={styles.bt_cerrar} onClick={HandleClose}>X</p>
        </div>
        
        <h1>¿Estas seguro que deseas aliminar al siguiente usuario?</h1>
        <h2 className={styles.username}>{sessionStorage.getItem('EmpleadoPorEliminar')}</h2>
        <div className={styles.bts_conteiner}>
            <button className={styles.bt_no} onClick={HandleClose}>Mantener</button>
            <button className={styles.bt_si} onClick={ConsumirApi}>Eliminar</button>
        </div>
        </div>
        <div className={styles.background}></div>
     
    </div>
  )
}
