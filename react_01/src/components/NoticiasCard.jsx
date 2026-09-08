function NoticiasCard({
  titulo,
  descricao,
  tags = [],
  conteudoUrl
}) {
  return (
    <article className="noticias-card">

      <div className="noticias-card-header">
        <h2>{titulo}</h2>
      </div>

      <div className="noticias-card-conteudo">

        <p>{descricao}</p>

        <div className="noticias-card-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          className="noticias-card-link"
          href={conteudoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Ver conteúdo
        </a>

      </div>

    </article>
  )
}

export default NoticiasCard