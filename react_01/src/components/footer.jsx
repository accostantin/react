import '../assets/css/footer.css';

function Footer() {
  return (
    <footer className="footer">

      {/* Logo */}
      <div className="footer-logo">
       VEXA<span>®</span>
      </div>


      {/* Redes sociais + idioma */}
      <div className="footer-social">

        <a href="#" className="social-icon">
          f
        </a>

        <a href="#" className="social-icon">
          ◎
        </a>

        <a href="#" className="social-icon">
          ♥
        </a>

        <a href="#" className="social-icon">
          ✉
        </a>

        <a href="#" className="social-icon">
          ▶
        </a>

        <button className="language-button">
          English
        </button>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        Copyright © VEXA, Inc.
      </div>

    </footer>
  );
}

export default Footer;