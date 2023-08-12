"use client"
import { Children, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sesionNoValida } from '../../helpers/helper'
import styles from '../styles/nav.module.css'
export default function Nav({children}) {
  sesionNoValida();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const HandleMenu = ()=>{
    setOpenMenu(true)
  }
  const HandleClose = ( )=>{
    setOpenMenu(false)
  }
  return (
   <>
    <header className={styles.nav}>
      <div className={`${openMenu ? styles.pantalla_negra : ('') }`}></div>
      <div className={styles.bt_menu} onClick={HandleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="45" height="45" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
      </div>

      <nav className={`${styles.menu} ${openMenu ? styles.open_menu : ('') }`}>
        
        <div className={styles.close_content} onClick={HandleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>

        </div>
        <div className={styles.menu_content}>
          <div className={`${styles.icon} ${pathname === '/dashboard/empleados' ? styles.page_select : ('')}`}> 
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          </div>

          <Link className={`${styles.url} ${pathname === '/dashboard/empleados' ? styles.page_select : ('')}`} href={'/dashboard/empleados'}>Empleados</Link>
        </div>

        <div className={styles.menu_content}>
          <div className={`${styles.icon} ${pathname === '/dashboard/platillos' ? styles.page_select : ('')}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-salad" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
            <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
            <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
            <path d="M8 8l1 -4l4 2.5" />
            <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
          </svg>
          </div>
          <Link className={`${styles.url} ${pathname === '/dashboard/platillos' ? styles.page_select : ('')}`} href={'/dashboard/platillos'}>Platillos</Link>
        </div>
        <div className={styles.menu_content}>
          <div className={`${styles.icon} ${pathname === '/dashboard/estadisticas' ? styles.page_select : ('')}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-bar" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M4 20l14 0" />
          </svg>
          </div>
 
          <Link className={`${styles.url} ${pathname === '/dashboard/estadisticas' ? styles.page_select : ('')}`} href={'/dashboard/estadisticas'}>Estadisticas</Link>
        </div>

        <div className={styles.menu_content}>
          <div className={`${styles.icon} ${pathname === '/dashboard/cuenta' ? styles.page_select : ('')}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          </div>         
          <Link className={`${styles.url} ${pathname === '/dashboard/cuenta' ? styles.page_select : ('')}`} href={'/dashboard/cuenta'}>Cuenta</Link>
          </div>
      </nav>

    </header>
   {children}
   </>
  )
}
