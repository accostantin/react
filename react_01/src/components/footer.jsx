import '../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">

      {/* Logo */}
      <div className="footer-logo">
        CyberAgent<span>®</span>
      </div>

      {/* Links */}
      <nav className="footer-links">
        <a href="#">サイトマップ</a>
        <a href="#">プライバシーポリシー</a>
        <a href="#">サイトご利用規約</a>
        <a href="#">お問い合わせ</a>
        <a href="#">Abema公式ショップ</a>
      </nav>

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
        Copyright © CyberAgent, Inc.
      </div>

    </footer>
  );
}

export default Footer;