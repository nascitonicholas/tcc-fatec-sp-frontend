import React from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import { FiDownload } from 'react-icons/fi';
import './MatriculasConfirmadas.scss';

const MatriculasConfirmadas = () => {

  const matriculas = [
    {id: 1, codigoMateria:'ITE 002', nomeProfessor:'Walter Yogui Ferreira'},
    {id: 2, codigoMateria:'ITE 003', nomeProfessor:'Edgard da Silva'},
    {id: 3, codigoMateria:'ISA 002', nomeProfessor:'Edmea Veiga'},
    {id: 4, codigoMateria:'AGO 006', nomeProfessor:'Edgard da Silva'},
    {id: 5, codigoMateria:'ILP 590', nomeProfessor:'Marcelo Aoki Sakamoto'},
    {id: 6, codigoMateria:'IRC 008', nomeProfessor:'Arnaldo Pereira Castro'},
  ]

  return (
    <div>
      <VoltarSair flagVoltar={true} />
      <div className='flex flex-column flex-center' >
        <h1>Abaixo estão as suas disciplinas deste semestre</h1>
        <div className='matricula-container flex flex-row flex-justify-space-between flex-justify-center' >
          <div className='materias-container flex flex-column' >
            {
              matriculas.map(matricula => (
                <div className='item-matricula background-color-segundary flex flex-row' key={matricula.id} >
                  <h1 className='secundary-color' >{matricula.codigoMateria}</h1>
                  <p className='secundary-color' >{matricula.nomeProfessor}</p>
                </div>
              ))
            }
          </div>
          <div className='somente-pc flex flex-row' >
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