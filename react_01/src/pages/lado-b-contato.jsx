import Header2 from '../components/header2.jsx'
import Carrossel2 from '../components/Carrossel2.jsx'
import SearchBarB from '../components/SearchBarB.jsx'

function LadoBContato() {
  return (
    <div className="lado-b-page">
      <Header2 />
      <SearchBarB />
      <Carrossel2 />
      <main style={{ padding: '20px' }}>
        <section>
          <h2>Contato B</h2>
          <p>Esta é a página de contato do Lado B.</p>
        </section>
      </main>
    </div>
  )
}

export default LadoBContato
