import styles from "./Layouts.module.css"
function Layouts({children}) {
  return (
    <>
    <header className={styles.header }>
        <h1>Library</h1>
        <p><a href="https://github.com/Mehdi-riazi">MY Github</a> | Book App </p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Mehdi with ❤️</p>
    </footer>
    </>
  )
}

export default Layouts