import { useRouter } from "next/navigation"
import { useEffect } from "react";

export function sesionNoValida() {
   const router = useRouter();
   useEffect(()=>{
      const sesionUsername = sessionStorage.getItem('username')
      const sesionPassword = sessionStorage.getItem('password')
      if( sesionUsername === null || sesionPassword === null){
        router.push('/')
         console.log('wuaaaaa')
         console.log('Sesion '+sesionUsername);
         console.log('Contraseña ' +sesionPassword);
      }
   },[])
}
