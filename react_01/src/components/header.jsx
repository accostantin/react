import Menu2 from './menu.jsx'
import Button from './btn.jsx'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="titulo">VEXA</h1>
      </div>
      <Menu2 />
      <Button />
    </header>
  )
} 

export default Header