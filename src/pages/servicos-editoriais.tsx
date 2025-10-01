import { Header } from '@/components/Header/Header'
import { Servicos } from '../components/Servicos/Servicos'
import { Footer } from '@/components/Footer/Footer'
import styles from '../components/Servicos/Servicos.module.css'
import ExportedImage from "next-image-export-optimizer"
import Head from 'next/head'

export default function Editoriais() {
  return (

    <>

    <Head>
      <title>Serviços Editoriais</title>
    </Head>


    <Header />

    <main>

      <div className={styles.servicosBox}>

        <h1>Serviços editoriais</h1>

          <div className={styles.imgCardBox}>

            <ExportedImage src="/imgs/servicosfoto.jpg" alt="fotografia de uma máquina de escrever, cercada por itens diversos como óculos, papéis, flores, xícara, etc" height={500} width={500} className={styles.imgServicos}/>

            <Servicos />

          </div>

          <div className={styles.externoBox}>

            <h1>Primeira Versão</h1>

            <div className={styles.cardPv}>

              <ExportedImage src='/imgs/pv-icon.png' alt='logo oficial do Primeira Versão, é o número 1 em branco com fundo azul escuro' height={100} width={100} className='logo-pv' ></ExportedImage>

              <div>
                <p>Todos esses serviços estão disponíveis através do <a href="http://primeiraversao.carrd.co" target='_blank'>Primeira Versão</a>.</p>
                <p>Venha conhecer nossa equipe e fazer o seu orçamento!</p>
              </div>

            </div>

            <a className={styles.saibaMais} href="https://primeiraversao.carrd.co" target='_blank'>saiba mais</a>

          </div>

      </div>

    </main>
    

    <Footer />


    </>


  );
}