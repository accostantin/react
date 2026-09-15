import ButtonLadoA from './ButtonLadoA.jsx'
import Menu from './Menu.jsx'
import { Link } from 'react-router-dom'

function Header({ onMenuClick }) {

  return (

    <header className="header">

      <Menu onMenuClick={onMenuClick} />

      <div className="logo">
        <h1 className="titulo">VEXA</h1>
      </div>

      <nav>

        <Link to="/conteudos">
          Conteúdos
        </Link>

        <Link to="/lado-b/dashboard">
          Dashboard
        </Link>

        <Link to="/contato">
          Contato
        </Link>

        <Link to="/sobre">
          Sobre nós
        </Link>

      </nav>

      <ButtonLadoA />

    </header>

  )
}

export default Header

