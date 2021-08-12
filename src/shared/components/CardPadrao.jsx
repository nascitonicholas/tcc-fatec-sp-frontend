import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../style/CardPadrao.scss';

const CardPadrao = ({ name, image, url, description }) => {

  const history = useHistory();
  const location = useLocation();
  const flagEstruturaCurrilcar = location.pathname === '/estrutura-curricular'? true : false;

  return (
    <li key={name} className='item-container' >
      {
        !flagEstruturaCurrilcar &&
        <button type="button" onClick={() => {history.push(url)}} >
          <img src={image} alt={'Imagem descritiva: ' + name } />
          <p>{description}</p>
        </button>
      }
      {
        flagEstruturaCurrilcar &&
        <a href={url} target='_blank' rel="noreferrer" >
          <button type="button" >
            <img src={image} alt={'Imagem descritiva: ' + name } />
            <p>{description}</p>
          </button>
        </a>
      }
    </li>
  );
}

export default CardPadrao;