import React,  { useEffect } from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import Aprovado from '../../assets/avaliacoes-finais/verificar.png';
import Reprovado from '../../assets/avaliacoes-finais/rejeitar.png';
import './AvaliacoesFinais.scss';

const notasAluno = [
  { disciplina: 'ITE 002', faltas: '4', professor: 'Walter Yogui Ferreira', nota: '9,6' },
  { disciplina: 'ITE 003', faltas: '2', professor: 'Walter Yogui Ferreira', nota: '9,6' },
  { disciplina: 'ISA 002', faltas: '0', professor: 'Walter Yogui Ferreira', nota: '8,4' },
  { disciplina: 'AGO 006', faltas: '0', professor: 'Walter Yogui Ferreira', nota: '7,3' },
  { disciplina: 'ILP 590', faltas: '0', professor: 'Walter Yogui Ferreira', nota: '10' },
  { disciplina: 'IRC 008', faltas: '6', professor: 'Walter Yogui Ferreira', nota: '5,2' },
];


const AvaliacoesFinais = () => {

  localStorage.removeItem("tituloHeader");
  localStorage.setItem('tituloHeader','Avaliações Finais')

  useEffect(() => {
    // Lógica para buscar o resultado do aluno e setar na variável notasAluno conforme exemplo
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
              <div className='notas-container flex-row' key={nota.disciplina} >
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