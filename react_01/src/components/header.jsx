import { NavLink } from 'react-router-dom'
import Button from './btn.jsx'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="titulo">VEXA</h1>
      </div>
      <nav>
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Home
        </NavLink>
        <NavLink to="/conteudos" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Conteúdos
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Contato
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Sobre nós
        </NavLink>
      </nav>
      <Button />
    </header>
  )
}

export default Header