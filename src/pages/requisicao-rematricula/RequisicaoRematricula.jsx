import React from 'react';
import Erro from '../../shared/components/Erro';
import VoltarSair from '../../shared/components/VoltarSair';
import './RequisicaoRematricula.scss';

const RequisicaoRematricula = () => {

  const flagPeriodoRequisicao = false;
  const mensagem = 'Não é possível fazer a requisião de matrícula fora do período estipulado, por favor entre em contato com a secretária acadêmica';

  return (
    <div>
      <VoltarSair flagVoltar={true} /> 
      {
        flagPeriodoRequisicao &&
        <div>
          {/* funcionalidade não será desenvolvida nessa primeira versão */}
        </div>
      }
      {
        !flagPeriodoRequisicao &&
        <div>
          <Erro mensagemErro={mensagem} />
        </div>
      }
    </div>
  )

}

export default RequisicaoRematricula;