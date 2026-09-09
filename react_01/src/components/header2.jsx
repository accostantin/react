import { NavLink } from 'react-router-dom'
import Button from './btn.jsx'
import { useLanguage } from '../Context/LanguageContext.jsx'
import { translations } from '../translation.js'

function Header2() {
  const { idioma } = useLanguage()
  const t = translations[idioma]

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
          {t.menu.inicio}
        </NavLink>

        <NavLink
          to="/lado-b/acessorios"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          {t.menu.acessorios}
        </NavLink>

        <NavLink
          to="/lado-b/nova-colecao"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          {t.menu.novaColecao}
        </NavLink>

        <NavLink
          to="/lado-b/contato"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          {t.menu.contato}
        </NavLink>

        <NavLink
          to="/lado-b/sobre"
          className={({ isActive }) => (isActive ? 'ativo' : '')}
        >
          {t.menu.sobre}
        </NavLink>

      </nav>

      <Button />

    </header>
  )
}

export default Header2