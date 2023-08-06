"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/login.module.css";
export default function Login() {
  const [credenciales, setCredenciales] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  const HandleCredenciales = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();

    const consultarApi = async () => {
      let username = "wewin";
      let password = "1234";
      let headers = new Headers();

      headers.append(
        "Authorization",
        "Basic " + btoa(username + ":" + password));
      const peticion = await fetch("http://localhost:8080/api/user/get", {
        method: "GET",
        headers: headers,
      });
      const respuesta = await peticion.json();
    };
    consultarApi();
  };

  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Inicia sesión</h1>
        <form action="" onSubmit={HandleSubmit}>
          {error ? (
            <p className={styles.error}>Correo o contraseña no validos</p>
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
              onChange={HandleCredenciales}
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
              onChange={HandleCredenciales}
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
