import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../style/CardPadrao.scss';

const CardPadrao = ({ name, image, url, description }) => {

  const history = useHistory();
  const location = useLocation();
  const flagMenuPrincipal = location.pathname === '/menu-principal'? true : false;

  return (
    <li key={name} className='item-container' >
      {
        flagMenuPrincipal &&
        <button type="button" onClick={() => {history.push(url)}} >
          <img src={image} alt={'Imagem descritiva: ' + name } />
          <p>{description}</p>
        </button>
      }
      {
        !flagMenuPrincipal &&
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