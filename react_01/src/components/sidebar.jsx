import "../assets/css/sidebar.css";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-item" onClick={onClose}>
          <span className="icone">←</span>
          <span>Voltar</span>
        </div>

        <div className="sidebar-item">
          <span className="icone">✎</span>
          <span>Criar conta ou entrar</span>
        </div>

        <div className="sidebar-item">
          <span className="icone">?</span>
          <span>Ajuda</span>
        </div>

        <div className="sidebar-item">
          <span className="icone">⚙</span>
          <span>Configurações</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;