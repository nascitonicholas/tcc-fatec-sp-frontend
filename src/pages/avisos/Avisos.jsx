import React, { useEffect } from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import { FiArrowRight } from 'react-icons/fi';
import './Avisos.scss';

const detalheAvisos = [
  {id: 1, data: '19/04/2021', title: 'Em Parceria com CPS, DIO oferece cursos gratuitos', mensagem: 'Estudantes e professores dos cursos da área de Tecnologia das Escolas Técnicas (Etecs) e Faculdades de Tecnologia (Fatecs) estaduais terão acesso exclusivo ao programa DIO for Education, da Digital Innovation One (DIO), uma plataforma de educação em desenvolvimento de software'},
  {id: 2, data: '05/04/2021', title: 'Catálogo de Capacitações 2021 - Centro Paula Souza', mensagem: 'Esta programação foi planejada para atender às necessidades de formação continuada de nossos docentes e servidores com muito respeito ao trabalho de todos.'}
]

const Avisos = () => {

  useEffect(() => {
  //Lógica para c6amar a api e buscar a lista de contatos
  })

  return (
    <div className='avisos-container flex flex-column' >
      <VoltarSair flagVoltar={true} /> 
      <p className='background-color-segundary secundary-color' id='destaque' ><strong>Destaques</strong></p>
      {
        detalheAvisos.map(aviso => (
          <div className='aviso-container flex flex-column' key={aviso.id} >
            <p>{aviso.data}</p>
            <h1><FiArrowRight size={24} color="#264653" />{aviso.title}</h1>
            <p>{aviso.mensagem}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Avisos;