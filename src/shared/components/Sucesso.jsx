import React from 'react';
import imgSucesso from '../../assets/sucesso.png';
import '../style/Sucesso.scss';

const Sucesso = ({ mensagem }) => {

  return (
    <div className='sucesso-container flex-row flex-center' >
      <img src={imgSucesso} alt='Imagem de Erro' />
      <h1>{mensagem}</h1>
    </div>
  )

}

export default Sucesso;