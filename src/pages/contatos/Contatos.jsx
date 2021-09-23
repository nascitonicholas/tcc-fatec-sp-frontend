import React, { useEffect, useState } from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import LinkFlecha from '../../shared/components/LinkFlecha';
import {apiContatos} from '../../services/api';
import './Contatos.scss';

const Contatos = () => {

  const [secoesContatos, setSecoesContatos] = useState([]);

  localStorage.removeItem("tituloHeader");
  localStorage.setItem('tituloHeader','Contatos')

  useEffect(() => {
    apiContatos.get('lista-contatos').then(response => {
      console.log(response);
      setSecoesContatos(response.data.data);
    });
    console.log(secoesContatos);
  }, [secoesContatos]);

  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={true} /> 
      {
        secoesContatos.map(secaoContato => (
          <LinkFlecha id={secaoContato.id} title={secaoContato.title} url={'/detalhe-contato/' + secaoContato.id} key={secaoContato.id} />
        ))
      }
    </div>
  );
}

export default Contatos;