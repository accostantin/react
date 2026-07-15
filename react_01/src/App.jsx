import Header from './components/header.jsx'
import Carrossel from './components/Carrossel.jsx'
import Conteudos from './pages/conteudos.jsx'
import Dashboard from './pages/dashboard.jsx'
import Contato from './pages/contato.jsx'
import Sobre from './pages/sobre.jsx'
import Home from './pages/home.jsx'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
    
      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={
            <>
            
              <Carrossel />
              <Home />
            </>
          } />
          <Route path="/home" element={
            <>
              <Header />
              <Carrossel />
              <Home />
            </>
          } />
          <Route path="/conteudos" element={
            <>
              <Header />
              <Conteudos />
            </>
          } />
          <Route path="/dashboard" element={
             <>
              <Header />
              <Carrossel />
              <Dashboard /> 
           </>
          } /> 
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

