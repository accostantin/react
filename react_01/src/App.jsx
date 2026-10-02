import { useState, useEffect } from "react";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LadoA from "./pages/lado-a.jsx";
import LadoB from "./pages/ladob.jsx";
import LadoBAcessorios from "./pages/lado-b-acessorios.jsx";
import LadoBNovaColecao from "./pages/lado-b-nova-colecao.jsx";
import LadoBContato from "./pages/lado-b-contato.jsx";
import LadoBSobre from "./pages/lado-b-sobre.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Cadastro from "./pages/cadastro.jsx";
import Entrar from "./pages/entrar.jsx";

import "./App.css";

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const salvos = localStorage.getItem("favoritos");
      return salvos ? JSON.parse(salvos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="App">

      <main className="conteudo-principal">

        <Routes>

          {/* Página inicial */}
          <Route
            path="/"
            element={<Navigate to="/lado-b" replace />}
          />

          {/* Lado A */}
          <Route
            path="/lado-a"
            element={<LadoA />}
          />

          {/* Cadastro */}
          <Route
            path="/cadastro"
            element={<Cadastro />}
          />

          {/* Entrar */}
          <Route
            path="/entrar"
            element={<Entrar />}
          />

          {/* Lado B */}
          <Route
            path="/lado-b"
            element={
              <LadoB
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          {/* Acessórios */}
          <Route
            path="/lado-b/acessorios"
            element={
              <LadoBAcessorios
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          {/* Nova Coleção */}
          <Route
            path="/lado-b/nova-colecao"
            element={
              <LadoBNovaColecao
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          {/* Contato */}
          <Route
            path="/lado-b/contato"
            element={
              <LadoBContato
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          {/* Sobre */}
          <Route
            path="/lado-b/sobre"
            element={
              <LadoBSobre
                favoritos={favoritos}
                aoAlternarFavorito={toggleFavorito}
              />
            }
          />

          {/* Dashboard */}
          <Route
            path="/lado-b/dashboard"
            element={<Dashboard />}
          />

          {/* Qualquer rota inexistente */}
          <Route
  path="*"
  element={<Navigate to="/lado-a" replace />}
/>
        </Routes>

      </main>

    </div>
  );
}

export default App;
