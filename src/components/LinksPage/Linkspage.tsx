import styles from './Linkspage.module.css'
import ExportedImage from "next-image-export-optimizer"
export function LinksPage() {

    return (

        <>
        
            <div  className={styles.intro}>

                <div>

                    <h1 className={styles.tituloLinks}>Madu e Os Livros</h1>
                    <p className={styles.textoIntro}>Sou autora de romance e fantasia, aqui estão os meus links mais importantes!</p>

                    
                </div>


            <div className={styles.principais}>

                
                    <ul className={styles.redesSociais}>

                        <li><a href="https://www.instagram.com/madueoslivros" target="_blank" className={styles.linkRedes}><ExportedImage src="/imgs/igpretofilled.svg" width={30} height={30} alt="instagram" /></a></li>

                        <li><a href="https://www.tiktok.com/@madueoslivros" target="_blank" className={styles.linkRedes}><ExportedImage src="/imgs/tiktok.svg" width={30} height={30} alt="tiktok" /></a></li>
                    
                        <li><a href="https://bsky.app/profile/madueoslivros.bsky.social" target="_blank" className={styles.linkRedes}><ExportedImage src="/imgs/bluesky.svg" width={30} height={30} alt="bluesky" /></a></li>
                
                    </ul>
                    

                <a className={styles.botaoLink} href="https://madueoslivros.com.br/" target='_blank'>meu site</a>

                <a className={styles.botaoLink} href="https://primeiraversao.carrd.co/" target='_blank'>leitura crítica e diagramação</a>

                <a className={styles.botaoLink} href="https://madueoslivros.substack.com/" target='_blank'>minha newsletter</a>

            </div>

            <hr className={styles.divisor} />

            <div className={styles.cardLinks}>

                <ExportedImage src="/imgs/osanguetablet.png" alt="o sangue derramado" width={500} height={500} />

                <h2>O Sangue Derramado</h2>

                <p className={styles.textoIntro}>Nesta antologia vampiresca, três histórias dividem o mesmo universo de um Rio de Janeiro fantástico. Os contos de O sangue derramado apresentam essas infames criaturas aterrorizando e seduzindo as eternas madrugadas da cidade maravilhosa.</p>

                <a className={styles.botaoDestaque} href="https://www.amazon.com.br/dp/B0FTG11XWK" target='_blank'>já na amazon!</a>

            </div>

            <hr className={styles.divisor} />


            <div className={styles.cardLinks}>

                <ExportedImage src="/imgs/busto-clarisse.png" alt="beatrice e hector" width={500} height={500} className={styles.imgLivro} />

                <h2>A Rainha de Dois Reinos</h2>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/8555471044" target='_blank'>	&#128081; livro físico</a>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B0DQVLBCL2" target='_blank'>e-book e kindle unlimited</a>

                <a className={styles.botaoLink} href="https://open.spotify.com/playlist/1SJkohyrCaQ5YHS23kIGGM?si=059b6fbb95d44d6b&pt=7b7263e3a5aa314a9cc8974bad970078" target='_blank'>a playlist</a>

            </div>

            <hr className={styles.divisor} />

            <div className={styles.cardLinks}>

                <ExportedImage src="/imgs/mard-rod1.jpg" alt="marcela e rodrigo" width={500} height={500} className={styles.imgLivro} />

                <h2>Noites de Insônia</h2>

                <a className={styles.botaoLink} href="https://loja.uiclap.com/titulo/ua38934/" target='_blank'>&#10024; livro físico</a>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B0CFWRGLD2" target='_blank'>e-book e kindle unlimited</a>

                <a className={styles.botaoLink} href="https://open.spotify.com/playlist/1SJkohyrCaQ5YHS23kIGGM?si=059b6fbb95d44d6b&pt=7b7263e3a5aa314a9cc8974bad970078" target='_blank'>a playlist</a>

            </div>

                        <hr className={styles.divisor} />

            <div className={styles.cardLinks}>

                <ExportedImage src="/imgs/mav-1.jpg" alt="camila e marcos" width={500} height={500} className={styles.imgLivro} />

                <h2>Trilogia dos Amores</h2>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B0B66Y2XN1" target='_blank'>meu amor viajante</a>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B0BPR3NJWJ" target='_blank'>meu amor sempre</a>

                <a className={styles.botaoLink} href="https://open.spotify.com/playlist/4KaqTQ8HCh9BliUnmdJYvD?si=192eabd67f414d6e&nd=1&dlsi=a573ec39d69c4dff" target='_blank'>a playlist</a>

            </div>

                        <hr className={styles.divisor} />

            <div className={styles.cardLinks}>

                <h2>Poesia</h2>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B0CT94W7K8" target='_blank'>achados & perdidos</a>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B09K3PP6ZS" target='_blank'>ensaios sobre a intimidade</a>

            </div>

            <hr className={styles.divisor} />

            <div className={styles.cardLinks}>

                <h2>Em antologias</h2>

                <a className={styles.botaoLink} href="https://livrariadacartola.com.br/produto/as-filhas-de-carmilla/" target='_blank'>As Filhas de Carmilla</a>

                <a className={styles.botaoLink} href="https://livrariadacartola.com.br/produto/inspira-respira-nao-pira/" target='_blank'>Inspira, respira… não pira!</a>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B08YTNFMZ4" target='_blank'>Não conte a ninguém</a>

                <a className={styles.botaoLink} href="https://www.amazon.com.br/dp/B09MHDQN71" target='_blank'>Nada é o que parece</a>

            </div>

                
            </div>

        <h4 className={styles.copyright}>Maria Eduarda Gonçalves &copy; 2025</h4>

        
        </>
        
    )
}