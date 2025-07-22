import './Footer.css'
import Image from 'next/image'

export function Footer() {

  return (

    <div className="footer">

      <div className="box-footer">

          <ul className="redes-sociais">
            <li><a href="https://www.amazon.com.br/stores/Madu-Gon%C3%A7alves/author/B08R951KTT" target="_blank"><Image src="/imgs/amazon.svg" width={30} height={30} alt="amazon" /></a></li>

            <li><a href="https://www.instagram.com/madueoslivros" target="_blank"><Image src="/imgs/instagram.svg" width={30} height={30} alt="instagram" /></a></li>

            <li><a href="https://bsky.app/profile/madueoslivros.bsky.social" target="_blank"><Image src="/imgs/bluesky-branco.svg" width={30} height={30} alt="bluesky" /></a></li>

            <li><a href="mailto:madueoslivros@gmail.com" target="_blank"><Image src="/imgs/email.svg" width={30} height={30} alt="e-mail" /></a></li>

          </ul>


        <h4 className="copyright">&copy; Todos os direitos reservados</h4>

      </div>

    </div>

  )
}