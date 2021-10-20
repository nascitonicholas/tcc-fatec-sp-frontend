import React from 'react';
import LogoFatec from '../../assets/logoFatec.png';
import LogoCTPS from '../../assets/logoCTPS.png';
import '../style/Header.scss';

const Header = () => {

  var alunoLogado = localStorage.getItem('alunoLogado');
  var tituloHeader = localStorage.getItem('tituloHeader')
  var aluno = JSON.parse(alunoLogado);

  return (
    <header className='background-color-segundary' >
      <div className='flex flex-justify-space-between flex-row' >
        <div className='container-logo background-theme' >
          <img src={LogoFatec} alt='Logo Fatec' className='logoFatec' />
        </div>
        {
          alunoLogado &&
          <div className='flex-row'>
            <div className='container-nome-email flex-column ' >
              <h1 className='nome-aluno font-white'>{aluno.nome}</h1>
              <p className='email-aluno font-white' >e-mail: {aluno.email}</p>
            </div>
            <div className='container-curso-periodo flex-column' >
              <p className='curso-periodo font-white'>{aluno.curso} | {aluno.periodo}</p>
              <div className='flex flex-row ' >
                <p className='font-white'>Matrícula:{aluno.matricula}</p>
                <p className='font-white'>Campus:{aluno.campus}</p>
              </div>
            </div>
          </div>
        }
        {
          !alunoLogado &&
          <div className='container-titulo-pagina'>
            <h1 className='tituloHeader font-white'>{tituloHeader}</h1>
          </div>
        }

        <div>
          <img src={LogoCTPS} alt='Logo CTPS' className='logoCTPS' />
        </div>
      </div>
    </header>
  );
}

export default Header;
