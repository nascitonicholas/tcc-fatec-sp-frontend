import React from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import './HistoricoDisciplinar.scss';

const HistoricoDisciplinar = () => {

  const alunoLogado = localStorage.getItem('alunoLogado');
  const aluno = JSON.parse(alunoLogado);
  const historicos = [
    {disciplina: '1741', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '5.5', conceito: '', semestre: '1'},
    {disciplina: '1742', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '6943', nomeDisciplina: 'ARQUITETURA E ORGANIZACAO DE COMPUTADORES', conclusao: '2018/01', media: '10.0', conceito: '', semestre: '1'},
    {disciplina: '6944', nomeDisciplina: 'ARQUITETURA E ORGANIZACAO DE COMPUTADORES', conclusao: '2018/01', media: '10.0', conceito: '', semestre: '1'},
    {disciplina: '6945', nomeDisciplina: 'ARQUITETURA E ORGANIZACAO DE COMPUTADORES', conclusao: '2018/01', media: '10.0', conceito: '', semestre: '1'},
    {disciplina: '6946', nomeDisciplina: 'PROGRAMACAO EM MICROINFORMATICA', conclusao: '2018/01', media: '', conceito: 'D', semestre: '1'},
    {disciplina: '6947', nomeDisciplina: 'PROGRAMACAO EM MICROINFORMATICA', conclusao: '2018/01', media: '', conceito: 'D', semestre: '1'},
    {disciplina: '6948', nomeDisciplina: 'PROGRAMACAO EM MICROINFORMATICA', conclusao: '2018/01', media: '', conceito: 'D', semestre: '1'},
    {disciplina: '6949', nomeDisciplina: 'PROGRAMACAO EM MICROINFORMATICA', conclusao: '2018/01', media: '', conceito: 'D', semestre: '1'},
    {disciplina: '1710', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '1711', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '1712', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '1713', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '1714', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '1715', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
    {disciplina: '1716', nomeDisciplina: 'MATEMATICA DISCRETA', conclusao: '2018/01', media: '7.5', conceito: '', semestre: '1'},
  ]

  return (
    <div>
      <VoltarSair flagVoltar={true} />
      <div className='dados-historico-container flex flex-column' >
        <h1><strong>Nome:</strong> {aluno.nome} | <strong>RA:</strong> {aluno.matricula}</h1>
        <h1><strong>Prazo máximo para conclusão curso:</strong> {aluno.prazo}</h1>
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