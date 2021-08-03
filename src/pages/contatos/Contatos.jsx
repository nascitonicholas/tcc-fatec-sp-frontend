import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import VoltarSair from '../../shared/components/VoltarSair';
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

  useEffect(() => {
  //Lógica para c6amar a api e buscar a lista de contatos
  })

  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={true} /> 
      {
        secoesContatos.map(secaoContato => (
          <div className='contato-container' key={secaoContato.id} >
            <a className='flex-row' href={'/detalhe-contato/' + secaoContato.id}>
              <FaArrowRight size={20} color="#e1a546" />
              <p>{secaoContato.title}</p>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Contatos;