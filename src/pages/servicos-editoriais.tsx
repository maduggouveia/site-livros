import { Header } from '@/components/Header/Header';
import { Servicos } from '../components/Servicos/Servicos';
import Image from 'next/image';
import { Footer } from '@/components/Footer/Footer';
import styles from '../components/Servicos/Servicos.module.css'

export default function Editoriais() {
  return (

    <>

    <Header />

    <main>

      <div className={styles.servicosBox}>

        <h1>Serviços editoriais</h1>

          <div className={styles.imgCardBox}>

            <Image src="/imgs/servicosfoto.jpg" alt="fotografia de uma máquina de escrever, cercada por itens diversos como óculos, papéis, flores, xícara, etc" height={500} width={500} className={styles.imgServicos}/>

            <Servicos />

          </div>

          <div className={styles.externoBox}>

            <h1>Primeira Versão</h1>

            <div className={styles.cardPv}>

              <Image src='/imgs/pv-icon.png' alt='logo oficial do Primeira Versão, é o número 1 em branco com fundo azul escuro' height={100} width={100} className='logo-pv' ></Image>

              <div>
                <p>Todos esses serviços estão disponíveis através do <a href="http://primeiraversao.carrd.co">Primeira Versão</a>.</p>
                <p>Venha conhecer nossa equipe e fazer o seu orçamento!</p>
              </div>

            </div>

            <a className={styles.saibaMais} href="https://primeiraversao.carrd.co" target='blank'>saiba mais</a>

          </div>

      </div>

    </main>
    

    <Footer />


    </>


  );
}