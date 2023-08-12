import { useState, useEffect } from "react";
const useUsuario = (username) => {
  const [usuario, setUsuario] = useState("");
  const CapturarUsuario = () => {
    console.log("hola hola");
    setUsuario({ username });
    return(usuario)
  };
  return [CapturarUsuario];
};
export default useUsuario;
