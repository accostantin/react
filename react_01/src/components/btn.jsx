import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className="btn">
      <Link to="/lado-b" className="btn-ladob" target="_blank" rel="noopener noreferrer">
        Lado B
      </Link>
    </div>
  )
}

export default Button;