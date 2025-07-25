import Link from 'next/link'
import './Header.css'

export function Header() {

  return (

    <div className='header'>

      <div className="header-box">

                <h1 className='header-title'>Madu e Os Livros</h1>
        <nav>
            <div className='lista-nav'>
                <Link className='botao-nav' href="/">Home</Link>
                <Link className='botao-nav' href="/meus-livros">Meus Livros</Link>
                <Link className='botao-nav' href="/editoriais">Serviços Editoriais</Link>
            </div>
        </nav>

      </div>

    </div>

  )
}