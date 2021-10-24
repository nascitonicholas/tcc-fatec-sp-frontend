import React, { useState, useEffect } from 'react';
import Usuario from '../../models/Usuario';
import VoltarSair from '../../shared/components/VoltarSair';
import { apiHistoricos } from '../../services/api';
import './HistoricoDisciplinar.scss';

const HistoricoDisciplinar = () => {

  const alunoLogado = Usuario.getUsuario();
  const [historicos, setHistoricos] = useState([]);
  
  useEffect(() => {
    apiHistoricos.get('notas/' + alunoLogado.matricula).then(response => {
      console.log(response);
      setHistoricos(response.data.data);
    });
    console.log(historicos);
  }, [])

  return (
    <div>
      <VoltarSair flagVoltar={true} />
      <div className='dados-historico-container flex flex-column' >
        <h1><strong>Nome:</strong> {alunoLogado.nome} | <strong>RA:</strong> {alunoLogado.matricula}</h1>
      </div>
      <div className='flex flex-column flex-center full-width' >
        <div className='historico-container header-class flex-row flex-center' >
          <div className='item-div flex flex-justify-center full-width' ><p>DISCIPLINA</p></div>
          <div className='item-div flex flex-justify-center full-width' ><p>Nome da Disciplina</p></div>
          <div className='item-div flex flex-justify-center full-width' ><p>Ano/semestre de conclusão</p></div>
          <div className='item-div flex flex-justify-center full-width' ><p>Média</p></div>
          <div className='item-div flex flex-justify-center full-width' ><p>C</p></div>
          <div className='item-div flex flex-justify-center full-width' ><p>Semestre</p></div>
        </div>
        <div className='flex flex-column flex-center full-width' >
          {
            historicos.map(historico => (
              <div className='historico-container flex-row flex-row flex-center' key={historico.disciplina} >
                <div className='item-div flex flex-justify-center full-width' ><p>{historico.disciplina}</p></div>
                <div className='item-div flex flex-justify-center full-width' ><p>{historico.nomeDisciplina}</p></div>
                <div className='item-div flex flex-justify-center full-width' ><p>{historico.conclusao}</p></div>
                <div className='item-div flex flex-justify-center full-width' ><p style={parseInt(historico.media)>6?{color: "#264653"}:{color: "#D9180C"}} >{historico.media}</p></div>
                <div className='item-div flex flex-justify-center full-width' ><p>{historico.conceito}</p></div>
                <div className='item-div flex flex-justify-center full-width' ><p>{historico.semestre}</p></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )

}

export default HistoricoDisciplinar;