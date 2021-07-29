import React from 'react';
import { FiDownload } from 'react-icons/fi';
import './Calendario.scss';

const Calendario = () => {

  return (
    <div className='flex flex-column'>
        <a href='https://fatec-app.s3.sa-east-1.amazonaws.com/CalendarioEscolar+(1).pdf' target='_blank' rel="noreferrer" download >
          <button type="button">
            <FiDownload size={45} color="#264653" />
            <p>Calendario.pdf</p>
          </button>
        </a>
    </div>
  );
};

export default Calendario;