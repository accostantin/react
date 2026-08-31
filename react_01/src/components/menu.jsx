import minhaImagem from "../assets/img/menu.png";
import { NavLink } from 'react-router-dom';

function Menu({ onMenuClick }) {
  const links = [
    { to: '/home', label: 'Home' },
    { to: '/conteudos', label: 'Conteúdos' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/contato', label: 'Contato' },
    { to: '/sobre', label: 'Sobre nós' },
  ];

  return (
    <div className="menu-container" aria-label="Menu principal">
      <button className="menu-btn" onClick={onMenuClick} aria-label="Abrir menu">
        <img src={minhaImagem} alt="Menu" />
      </button>

      <nav className="menu">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'menu-link ativo' : 'menu-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Menu;

