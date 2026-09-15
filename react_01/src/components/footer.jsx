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
        <a href="#">Termos de uso</a>
        <span>·</span>
        <a href="#">Política de privacidade</a>
      </div>

      <div className="footer-bottom">
        © 2026 VEXA. Todos os direitos reservados.
      </div>

    </footer>
  )
}

export default Footer