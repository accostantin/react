import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className="btn">
    <Link to="/roupas" className="btn-ladob-link" target="_blank" rel="noopener noreferrer">
  <button className="btn-ladob">Lado B</button>
   </Link>
    </div>
  )
}

export default Button;