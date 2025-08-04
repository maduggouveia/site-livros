import * as React from "react";
import { Tabs } from "radix-ui";
import Image from "next/image";
import './Bookslist.css'

import { ImgsMAV, ImgsNDI, ImgsRainha } from "../Gallery/Gallery";

const BookTabs = () => (

        <Tabs.Root className="tabs-root" defaultValue="tab1">

            <Tabs.List className="tabs-list">
                <Tabs.Trigger className="tabs-trigger" value="tab1">
                    Prosa
                </Tabs.Trigger>
                <Tabs.Trigger className="tabs-trigger" value="tab2">
                    Poesia
                </Tabs.Trigger>
                <Tabs.Trigger className="tabs-trigger" value="tab3">
                    Outros
                </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="tabs-content" value="tab1">

                <div className="card-tablivro">
                
                    <Image src="/imgs/rainha-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>
                
                    <div className="tablivro-info">
                        <h2>A Rainha de Dois Reinos</h2>
                            <p className='descricao' >Um impasse surge com a morte do antigo rei inimigo, negociações importantes das quais Beatrice, a principal herdeira do trono de Lunara, gostaria de participar. Ela desejava fazer mais pelo seu povo, mas não esperava que, para isso, precisasse abandonar tudo o que conhece e se casar com Hector Valdez Lyon, o novo rei do reino inimigo.</p>
                
                            <div className="tabbotoes-box">
                                <a className='link-compra' href="https://www.amazon.com.br/dp/8555471044" target="_blank">livro físico</a>
                                <a className='link-compra' href="https://www.amazon.com.br/dp/B0DQVLBCL2" target="_blank">e-book</a>
                            </div>
                
                    </div>
                </div>

                <ImgsRainha />

                <div className="card-tablivro">

                    <Image src="/imgs/ndi-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>

                    <div className="tablivro-info">
                        <h2>Noites de Insônia</h2>
                        <p className='descricao' >Sufocada pelo rumo da sua vida, Marcela se sente cada vez mais alienada das pessoas a sua volta. Enquanto isso, Rodrigo vive como o herdeiro milionário que todos esperam que ele seja. Em uma noite, o caminho dos dois se cruza, quando eles se esbarram ao tentar escapar de suas próprias bagunças. De repente, Rodrigo começa a fazer parte do dia-a-dia de Marcela, e fica cada vez mais difícil ignorar a conexão que tiveram.</p>

                        <div className="tabbotoes-box">
                            <a className='link-compra' href="https://loja.uiclap.com/titulo/ua38934/" target="_blank">livro físico</a>
                            <a className='link-compra' href="https://www.amazon.com.br/dp/B0CFWRGLD2" target="_blank">e-book</a>
                        </div>

                    </div>
                </div>

                <ImgsNDI />

                <div className="card-tablivro">
                        
                    <Image src="/imgs/mav-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>
                    
                    <div className="tablivro-info">
                        <h2>Trilogia dos Amores</h2>

                        <div>
                            <p className='descricao'>“Meu Amor Viajante” é uma noveleta sobre as memórias que fazemos com aqueles que amamos, a efemeridade das nossas relações e as histórias que queremos contar, mas que nem sempre saem como esperávamos.</p>

                            <p className="descricao">Conheça também o desfecho da Trilogia dos Amores em <a href="https://www.amazon.com.br/dp/B0BPR3NJWJ" target="_blank">Meu Amor Sempre</a>!</p>
                        </div>
                        
                        <div className="tabbotoes-box">
                            <a className='link-compra' href="https://www.amazon.com.br/dp/B0B66Y2XN1" target="_blank">e-book</a>
                        </div>
                        
                    </div>
                </div>

                <ImgsMAV />

            </Tabs.Content>
            <Tabs.Content className="tabs-content" value="tab2">

                <div className="card-tablivro">
                        
                    <Image src="/imgs/ensaios-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>
                    
                    <div className="tablivro-info">
                        <h2>Ensaios Sobre a Intimidade</h2>

                        <div>
                            <p className="descricao">Poemas sobre amor, desejo e vulnerabilidade.</p>

                            <p className="descricao">Uma coletânea com 100 poemas, abordando a coragem que precisamos ter para amar, comentando sobre as euforias e as dores de quem se arrisca a ter um coração partido ou que está tentando remendá-lo. É sobre aprender a se dividir, a ter paciência, a ver as luzes na escuridão.</p>
                        </div>
                        
                        <div className="tabbotoes-box">
                            <a className='link-compra' href="https://www.amazon.com.br/dp/B09K3PP6ZS" target="_blank">e-book</a>
                        </div>
                        
                    </div>
                </div>

                <div className="card-tablivro">
                        
                    <Image src="/imgs/achados-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>
                    
                    <div className="tablivro-info">
                        <h2>Achados & Perdidos</h2>
                        <p className='descricao'>Uma coleção de poemas que faz sentido de mais ou de menos, dependendo do ponto de vista. Amor, monotonia, solidão, tempo, marés e vida; um punhado de sentimentos misturados em versos livres. São 45 poemas que nem sempre se conectam, mas que habitam o mesmo universo.</p>
                        
                        <div className="tabbotoes-box">
                            <a className='link-compra' href="https://www.amazon.com.br/dp/B0CT94W7K8" target="_blank">e-book</a>
                        </div>
                        
                    </div>
                </div>

            </Tabs.Content>

            <Tabs.Content className="tabs-content" value="tab3">

                <div className="card-tablivro">
                        
                    <Image src="/imgs/habito-livro.png" alt="placeholder" height={300} width={300} className='livros-img'/>
                    
                    <div className="tablivro-info">
                        <h2>(Re)criando o Hábito de Leitura</h2>
                        <p className='descricao'>Se você ama ler, ou gostaria de fazer isto mais no seu cotidiano, saiba que existem passos que você pode seguir para, não só facilitar o seu processo de leitura, como também entendê-lo melhor. (Re)criando o Hábito de Leitura é um projeto com 13 dicas para ajudar tanto leitores novatos quanto os mais experientes que estão enfrentando uma ressaca literária que parece infinita. Com estas dicas, é possível retomar a sua jornada no mundo da literatura sem medo.</p>
                        
                        <div className="tabbotoes-box">
                            <a className='link-compra' href="https://www.amazon.com.br/dp/B08P7MSBR8" target="_blank">e-book</a>
                        </div>
                        
                    </div>
                </div>

            </Tabs.Content>

        </Tabs.Root>

)


export function Bookslist() {

    return (

        BookTabs()

    )
}