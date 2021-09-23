import React, { useEffect, useState } from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import {apiVagas} from '../../services/api';
import './DetalheOfertasEstagio.scss';

const DetalheOfertasEstagio = () => {

  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    apiVagas.get('lista-vagas').then(response => {
      console.log(response);
      setVagas(response.data.data);
    });
    console.log(vagas);
  }, [vagas])

  return (
    <div>
      <VoltarSair flagVoltar={true} /> 
      {
       vagas.map(vaga => (
         <div className='vaga-container flex flex-column' key={vaga.id} >
           <p><strong>Data de vencimento: </strong>{vaga.data_vencimento}</p>
           <p><strong>Tipo: </strong>{vaga.tipo}</p>
           <p><strong>Número de vagas: </strong>{vaga.numero_vagas}</p>
           <p><strong>Endereço: </strong>{vaga.endereco}</p>
           <p><strong>Horário: </strong>{vaga.horario}</p>
           <p><strong>Remuneração: </strong>{vaga.remuneracao}</p>
           <p><strong>Benefícios: </strong>{vaga.beneficios}</p>
           <p><strong>Atividades a desempenhar: </strong>{vaga.atividades}</p>
           <p><strong>Período: </strong>{vaga.periodo}</p>
           <p><strong>Conhecimentos em informática: </strong>{vaga.conhecimentos}</p>
           <p><strong>Conhecimentos em língua estrangeira: </strong>{vaga.linguas}</p>
           <p><strong>Responsável: </strong>{vaga.responsavel}</p>
           <p><strong>Telefone: </strong>{vaga.telefone}</p>
           <p><strong>E-mail: </strong>{vaga.email}</p>
           <p><strong>Observação: </strong>{vaga.observacao}</p>
         </div>
       )) 
      }
    </div>
  )
}

export default DetalheOfertasEstagio;