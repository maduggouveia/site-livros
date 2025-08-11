import { Header } from "@/components/Header/Header";
import { Bookslist } from "../components/Bookslist/Bookslist";
import { Footer } from "@/components/Footer/Footer";
import styles from '../components/Bookslist/Bookslist.module.css'

export default function Bookspage() {
  return (

    <>

    <Header />

    <main>

      <div className="booklistBox">

        <h1>Meus livros</h1>

          <Bookslist />

      </div>

    </main>
    
    <Footer />

    </>


  );
}