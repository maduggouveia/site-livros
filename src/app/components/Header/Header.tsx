import Link from 'next/link'
import './Header.css'

import Image from 'next/image'

export function Header() {

  return (

    <div className='header'>

      <div className="header-box">

        <Link className='header-img-link' href="/">
                <Image src="/imgs/testebranco.png" alt="Madu e Os Livros" height={85} width={200} />
        </Link>


                {/* <h1 className='header-title'>Madu e Os Livros</h1> */}
        <nav>
            <div className='lista-nav'>
                <Link className='botao-nav' href="/">Home</Link>
                <Link className='botao-nav' href="/meus-livros">Meus Livros</Link>
                <Link className='botao-nav' href="/servicos-editoriais">Serviços Editoriais</Link>
            </div>
        </nav>

      </div>

    </div>

  )
}