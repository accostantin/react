import { useState } from 'react';
import './Carrossel.css';

function Carrossel() { 
  const imagens = [ 
    './src/assets/marie.png',
    './src/assets/2.png',
    './src/assets/3.png',
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
      <div className="Carrossel">
      <button className="botaoesquerda" onClick={anterior}>
          ◀
        </button>
        <img
          src={imagens[indice]}
          alt={`Slide ${indice + 1}`}
          className="imagem"
        />


        <button className="botaodireita" onClick={proximo}>
          ▶
        </button>
      </div>
    </main>
  );
}

export default Carrossel;