import Link from 'next/link'
import styles from './Header.module.css'

import ExportedImage from "next-image-export-optimizer"

export function Header() {

  return (

    <div className={styles.header}>

      <div className={styles.headerBox}>

        <Link className={styles.headerImgLink} href="/">
                <ExportedImage src="/imgs/testebranco.png" alt="Madu e Os Livros" height={85} width={200} />
        </Link>


                {/* <h1 className='header-title'>Madu e Os Livros</h1> */}
        <nav>
            <div className={styles.listaNav}>
                <Link className={styles.botaoNav} href="/">Home</Link>
                <Link className={styles.botaoNav} href="/meus-livros">Meus Livros</Link>
                <Link className={styles.botaoNav} href="/servicos-editoriais">Serviços Editoriais</Link>
            </div>
        </nav>

      </div>

    </div>

  )
}