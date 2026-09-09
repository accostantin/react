import { useLanguage } from '../Context/LanguageContext.jsx'
import { translations } from '../translation.js'

function FiltroCategoria({ categorias, valor, aoAlterar }) {

  const { idioma } = useLanguage()
  const t = translations[idioma]

  const nomesCategorias = {
    Todas: t.ladoB.todas,
    Calça: t.ladoB.categorias.calca,
    Blusa: t.ladoB.categorias.blusa,
    Vestido: t.ladoB.categorias.vestido,
    Short: t.ladoB.categorias.short
  }

  return (
    <label className="filtro-select">

      <select
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >

        <option value="Todas">
          {nomesCategorias.Todas}
        </option>

        {categorias.map((categoria) => (
          <option
            key={categoria}
            value={categoria}
          >
            {nomesCategorias[categoria] || categoria}
          </option>
        ))}

      </select>

    </label>
  )
}

export default FiltroCategoria