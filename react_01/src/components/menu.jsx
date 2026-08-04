import minhaImagem from './assets/menu.png';

function menu() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <button className='menu-btn' onClick={handleClick}>
      <img src={minhaImagem} alt="Descrição da imagem"/>
      <span>Clique aqui</span>
    </button>
  );
}

export default menu;
