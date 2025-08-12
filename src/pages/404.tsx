import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export default function Custom404() {
    return (

        <>

            <Header />

            <main>
                    
                <h1>Erro 404</h1>
                <div className="errorPage">

                    <h3>Página não encontrada!</h3>

                    <p className="descricao">Confira a URL ou retorne para a homepage.</p>
                </div>
            </main>
            
            <Footer />
        
        </>
    
    )
}