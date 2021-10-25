import React, { useEffect, useState } from 'react';
import { apiMatriculas } from '../../services/api';
import Usuario from '../../models/Usuario';
import VoltarSair from '../../shared/components/VoltarSair';
import { FiDownload } from 'react-icons/fi';
import './MatriculasConfirmadas.scss';

const MatriculasConfirmadas = () => {

  const [matriculas, setMatriculas] = useState([]);
  const alunoLogado = Usuario.getUsuario();

  useEffect(() => {
    apiMatriculas.get('matriculas/semestre-atual/' + alunoLogado.matricula).then(response => {
      console.log(response);
      setMatriculas(response.data.data);
    });
    console.log(matriculas);
  }, [])

  return (
    <div>
      <VoltarSair flagVoltar={true} />
      <div className='flex flex-column flex-center' >
        <h1 id='titulo-fixo' >Abaixo estão as suas disciplinas deste semestre</h1>
        <div className='matricula-container flex-row flex-justify-space-between flex-justify-center' >
          <div className='materias-container flex flex-column' >
            {
              matriculas.map(matricula => (
                <div className='item-matricula background-color-segundary flex-row' key={matricula.id} >
                  <h1 className='secundary-color' >{matricula.codigoMateria}</h1>
                  <p className='secundary-color' >{matricula.nomeProfessor}</p>
                </div>
              ))
            }
          </div>
          <div className='somente-pc flex-row' >
            <div className='flex flex-column'>
                <a href='/historico-disciplinar' rel="noreferrer" >
                  <button type="button">
                    <FiDownload size={45} color="#264653" />
                    <p>Histórico Disciplinar</p>
                  </button>
                </a>
            </div>
            <div className='flex flex-column'>
                <a href='/grades-horarias' rel="noreferrer" >
                  <button type="button">
                    <FiDownload size={45} color="#264653" />
                    <p>Grade Horária do Curso</p>
                  </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatriculasConfirmadas;