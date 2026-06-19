import Button from './btn.jsx';

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <h1 className="titulo">VEXA</h1>
        </div>
        <nav>
            <a href="/conteudos">Conteúdos</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contato">Contato</a>
            <a href="/sobre">Sobre nós</a>
        </nav>
        <Button/>
      </header>
    );
  }
  
  export default Header;