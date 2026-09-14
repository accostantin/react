import { NavLink } from 'react-router-dom';
import ButtonLadoA from './ButtonLadoA.jsx';
import Menu from './Menu.jsx';

function Header({ onMenuClick }) {

  return (
    <header className="header">

      <Menu onMenuClick={onMenuClick} />

      <div className="logo">
        <h1 className="titulo">VEXA</h1>
      </div>

      <nav>
        <NavLink to="/conteudos">Notícias</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/sobreConteudos">Conteúdos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>

      <ButtonLadoA />

    </header>
  );
}

export default Header;