import Image from 'next/image'
import styles from './Newsletter.module.css'

export function Newsletter() {
    return (

        <div className={styles.newsletterBox}>
            <div className={styles.newsletter}>


                <h2>Assine a newsletter</h2>
            
                <iframe title='newsletter' src="https://madueoslivros.substack.com/embed" />

            </div>
        
        <Image src="/imgs/newsletterfoto.jpg" alt="fotografia de uma máquina de escrever, cercada de envelopes selados com lacres de cera" height={500} width={500} className={styles.imgNews}/>

        </div>

    )
}