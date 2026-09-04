import { useState, useEffect } from 'react'

import LadoA from './pages/lado-a.jsx'

import LadoB from './pages/ladob.jsx'
import LadoBAcessorios from './pages/lado-b-acessorios.jsx'
import LadoBNovaColecao from './pages/lado-b-nova-colecao.jsx'
import LadoBContato from './pages/lado-b-contato.jsx'
import LadoBSobre from './pages/lado-b-sobre.jsx'

import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

function App() {

  const [favoritos, setFavoritos] = useState(() => {

    try {

      const salvos = localStorage.getItem('favoritos')

      return salvos ? JSON.parse(salvos) : []

    } catch {

      return []

    }

  })

  useEffect(() => {

    localStorage.setItem('favoritos', JSON.stringify(favoritos))

  }, [favoritos])

  const toggleFavorito = (id) => {

    setFavoritos((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    )

  }

  return (

    <div className="App">

      <main className="conteudo-principal">

        <Routes>

          <Route
            path="/lado-a"
            element={<LadoA />}
          />

          <Route
            path="/lado-b"
            element={
              <LadoB
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          <Route
            path="/lado-b/acessorios"
            element={
              <LadoBAcessorios
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          <Route
            path="/lado-b/nova-colecao"
            element={
              <LadoBNovaColecao
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          <Route
            path="/lado-b/contato"
            element={
              <LadoBContato
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          <Route
            path="/lado-b/sobre"
            element={
              <LadoBSobre
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          <Route
            path="*"
            element={<Navigate to="/lado-b" replace />}
          />

        </Routes>

      </main>

    </div>

  )

}

export default App