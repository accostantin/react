import { useState } from 'react'
import '../Carrossel.css'
import marieImg from '../assets/marie.png'
import slide2Img from '../assets/2.png'
import slide3Img from '../assets/3.png'

function Carrossel() {
  const imagens = [marieImg, slide2Img, slide3Img]

  const [indice, setIndice] = useState(0)

  function proximo() {
    setIndice((indice + 1) % imagens.length)
  }

  function anterior() {
    setIndice((indice - 1 + imagens.length) % imagens.length)
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
  )
}

export default Carrossel;