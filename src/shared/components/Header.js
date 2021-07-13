import React from 'react';
import LogoFatec from '../../assets/logoFatec.png';
import LogoCTPS from '../../assets/logoCTPS.png';
import '../style/Header.scss';

export default function Header() {

  var aluno = { 
    nome: localStorage.getItem('nomeDoAluno') || 'Nicholas Carvalho do Nascimento', 
    email: localStorage.getItem('emailDoAluno') || 'nicholas.nascimento@fatecsp.gov.br',
    curso: localStorage.getItem('cursoDoAluno') || 'Analise e Desenvolvimento de Sistemas',
    periodo: localStorage.getItem('periodoDoAluno') || 'NOITE',
    matricula: localStorage.getItem('matriculaDoAluno') || '18100374',
    campus: localStorage.getItem('campusDoAluno') || 'São Paulo'
  };

  return (
    <header className='cor-header-footer' >
      <div className='flex flex-justify-space-between flex-row' >
        <div className='container-logo background-theme' >
          <img src={LogoFatec} alt='Logo Fatec' />
        </div>
        <div className='container-nome-email flex-column somente-pc' >
          <div>
            <h1 className='texto-fundo'>{aluno.nome}</h1>
            <p className='texto-fundo' >E-mail: {aluno.email}</p>
          </div>
        </div>
        <div className='flex-column somente-pc' >
          <p>{aluno.curso} | {aluno.periodo}</p>
          <div className='flex-row flex-justify-space-between' >
            <p>Matrícula: {aluno.matricula}</p>
            <p>Campus: {aluno.campus}</p>
          </div>
        </div>
        <div className='somente-pc' >
          <img src={LogoCTPS} alt='Logo CTPS' />
        </div>
      </div>
    </header>
  );
}
