import Header from './components/header.jsx'
import Carrossel from './components/Carrossel.jsx'
import Conteudos from './pages/conteudos.jsx'
import Dashboard from './pages/dashboard.jsx'
import Contato from './pages/contato.jsx'
import Sobre from './pages/sobre.jsx'
import Home from './pages/home.jsx'
import Roupas from './pages/roupas.jsx'
import NovaColecao from './pages/NovaColecao.jsx'
import LadoB from './pages/ladob.jsx'
import LadoBAcessorios from './pages/lado-b-acessorios.jsx'
import LadoBNovaColecao from './pages/lado-b-nova-colecao.jsx'
import LadoBContato from './pages/lado-b-contato.jsx'
import LadoBSobre from './pages/lado-b-sobre.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
    
      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
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
          <Route path="/contato" element={
            <>
              <Header />
              <Contato />
            </>
          } />
          <Route path="/sobre" element={
            <>
              <Header />
              <Sobre />
            </>
          } />
          <Route path="/roupas" element={
            <>
              <Header />
              <Roupas />
            </>
          } />
          <Route path="/nova-colecao" element={
            <>
              <Header />
              <NovaColecao />
               <Carrossel />
            </>
          } />
          <Route path="/lado-b" element={<LadoB />} />
          <Route path="/lado-b/acessorios" element={<LadoBAcessorios />} />
          <Route path="/lado-b/nova-colecao" element={<LadoBNovaColecao />} />
          <Route path="/lado-b/contato" element={<LadoBContato />} />
          <Route path="/lado-b/sobre" element={<LadoBSobre />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

