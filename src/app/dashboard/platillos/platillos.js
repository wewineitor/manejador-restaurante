import styles from '../../styles/platillos.module.css'
export default function PlatillosSection() {
  return (
    <main className={styles.conteiner}>
      <h1 className={styles.title}>Platillos</h1>
      <div className={styles.select_conteiner}>
      <select className={styles.select} name="platillos" id="platillos">
        <option value="">Todos</option>
        <option value="">Desayuno</option>
        <option value="">Comida</option>
        <option value="">Cena</option>
        <option value="">Bebidas</option>
      </select>
      </div>

      <div className={styles.add_conteiner}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </div>

    </main>
  )
}
