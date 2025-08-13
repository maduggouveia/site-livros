import { Header } from "@/components/Header/Header"
import { About } from "../components/About/About"
import { Newsletter } from "../components/Newsletter/Newsletter"
import { Destaques } from "../components/Slides/Slides"
import { Footer } from "@/components/Footer/Footer"
import Head from "next/head"

export default function Home() {
  return (

    <>

    <Head>
      <title>Madu e Os Livros</title>
    </Head>

    
    <Header />

    <main>

      <About />

      <Destaques />

      <Newsletter />

    </main>

    <Footer />
    

    </>

  );
}
