import styles from './Servicos.module.css'

export function Servicos() {

    return (

                <div className={styles.cardsBox}>
                    <div className={styles.cardServico}>

                        <h2>Leitura Crítica, Revisão & Preparação</h2>

                        <p className='descricao'>Você está precisando de um olhar profissional sobre seu livro? Quer ter certeza de que a sua história está na sua melhor versão possível antes de chegar aos seus leitores? Então esses serviços são perfeito para você!</p>

                    </div>

                    <div className={styles.cardServico}>

                        <h2>Diagramação</h2>

                        <p className='descricao'>Terminou o livro, mas agora não sabe o que fazer? Precisa de alguém para deixá-lo pronto para o leitor? A minha diagramação garante que você vai ter arquivos prontos para vender.</p>

                    </div>
                
                </div>

    )

}