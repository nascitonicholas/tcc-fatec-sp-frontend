import React from 'react';
import LogoFatec from '../../assets/logoFatec.png';
import LogoCTPS from '../../assets/logoCTPS.png';
import '../style/Header.scss';

const Header = () => {

  var aluno = { 
    nome: localStorage.getItem('nomeDoAluno'), 
    email: localStorage.getItem('emailDoAluno'),
    curso: localStorage.getItem('cursoDoAluno'),
    periodo: localStorage.getItem('periodoDoAluno'),
    matricula: localStorage.getItem('matriculaDoAluno'),
    campus: localStorage.getItem('campusDoAluno')
  };
  var alunoLogado = localStorage.getItem('alunoLogado');

  return (
    <header className='cor-header-footer' >
      <div className='flex flex-justify-space-between flex-row' >
        <div className='container-logo background-theme' >
          <img src={LogoFatec} alt='Logo Fatec' />
        </div>
        {
          alunoLogado && 
          <div>
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
          </div>
        }
        {
          !alunoLogado &&
          <div className='somente-pc' >
            <h1>FATEC SP</h1>
          </div>
        }
        <div className='somente-pc' >
          <img src={LogoCTPS} alt='Logo CTPS' />
        </div>
      </div>
    </header>
  );
}

export default Header;
