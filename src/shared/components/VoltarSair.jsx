import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';
import '../style/VoltarSair.scss'

function VoltarSair ({ flagVoltar }) {

  return (
    <div className='container flex flex-justify-space-between flex-wrap'  >
      {
        flagVoltar &&
        <div className='voltar' >
          <Link className="back-link" to="/menu-principal">
            <FiArrowLeft size={32} color="#264653" />
            <p>Voltar para o menu principal</p>
          </Link>
        </div>
      }
      <div className='sair' >
        <Link className="back-link" to="/">
          <FiLogOut size={24} color="#D9180C" />
          <p>Sair</p>
        </Link>
      </div>
    </div>
  );
}

export default VoltarSair;