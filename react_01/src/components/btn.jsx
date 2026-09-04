import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className="btn">
      <Link to="/lado-a" className="btn-ladob" target="_self" rel="noopener noreferrer">
        Lado B
      </Link>
    </div>
  )
}

export default Button;