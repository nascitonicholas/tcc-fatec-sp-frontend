import React, { useEffect } from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import LinkFlecha from '../../shared/components/LinkFlecha';
import './Contatos.scss';

const secoesContatos = [
  {id: '1', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '2', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '3', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '4', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '5', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '6', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '7', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '8', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '9', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
]
const Contatos = () => {

  localStorage.removeItem("tituloHeader");
  localStorage.setItem('tituloHeader','Contatos')

  useEffect(() => {
  //Lógica para c6amar a api e buscar a lista de contatos
  })

  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={true} /> 
      {
        secoesContatos.map(secaoContato => (
          <LinkFlecha id={secaoContato.id} title={secaoContato.title} url={'/detalhe-contato/' + secaoContato.id} />
        ))
      }
    </div>
  );
}

export default Contatos;