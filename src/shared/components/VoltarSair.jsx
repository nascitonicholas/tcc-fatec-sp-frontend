import React from 'react';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';
import '../style/VoltarSair.scss'

function VoltarSair ({ flagVoltar }) {

  return (
    <div className='container flex flex-justify-space-between flex-wrap'  >
      {
        flagVoltar &&
        <div className='voltar' >
          <a className="back-link" href="/menu-principal">
            <FiArrowLeft size={32} color="#264653" />
            <p>Voltar para o menu principal</p>
          </a>
        </div>
      }
      <div className='sair' >
        <a className="back-link" href="/">
          <FiLogOut size={24} color="#D9180C" />
          <p>Sair</p>
        </a>
      </div>
    </div>
  );
}

export default VoltarSair;