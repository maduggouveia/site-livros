import Image from 'next/image'
import styles from './Footer.module.css'

export function Footer() {

  return (

    <div className={styles.footer}>

      <div className={styles.boxFooter}>

          <ul className={styles.redesSociais}>
            <li><a href="https://ko-fi.com/madueoslivros" target="_blank" className="linkRedes" ><Image src="/imgs/kofi.svg" width={30} height={30} alt="ko-fi" /></a></li>

            <li><a href="https://www.amazon.com.br/stores/Madu-Gon%C3%A7alves/author/B08R951KTT" target="_blank" className="linkRedes" ><Image src="/imgs/amazon.svg" width={30} height={30} alt="amazon" /></a></li>

            <li><a href="https://www.instagram.com/madueoslivros" target="_blank" className="linkRedes"><Image src="/imgs/instagram.svg" width={30} height={30} alt="instagram" /></a></li>

            <li><a href="https://bsky.app/profile/madueoslivros.bsky.social" target="_blank" className="linkRedes"><Image src="/imgs/bluesky-branco.svg" width={30} height={30} alt="bluesky" /></a></li>

            <li><a href="mailto:madueoslivros@gmail.com" target="_blank" className="linkRedes"><Image src="/imgs/email.svg" width={30} height={30} alt="e-mail" /></a></li>

          </ul>

        <h4 className={styles.copyright}>Madu Gonçalves &copy; 2025</h4>

      </div>

    </div>

  )
}