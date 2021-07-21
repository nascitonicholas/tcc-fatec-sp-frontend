import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/CardPadrao.scss';

const CardPadrao = ({ name, image, url, description }) => {

  const history = useHistory();

  return (
    <li key={name} className='item-container' >
      <button type="button" onClick={() => {history.push(url)}} >
        <img src={image} alt={'Imagem descritiva: ' + name } />
        <p>{description}</p>
      </button>
    </li>
  );
}

export default CardPadrao;