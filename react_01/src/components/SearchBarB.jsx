
import '../App.css'

function SearchBarB({ value = '', onChange = () => {} }) {

  return (
    <div className="search-bar-b">
      <span className="search-icon">🔍</span>

      <input
        type="search"
        placeholder="Pesquisar"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Pesquisar"
      />
    </div>
  )
}

export default SearchBarB

