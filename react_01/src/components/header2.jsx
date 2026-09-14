import { NavLink } from 'react-router-dom'

function Header2() {
  return (
    <header className="header2">

      <div className="logo">
        <h1 className="titulo">VEXA</h1>
      </div>

      <nav>
        <NavLink
          to="/lado-b"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          Início
        </NavLink>

        <NavLink
          to="/lado-b/acessorios"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          Acessórios
        </NavLink>

        <NavLink
          to="/lado-b/nova-colecao"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          Nova Coleção
        </NavLink>

        <NavLink
          to="/lado-b/contato"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          Contato
        </NavLink>

        <NavLink
          to="/lado-b/sobre"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          Sobre
        </NavLink>
      </nav>

      <div className="btn">
        <NavLink to="/lado-a" className="btn-ladob">
          Lado B
        </NavLink>
      </div>

    </header>
  )
}

export default Header2