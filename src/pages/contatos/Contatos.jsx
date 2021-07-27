import React, { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import VoltarSair from '../../shared/components/VoltarSair';
import './Contatos.scss';

const contatos = [
  {title: 'Secretaria Acadêmica', id: 1},
  {title: 'Secretaria Acadêmica', id: 2},
  {title: 'Secretaria Acadêmica', id: 3},
  {title: 'Secretaria Acadêmica', id: 4},
  {title: 'Secretaria Acadêmica', id: 5},
  {title: 'Secretaria Acadêmica', id: 6},
  {title: 'Secretaria Acadêmica', id: 7},
  {title: 'Secretaria Acadêmica', id: 8},
  {title: 'Secretaria Acadêmica', id: 9},
];
const Contatos = () => {

  useEffect(() => {
  //Lógica para chamar a api e buscar a lista de contatos
  });
  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={false} /> 
      {
        contatos.map(contato => (
          <div className='contato-container' >
            <a href={'/contatos/detalhe-contato/'+contato.id} className='flex-row' >
              <FiArrowRight size={24} color="#e1a546" />
              <p>{contato.title}</p>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Contatos;