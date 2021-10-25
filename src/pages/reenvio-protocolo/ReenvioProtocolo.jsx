import React from 'react';
import Enviar from '../../assets/reenvio-protocolo/enviar.png';
import VoltarSair from '../../shared/components/VoltarSair';
import './ReenvioProtocolo.scss';

const ReenvioProtocolo = () => {

  window.localStorage.removeItem("tituloHeader");
  localStorage.setItem('tituloHeader','Reenvio e-mail de protocolo de rematrícula')

  return (
    <div>
      <VoltarSair flagVoltar={true} />
      <div className='flex flex-column flex-center' >
        <p className='paragraph' >Foi enviado no seu e-mail cadastrado um novo protocólo de rematrícula.</p>
        <p className='paragraph' >Caso não tenha recebido clique em <strong><a href={HandleEnviarProtocolo()} >reenviar.</a></strong></p>
        <img className='img-container' src={Enviar} alt='Imagem Enviar' />
      </div>
    </div>
  );
}

function HandleEnviarProtocolo(){

};

export default ReenvioProtocolo;