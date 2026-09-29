import { Link } from 'react-router-dom';

function ButtonLadoA() {
  return (
    <div className="btn">
      <Link
        to="/cadastro"
        className="btn-ladob"
      >
        Lado B
      </Link>
    </div>
  );
}

export default ButtonLadoA;