import minhaImagem from './assets/menu.png';

function Menu() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <button className='menu-btn' onClick={handleClick}>
      <img src={minhaImagem} alt="Descrição da imagem"/>

    </button>
  );
}

export default Menu;