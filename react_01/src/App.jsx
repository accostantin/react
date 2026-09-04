import { useState, useEffect } from 'react'
import Header from './components/header.jsx'
import Sidebar from './components/Sidebar.jsx';
import Banner from './components/Banner.jsx';
import Home from './components/Home.jsx';
import ProfileSection from './components/ProfileSection.jsx';
import Footer from './components/Footer.jsx';
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

  const [isOpen, setIsOpen] = useState(false);
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
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  return (
    <div>
      <Header  onMenuClick={() => setIsOpen(true)} /> 
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <Banner />
      <Home />
      <ProfileSection />
      <Footer />

    </div>

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
          <Route path="/lado-b" element={<LadoB favoritos={favoritos} aoAlternarFavorito={toggleFavorito} />} />
          <Route path="/lado-b/acessorios" element={<LadoBAcessorios favoritos={favoritos} aoAlternarFavorito={toggleFavorito} />} />
          <Route path="/lado-b/nova-colecao" element={<LadoBNovaColecao favoritos={favoritos} aoAlternarFavorito={toggleFavorito} />} />
          <Route path="/lado-b/contato" element={<LadoBContato favoritos={favoritos} aoAlternarFavorito={toggleFavorito} />} />
          <Route path="/lado-b/sobre" element={<LadoBSobre favoritos={favoritos} aoAlternarFavorito={toggleFavorito} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App