import CardRoupa from './CardRoupa.jsx'
import EmptyState from './EmptyState.jsx'
import { useLanguage } from '../Context/LanguageContext.jsx'
import { translations } from '../translation.js'

function ListaRoupa({
  roupas,
  favoritos = [],
  aoAlternarFavorito = () => {}
}) {

  const { idioma } = useLanguage()
  const t = translations[idioma]

  if (roupas.length === 0) {
    return <EmptyState />
  }

  return (
    <section
      className="lista-roupas lado-b-grid"
      aria-label={t.ladoB.listaRoupas}
    >

      {roupas.map((roupa) => (
        <CardRoupa
          key={roupa.id}
          roupa={roupa}
          favorito={favoritos.includes(roupa.id)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      ))}

    </section>
  )
}

export default ListaRoupa