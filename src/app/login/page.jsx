"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/login.module.css";
export default function Login() {
  const [usuarios, setUsuarios] = useState({});
  const [usuarioValido, setUsuarioValido] = useState(false);
  const [error, setError] = useState(false);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const consultarApi = async () => {
      let username = "wewin";
      let password = "1234";
      let headers = new Headers();
      

      headers.append("Authorization","Basic " + btoa(username + ":" + password));
      const peticion = await fetch('http://localhost:8080/api/user/get',
      {
        method:'GET',
        headers:headers
      });
      const respuesta = await peticion.json();
      setUsuarios(respuesta)
      console.log(respuesta);
    };
    consultarApi();
  }, []);

  const validacionUsuario = (e) => {
    e.preventDefault();

    for (let i = 0; i < usuarios.length; i++) {
      //console.log(usuarios[i].email);
      if (correo === usuarios[i].username && password === usuarios[i].password) {
        console.log("Datos validos");
        setError(false);
        setUsuarioValido(true);
        router.push("/dashboard/empleados");
        break;
      }
      if (!usuarioValido) {
        console.log("el usuario no está registrado");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }
  };
  const HandleCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const HandlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Inicia sesión</h1>
        <form action="">
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
              required
              onChange={HandleCorreo}
              value={correo}
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
              name="userPassword"
              id="userPassword"
              placeholder="contraseña"
              required
              onChange={HandlePassword}
              value={password}
            />
          </div>
          {usuarioValido ? (
            <button
              onClick={validacionUsuario}
              type="submit"
              className={styles.bt}
            >
              Entrar
            </button>
          ) : (
            <button
              onClick={validacionUsuario}
              type="submit"
              className={styles.bt}
            >
              Entrar
            </button>
          )}

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
