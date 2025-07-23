import './About.css'
import Image from 'next/image'

export function About() {

    return (

        <div className='sobre-mim'>

            <Image src="/imgs/fotoautora.png" alt="foto da autora" width={200} height={200} className="img-perfil" />

          <div>
              <h3>Maria Eduarda Gonçalves</h3>
                    
              <p className='texto-corrido' >Autora de romance e fantasia. Cresci no Rio de Janeiro, mas nasci em Recife, PE. Sou formada em Comunicação Social pela PUC-Rio, com especialização em Cinema, além de já ter feito diversos cursos de produção editorial e escrita criativa. Acredito que contar histórias é uma parte essencial da vida, sou apaixonada por contos de fadas desde pequena e adoro aprender coisas novas!</p>

            <ul className="redes-sociais">
                <li><a href="https://www.amazon.com.br/stores/Madu-Gon%C3%A7alves/author/B08R951KTT" target="_blank" className="link-redes"><Image src="/icons/amazon-preto.svg" width={30} height={30} alt="amazon" /></a></li>

                <li><a href="https://www.instagram.com/madueoslivros" target="_blank" className="link-redes"><Image src="/icons/igpreto.svg" width={30} height={30} alt="instagram" /></a></li>
              
                <li><a href="https://bsky.app/profile/madueoslivros.bsky.social" target="_blank" className="link-redes"><Image src="/icons/bluesky.svg" width={30} height={30} alt="bluesky" /></a></li>
              
                <li><a href="mailto:madueoslivros@gmail.com" target="_blank" className="link-redes"><Image src="/icons/emailpreto.svg" width={30} height={30} alt="e-mail" /></a></li>
              
                        </ul>


              </div>
      </div>

    )

}