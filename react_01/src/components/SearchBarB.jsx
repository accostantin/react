import { useState } from 'react'
import '../App.css'

function SearchBarB() {
  const [query, setQuery] = useState('')

  return (
    <div className="search-bar-b">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        placeholder="Buscar Produtos"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label="Buscar Produtos"
      />
    </div>
  )
}

export default SearchBarB
