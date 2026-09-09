import '../App.css'
import { useLanguage } from '../Context/LanguageContext.jsx'
import { translations } from '../translation.js'

function SearchBarB({ value = '', onChange = () => {} }) {

  const { idioma } = useLanguage()
  const t = translations[idioma]

  return (
    <div className="search-bar-b">

      <span className="search-icon">🔍</span>

      <input
        type="search"
        placeholder={t.ladoB.pesquisar}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={t.ladoB.pesquisar}
      />

    </div>
  )
}

export default SearchBarB