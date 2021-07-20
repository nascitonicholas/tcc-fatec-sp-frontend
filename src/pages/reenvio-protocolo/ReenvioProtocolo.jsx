import React, { useEffect } from 'react';
import Enviar from '../../assets/reenvio-protocolo/enviar.png';
import './ReenvioProtocolo.scss';

const ReenvioProtocolo = () => {

  useEffect(() => {
  //Lógica para chamar a api e reenviar o protocolo
  });

  return (
    <div className='flex flex-column flex-center' >
      <p>Foi enviado no seu e-mail cadastrado um novo protocólo de rematrícula.</p>
      <p>Caso não tenha recebido clique em <strong><a>reenviar.</a></strong></p>
      <img src={Enviar} alt='Imagem Enviar' />
    </div>
  );
}

export default ReenvioProtocolo;