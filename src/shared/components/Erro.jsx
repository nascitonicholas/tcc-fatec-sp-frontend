import React from 'react';
import imgErro from '../../assets/pagina-nao-encontrada.png';
import '../style/Erro.scss';

const Erro = ({ mensagemErro }) => {

  return (
    <div className='erro-container flex flex-column flex-center' >
      <h1>{mensagemErro}</h1>
      <img src={imgErro} alt='Imagem de Erro' />
    </div>
  )

}

export default Erro;