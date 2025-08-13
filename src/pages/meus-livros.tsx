import { Header } from "@/components/Header/Header"
import { Bookslist } from "../components/Bookslist/Bookslist"
import { Footer } from "@/components/Footer/Footer"
import styles from '../components/Bookslist/Bookslist.module.css'
import Head from "next/head"

export default function Bookspage() {
  return (

    <>

    <Head>
      <title>Meus Livros</title>
    </Head>

    <Header />

    <main>

      <div className={styles.booklistBox}>

        <h1>Meus livros</h1>

          <Bookslist />

      </div>

    </main>
    
    <Footer />

    </>


  );
}