import './Newsletter.css'
import Image from 'next/image'

export function Newsletter() {
    return (

        <div className='newsletter-box'>
            <div className='newsletter'>


                <h2>Assine a newsletter</h2>
            
                <iframe title='newsletter' src="https://madueoslivros.substack.com/embed" />

            </div>
        
        <Image src="/imgs/newsletterfoto.jpg" alt="fotografia de uma máquina de escrever, cercada de envelopes selados com lacres de cera" height={500} width={500} className='img-news'/>

        </div>

    )
}