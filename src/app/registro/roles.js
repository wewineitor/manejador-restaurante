import { useEffect } from 'react'
import styles from '../styles/registro.module.css'
export default function Roles() {
    useEffect(() => {
        const consumirApi = async () => {
            let username = "admin";
            let password = "admin";
            let headers = new Headers();

            headers.append(
                "Authorization",
                "Basic " + btoa(username + ":" + password));

            const consulta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/get`,
                { method: 'GET', headers: headers });
            const respuesta = await consulta.json();
            return respuesta
        }
        consumirApi();
    }, [])
    return (
        <>
            <option className={styles.option} value={''}></option>
            <option className={styles.option} value={'ROLE_MESERO'}>Mesero</option>
            <option className={styles.option} value={'ROLE_COCINERO'}>Cocinero</option>
            <option className={styles.option} value={'ROLE_RECEPCIONISTA'}>Recepcionista</option>
            <option className={styles.option} value={"ROLE_MAITRE"}>Maitre</option>
        </>
    )
}
