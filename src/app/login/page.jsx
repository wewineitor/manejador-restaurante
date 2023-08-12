"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Error from "../../components/error.js";
import styles from "../styles/login.module.css";
export default function Login() {
  const [error, setError] = useState(false);
  const router = useRouter();
  const HandleSubmit = (e) => {
    e.preventDefault();
    let headers = new Headers();
    const data = new FormData(e.target);
    headers.append("Content-Type", "application/json");

    const consultarApi = async () => {
      const peticion = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/login`, {
        method: "POST",
        headers: headers,
        body:JSON.stringify({"username":data.get("username"),"password":data.get("password")})
      });
      const respuesta = await peticion.json();
      console.log(respuesta);
      if(respuesta.message === 'ok'){
        console.log('El usuario es valido')
        setError(false)
        sessionStorage.setItem('username',data.get("username"))
        sessionStorage.setItem('password',data.get("password"))
        router.push('/dashboard/empleados')
      }else{
        console.log('El usuario no es valido')
        setError(true)
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    };
    consultarApi();
  };

  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Inicia sesión</h1>
        <form action="" onSubmit={HandleSubmit}>
          {error ? (
            <Error mensaje={"Correo o contraseña no valido"} />
          ) : (
            <> </>
          )}
          <div className={styles.section_content}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>

            <input
              type="text"
              name="username"
              id="userName"
              placeholder="Nombre de usuario"
              required
            />
          </div>
          <div className={styles.section_content}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-lock"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
              </svg>
            </div>

            <input
              type="password"
              name="password"
              id="userPassword"
              placeholder="contraseña"
              required
            />
          </div>
          <button type="submit" className={styles.bt}>
            Entrar
          </button>

          <h2 className={styles.msg_password}>
            ¿Olvidaste tu contraseña?{" "}
            <Link legacyBehavior className={styles.msg_password} href={"#"}>
              Click aquí
            </Link>{" "}
          </h2>
          <div className={styles.bt_regis_section}></div>
          <Link href={"/registro"}>
            <button className={`${styles.bt} ${styles.bt_regis}`}>
              Registrate
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}
