"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
export default function Index() {
    useEffect(()=>{
        setTimeout(() => {
            router.push('/login');
        }, 2000);
    },[])
    const router = useRouter();
  return (
    <>
    <h1>Bievenido</h1>

    </>
  )
}
