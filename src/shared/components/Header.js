import React from 'react';
import '../style/Header.scss';

export default function Header() {

  var aluno = { 
    nome: localStorage.getItem('nomeDoAluno') || 'Nicholas Carvalho do Nascimento', 
    email: localStorage.getItem('nomeDoAluno') || 'nicholas.nascimento@fatecsp.gov.br',
    curso: localStorage.getItem('nomeDoAluno') || 'Analise e Desenvolvimento de Sistemas',
    periodo: localStorage.getItem('nomeDoAluno') || 'NOITE',
    matricula: localStorage.getItem('nomeDoAluno') || '18100374',
    campus: localStorage.getItem('nomeDoAluno') || 'São Paulo'
  };

  return (
    <header className='background-theme' >
      <div className='flex flex-justify-space-between flex-row' >
        <div>
          <img src='../../assets/logoFatec.png' alt='Logo Fatec' />
        </div>
        <div className='flex-column' >
          <div>
            <h1 className='texto-fundo'>{aluno.nome}</h1>
            <p className='texto-fundo' >E-mail: {aluno.email}</p>
          </div>
        </div>
        <div className='flex-column' >
          <p>{aluno.curso} | {aluno.periodo}</p>
          <div className='flex-row flex-justify-space-between' >
            <p>Matrícula: {aluno.matricula}</p>
            <p>Campus: {aluno.campus}</p>
          </div>
        </div>
        <div>
          <img src='../../assets/logoCTPS.png' alt='Logo CTPS' />
        </div>
      </div>
    </header>
  );
}
