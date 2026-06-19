import { useState } from 'react';
import './Carrossel.css';

function Carrossel() {
  const imagens = [
    '/banner1.jfif',
    '/banner2.jfif',
    '/banner3.jfif',
  ];

  const [indice, setIndice] = useState(0);

  function proximo() {
    setIndice((indice + 1) % imagens.length);
  }

  function anterior() {
    setIndice((indice - 1 + imagens.length) % imagens.length);
  }

  return (
    <main>
      <div className="carrossel">
        <img
          src={imagens[indice]}
          alt={`Slide ${indice + 1}`}
          className="imagem"
        />

        <button className="botao esquerda" onClick={anterior}>
          ◀
        </button>

        <button className="botao direita" onClick={proximo}>
          ▶
        </button>
      </div>
    </main>
  );
}

export default Carrossel;