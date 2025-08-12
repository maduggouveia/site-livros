import styles from './Newsletter.module.css'
import ExportedImage from "next-image-export-optimizer"

export function Newsletter() {
    return (

        <div className={styles.newsletterBox}>
            <div className={styles.newsletter}>


                <h2>Assine a newsletter</h2>
            
                <iframe title='newsletter' src="https://madueoslivros.substack.com/embed" />

            </div>
        
        <ExportedImage src="/imgs/newsletterfoto.jpg" alt="fotografia de uma máquina de escrever, cercada de envelopes selados com lacres de cera" height={500} width={500} className={styles.imgNews}/>

        </div>

    )
}