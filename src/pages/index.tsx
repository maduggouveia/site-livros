import { Header } from "@/components/Header/Header";
import { About } from "../components/About/About";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Destaques } from "../components/Slides/Slides";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (

    <>

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
