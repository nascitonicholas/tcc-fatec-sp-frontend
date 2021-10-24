import React,  { useEffect, useState } from 'react';
import { apiHistoricos } from '../../services/api';
import Usuario from '../../models/Usuario';
import VoltarSair from '../../shared/components/VoltarSair';
import Aprovado from '../../assets/avaliacoes-finais/verificar.png';
import Reprovado from '../../assets/avaliacoes-finais/rejeitar.png';
import './AvaliacoesFinais.scss';

const alunoLogado = Usuario.getUsuario();

const AvaliacoesFinais = () => {

  localStorage.removeItem("tituloHeader");
  localStorage.setItem('tituloHeader','Avaliações Finais');

  const [notasAluno, setNotasAluno] = useState([]); 

  useEffect(() => {
    apiHistoricos.get('notas/semestre-atual/' + alunoLogado.matricula).then(response => {
      console.log(response);
      setNotasAluno(response.data.data);
    });
    console.log(notasAluno);
  });

  return (
    <div >
      <VoltarSair flagVoltar={true} />
      <div className='flex flex-column flex-center' >
        <div className='notas-container header-class flex flex-row flex-center' >
          <div className='item-div flex flex-justify-center' ><p>DISCIPLINA</p></div>
          <div className='item-div flex flex-justify-center' ><p>F</p></div>
          <div className='item-div flex flex-justify-center' ><p>PROFª</p></div>
          <div className='item-div flex flex-justify-center' ><p>C</p></div>
          <div className='item-div flex flex-justify-center' ></div>
        </div>
        <div className='flex flex-column flex-center' >
          {
            notasAluno.map(nota => (
              <div className='notas-container flex-row' key={nota.id} >
                <div className='item-div nota-div flex flex-justify-center' ><p>{nota.disciplina}</p></div>
                <div className='item-div nota-div flex flex-justify-center' ><p>{nota.faltas}</p></div>
                <div className='item-div nota-div flex flex-justify-center' ><p>{nota.professor}</p></div>
                <div className='item-div nota-div flex flex-justify-center' ><p style={parseInt(nota.nota)>6?{color: "#264653"}:{color: "#D9180C"}} >{nota.nota}</p></div>
                <div className='item-div nota-div flex flex-justify-center' ><img src={parseInt(nota.nota)>6?Aprovado:Reprovado} alt='Imagem' /></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );

};

export default AvaliacoesFinais;