import Button from './Button.jsx';
import Menu from './Menu.jsx';

function Header({ onMenuClick }) {

  return (
    <header className="header">

      <Menu onMenuClick={onMenuClick} />

      <div className="logo">
        <h1 className="titulo">VEXA</h1>
      </div>

      <nav>
        <a href="/conteudos">Conteúdos</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/contato">Contato</a>
        <a href="/sobre">Sobre nós</a>
      </nav>

      <ButtonLadoA />

    </header>
  );
}

export default Header;