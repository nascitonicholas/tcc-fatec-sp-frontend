import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import VoltarSair from '../../shared/components/VoltarSair';
import './DetalheContato.scss';

const secoesContatos = [
  {id: '1', title: 'Secretaria Acadêmica1', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '2', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '3', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '4', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '5', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '6', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '7', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '8', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
  {id: '9', title: 'Secretaria Acadêmica', contatos:[{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'},{subtitle: 'Seção de Aluno', phone: '3322-2213', email: 'secaluno@fatecsp.br'}]},
];

const DetalheContrato = () => {

  const { id } = useParams();

  return (
    <div>
      <VoltarSair flagVoltar={true} /> 
      {
        secoesContatos.filter(secaoContato => secaoContato.id.includes(id)).map(contato => (
          <div className='container' >
            <h1 className='flex flex-justify-center' >{contato.title}</h1>
            {
              contato.contatos.map(info => (
                <div className='detalhe-container flex flex-column' >
                  <h1>{info.subtitle}</h1>
                  <div className='info-container flex-row' >
                    <FaPhoneAlt size={20} color="#264653" />
                    <p>{info.phone}</p>
                  </div>
                  <div className='info-container flex-row' >
                    <FaRegEnvelope size={20} color="#264653" />
                    <p>{info.email}</p>
                  </div>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default DetalheContrato;