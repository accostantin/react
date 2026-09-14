function FiltroCategoria({ categorias, valor, aoAlterar }) {

  const nomesCategorias = {
    Todas: 'Todas',
    Calça: 'Calça',
    Blusa: 'Blusa',
    Vestido: 'Vestido',
    Short: 'Short'
  }

  return (
    <label className="filtro-select">

      <select
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >

        <option value="Todas">
          Todas
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