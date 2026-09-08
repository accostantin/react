import { useState } from 'react'

import NoticiasCard from '../components/NoticiasCard.jsx'
import Header from '../components/header.jsx'
import Sidebar from '../components/Sidebar.jsx'

function Conteudos() {
  const [isOpen, setIsOpen] = useState(false)

  const conteudos = [
    {
      titulo: 'Brasil registra recorde de feminicídios em 2025',
      descricao: 'O Brasil registrou 1.568 feminicídios em 2025, o maior número desde que o crime passou a ser contabilizado separadamente.',
      tags: ['Feminicídio', 'Violência contra a mulher'],
      conteudoUrl: 'https://www12.senado.leg.br/institucional/procuradoria/noticias/feminicidios-crescem-4-7-em-2025-pequenas-cidades-tem-maiores-taxas?',
    },

    {
      titulo: 'Feminicídios continuam sendo um problema no Brasil',
      descricao: 'Dados recentes mostram a permanência da violência de gênero e a necessidade de políticas públicas voltadas à proteção das mulheres.',
      tags: ['Feminicídio', 'Machismo'],
      conteudoUrl: 'http://www.gov.br/mj/pt-br/assuntos/noticias-1/numero-de-feminicidios-cai-no-brasil-nos-primeiros-sete-meses-de-2026?',
    },

    {
      titulo: 'Ligue 180 registra aumento nas denúncias',
      descricao: 'O canal de atendimento do Ministério das Mulheres registrou crescimento no número de denúncias de violência contra mulheres.',
      tags: ['Violência doméstica', 'Denúncia'],
      conteudoUrl: 'https://www.gov.br/mulheres/',
    },

    {
      titulo: 'Violência doméstica também impacta a saúde pública',
      descricao: 'Estudos mostram que milhares de mulheres precisam de atendimento hospitalar em decorrência da violência doméstica.',
      tags: ['Violência doméstica', 'Saúde pública'],
      conteudoUrl: 'https://www.gov.br/saude/',
    },

    {
      titulo: 'Mulheres negras são maioria entre vítimas de feminicídio',
      descricao: 'Os dados sobre feminicídio revelam a relação entre violência de gênero, desigualdade racial e vulnerabilidade social.',
      tags: ['Mulheres negras', 'Desigualdade', 'Feminicídio'],
      conteudoUrl: 'https://forumseguranca.org.br/',
    },

    {
      titulo: 'Combate à violência contra a mulher exige políticas públicas',
      descricao: 'A prevenção da violência de gênero depende de medidas de proteção, conscientização, denúncia e assistência às vítimas.',
      tags: ['Políticas públicas', 'Prevenção'],
      conteudoUrl: 'https://www.gov.br/mulheres/',
    },
  ];

  return (
    <div>
      <Header onMenuClick={() => setIsOpen(true)} />

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <main className="conteudos-page">

        <header className="conteudos-header">
          <h1>Conteúdos</h1>

          <div className="conteudos-underline"></div>
        </header>

        <section className="conteudos-grid">
          {conteudos.map((conteudo) => (
            <NoticiasCard
              key={conteudo.titulo}
              {...conteudo}
            />
          ))}
        </section>

      </main>
    </div>
  )
}

export default Conteudos