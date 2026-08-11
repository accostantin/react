import Header2 from '../components/header2.jsx'
import Carrossel2 from '../components/Carrossel2.jsx'
import SearchBarB from '../components/SearchBarB.jsx'

function LadoB() {
  return (
    <div className="lado-b-page">
      <Header2 />
      <SearchBarB />
      <Carrossel2 />
      <main style={{ padding: '20px' }}>
        <section>
          <h2>Home</h2>
          <p>Bem-vindo ao Lado B da aplicação — mantém a mesma estrutura com nomes diferentes no menu.</p>
        </section>
      </main>
    </div>
  )
}

export default LadoB
