import '../assets/css/footer.css'
import { useLanguage } from '../Context/LanguageContext.jsx'
import { translations } from '../translation.js'

function Footer() {

  const { idioma, mudarIdioma } = useLanguage()
  const t = translations[idioma]

  return (
    <footer className="footer">

      <div className="footer-logo">
        VEXA<span>®</span>
      </div>

      <div className="footer-social">

        {/* seus links */}

        <button
          className="language-button"
          onClick={mudarIdioma}
        >
          {t.footer.idioma}
        </button>

      </div>

      <div className="footer-bottom">
        {t.footer.copyright}
      </div>

      <p>
        Idioma atual: {idioma}
      </p>

    </footer>
  )
}

export default Footer