'use client'

import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import './Slides.css'

export function Destaques() {

    // Ativa o loop e recebe ref + API
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

      // Estado para controlar o índice do slide selecionado
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

     // Funções de navegação
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
    const scrollTo   = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

    // Quando a API estiver pronta, configuramos listeners
    useEffect(() => {
        if (!emblaApi) return

        // Pega todos os "snap points" para construir as bolinhas
        setScrollSnaps(emblaApi.scrollSnapList())

        // Atualiza o índice selecionado sempre que rolar
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)

        // Inicia no estado correto
        onSelect()

        // Cleanup
        return () => {
        emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className="slides">
        <h1>Destaques</h1>

        <div className="embla-box">
            {/* botão anterior */}
            <button onClick={scrollPrev} className="embla__button">❮</button>

            {/* Carrossel */}
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="card-livro">

                            <Image src="/imgs/rainha-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>

                            <div className="livro-info">
                                <h2>A Rainha de Dois Reinos</h2>
                                <p className='descricao' >Um impasse surge com a morte do antigo rei inimigo, negociações importantes das quais Beatrice, a principal herdeira do trono de Lunara, gostaria de participar. Ela desejava fazer mais pelo seu povo, mas não esperava que, para isso, precisasse abandonar tudo o que conhece e se casar com Hector Valdez Lyon, o novo rei do reino inimigo.</p>

                                <div className="botoes-box">
                                    <a className='link-compra' href="https://www.amazon.com.br/dp/8555471044" target="_blank">livro físico</a>
                                    <a className='link-compra' href="https://www.amazon.com.br/dp/B0DQVLBCL2" target="_blank">e-book</a>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="embla__slide">
                        <div className="card-livro">

                            <Image src="/imgs/ndi-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>

                            <div className="livro-info">
                                <h2>Noites de Insônia</h2>
                                <p className='descricao' >Sufocada pelo rumo da sua vida, Marcela se sente cada vez mais alienada das pessoas a sua volta. Enquanto isso, Rodrigo vive como o herdeiro milionário que todos esperam que ele seja. Em uma noite, o caminho dos dois se cruza, quando eles se esbarram ao tentar escapar de suas próprias bagunças. De repente, Rodrigo começa a fazer parte do dia-a-dia de Marcela, e fica cada vez mais difícil ignorar a conexão que tiveram.</p>

                                <div className="botoes-box">
                                    <a className='link-compra' href="https://loja.uiclap.com/titulo/ua38934/" target="_blank">livro físico</a>
                                    <a className='link-compra' href="https://www.amazon.com.br/dp/B0CFWRGLD2" target="_blank">e-book</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="embla__slide">
                        <div className="card-livro">

                            <Image src="/imgs/mav-livros.png" alt="placeholder" height={300} width={300} className='livros-img'/>

                            <div className="livro-info">
                                <h2>Trilogia dos Amores</h2>
                                <p className='descricao'>“Meu Amor Viajante” é uma noveleta sobre as memórias que fazemos com aqueles que amamos, a efemeridade das nossas relações e as histórias que queremos contar, mas que nem sempre saem como esperávamos.</p>

                                <p className="descricao">Conheça também o desfecho da Trilogia dos Amores em Meu Amor Sempre!</p>

                                <div className="botoes-box">
                                    <a className='link-compra' href="https://www.amazon.com.br/dp/B0B66Y2XN1" target="_blank">leia aqui</a>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* botão próximo */}
            <button onClick={scrollNext} className="embla__button">❯</button>
        </div>

        {/* Indicators (bolinhas) */}
            <div className="embla__dots">
            {scrollSnaps.map((snap, idx) => (
                <button
                key={snap}
                className={`embla__dot${idx === selectedIndex ? ' is-selected' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
            </div>
        </div>
    )
}