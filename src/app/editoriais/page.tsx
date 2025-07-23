import { Servicos } from './Servicos/Servicos';
import Image from 'next/image';

export default function Editoriais() {
  return (

    <div className="servicos-box">

      <h1>Serviços editoriais</h1>

        <div className="imgcard-box">

          <Image src="/imgs/servicosfoto.jpg" alt="fotografia de uma máquina de escrever, cercada por itens diversos como óculos, papéis, flores, xícara, etc" height={500} width={500} className='img-servicos'/>

          <Servicos />

        </div>

        <div className="externo-box">

          <h1>Primeira Versão</h1>

          <div className="card-pv">

            <Image src='/imgs/pv-icon.png' alt='logo oficial do Primeira Versão, é o número 1 em branco com fundo azul escuro' height={100} width={100} className='logo-pv' ></Image>

            <div>
              <p className='descricao-servico'>Todos esses serviços estão disponíveis através do <a href="http://primeiraversao.carrd.co">Primeira Versão</a>.</p>
              <p className='descricao-servico'>Venha conhecer nossa equipe e fazer o seu orçamento!</p>
            </div>

          </div>

          <a className='saiba-mais' href="https://primeiraversao.carrd.co" target='blank'>saiba mais</a>

        </div>



    </div>

  );
}