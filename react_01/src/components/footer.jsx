import '../assets/css/footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        VEXA<span>®</span>
      </div>

      <div className="footer-social">
        <a href="#" className="social-icon" aria-label="Facebook">
          f
        </a>

        <a href="#" className="social-icon" aria-label="Instagram">
          ◎
        </a>

        <a href="#" className="social-icon" aria-label="Twitter">
          ♥
        </a>
      </div>

      <div className="footer-links">
        <a href="#">Início</a>
        <span>·</span>
        <a href="#">Sobre</a>
        <span>·</span>
        <a href="#">Contato</a>
      </div>

      <div className="footer-terms">
        <a href="#">Termos de Uso</a>
        <span>·</span>
        <a href="#">Política de Privacidade</a>
      </div>

      <div className="footer-bottom">
        © 2026 VEXA. Todos os direitos reservados.
      </div>

    </footer>
  )
}

export default Footer