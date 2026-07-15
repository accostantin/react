function Menu({ paginaAtiva, aoMudarPagina}) {
    //A lista evita repetir manualmente quatro botões quase iguais
    const paginas = ['Home', 'Conteudos', 'Dashboard']
 
    return (
        <nav className="menu" aria-label="Menu principal">
            {paginas.map((pagina) => (
                <button
                key={pagina}
                className={paginaAtiva === pagina ? 'menu-link ativo' : 'menu-link'}
                onClick={() => aoMudarPagina(pagina)}
                >
                    {pagina}
                    </button>
 
            ))}
            </nav>
    )
       
}
 
export default Menu