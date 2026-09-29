import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className="btn">
      <Link to="/cadastro" className="btn-ladob">
        Lado B
      </Link>
    </div>
  )
}

export default Button

