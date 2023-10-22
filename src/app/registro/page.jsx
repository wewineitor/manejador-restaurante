"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/registro.module.css";
import Roles from "./roles.js";
import Error from "../../components/error.js";
export default function Registro() {
  const rounter = useRouter();
  const [rol, setRol] = useState("");
  const [passwordValida, setPasswordValida] = useState(true);
  const [passwordView, setPasswordView] = useState(false);

  useEffect(()=>{
    console.log(rol)
  },[rol])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (data.get("password") !== data.get("verificarPassword")) {
      setPasswordValida(false);
    } else {
      setPasswordValida(true);
      const nickName =
        data.get("name").substring(0, 1) +
        data.get("lastName").substring(0, 2) +
        data
          .get("motherLastName")
          .substring(data.get("motherLastName").length - 2) +
        data.get("phone").substring(0, 1) +
        data.get("phone").substring(data.get("phone").length - 1);

        let headers = new Headers();
      headers.append("Content-Type", "application/json");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/create`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          username: nickName,
          name: data.get("name"),
          lastName: data.get("lastName"),
          motherLastName: data.get("motherLastName"),
          phone: Number(data.get("phone")),
          password: data.get("password"),
          enabled: true,
          roles: [
            {
              name: rol,
            },
          ],
        }),
      });
      sessionStorage.setItem('username',nickName);
      rounter.push("/registro/exitoso");
    }
  };
  const HandlePasswordView = () => {
    if (passwordView) {
      setPasswordView(false);
    } else {
      setPasswordView(true);
    }
  };

  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Registrate</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.nombre_conteiner}>
            <div className={styles.section}>
              <label htmlFor="Nombre">Nombres (s)</label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                required
              />
            </div>

            <div className={styles.section}>
              <label htmlFor="Apellido Paterno">Apellido Paterno</label>
              <input
                type="text"
                placeholder="Ingresa apellido paterno"
                name="lastName"
                required
              />
            </div>

            <div className={styles.section}>
              <label htmlFor="Apellido Materno">Apellido Materno</label>
              <input
                type="text"
                placeholder="Ingresa apellido materno"
                name="motherLastName"
                required
              />
            </div>
          </div>

          <div className={styles.conteiner_password}>
            <div className={styles.section}>
              <div className={styles.headerPassword}>
                <label htmlFor="Contraseña">Contraseña</label>
                <div
                  className={styles.bt_view_pass}
                  onClick={HandlePasswordView}
                >
                  {passwordView ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-eye"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-eye-closed"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                      <path d="M3 15l2.5 -3.8" />
                      <path d="M21 14.976l-2.492 -3.776" />
                      <path d="M9 17l.5 -4" />
                      <path d="M15 17l-.5 -4" />
                    </svg>
                  )}
                </div>
              </div>

              <input
                type={passwordView ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                name="password"
                required
              />
            </div>
            <div className={styles.section}>
              <label htmlFor="Contraseña">
                {passwordValida ? (
                  "Verifica tu contraseña"
                ) : (
                  <Error mensaje={"la contraseña no coincide"} />
                )}
              </label>
              <input
                type="password"
                placeholder="Verifica tu contraseña"
                name="verificarPassword"
                required
              />
            </div>
          </div>

          <div className={styles.conteiner_tel_rol}>
            <div className={styles.section}>
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                placeholder="ejem: 5512346543"
                name="phone"
                required
                maxLength={10}
              />
            </div>

            <div className={styles.section}>
              <label htmlFor="rol">Rol</label>
              <select
                className={styles.option_conteiner}
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <Roles/>
              </select>
            </div>
          </div>
          <div className={styles.bt_conteiner}>
            <button className={styles.bt}>Registrate</button>
          </div>
        </form>
      </div>
    </main>
  );
}
