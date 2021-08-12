import React from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import LinkFlecha from '../../shared/components/LinkFlecha';
import './SolicitacaoDocumentos.scss';

const SolicitacaoDocumentos = () => {

  const documentos = [
    {id: 1, title: 'Solicitação de Cancelamento de Matrícula (Todos os Cursos)'},
    {id: 2, title: 'Solicitação de Trancamento de Matrícula (Todos os Cursos)'},
    {id: 3, title: 'Análise e Desenvolvimento de Sistemas - Matutino e Vespertino'},
    {id: 4, title: 'Análise e Desenvolvimento de Sistemas - Noturno'},
    {id: 5, title: 'Automação de Escritórios e Secretariado'},
    {id: 6, title: 'Edifícios - Matutino e Noturno'},
    {id: 7, title: 'Eletrônica Industrial - Noturno'},
    {id: 8, title: 'Gestão de Turismo - Vespertino'},
    {id: 9, title: 'Gestão Empresarial - EAD'},
    {id: 10, title: 'Hidráulica e Saneamento Ambiental - Noturno'},
    {id: 11, title: 'Instalações Elétricas - Matutino'},
    {id: 12, title: 'Materiais - Manhã'},
    {id: 13, title: 'Materiais, Processos e Componentes Eletrônicos - Manhã'},
    {id: 14, title: 'Mecânica de Precisão - Integral'},
    {id: 15, title: 'Microeletrônica - Matutino'},
    {id: 16, title: 'Movimento de Terra e Pavimentação - Noturno'},
    {id: 17, title: 'Processos de Produção - Matutino e Noturno'},
    {id: 18, title: 'Projetos - Matutino e Noturno'},
    {id: 19, title: 'Soldagem - Vespertino'},
    {id: 20, title: 'Soldagem - Noturno'},
  ]

  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={true} />
      <div className='flex flex-row' >
        <div>
          {
            documentos.map(documento => (
              <LinkFlecha id={documento.id} title={documento.title} url={documento.url} />
            ))
          }
        </div>
        <div className='mensagem-container flex flex-column' >
          <h1>Caro(a) aluno(a):</h1>
          <p>Faça o download do formulário de solicitação de documentos correspondente a seu curso/turno e envie para o e-mail: <strong>documentos@fatecsp.br</strong>.</p>
          <p>Para a retirada de documentos solicitados via e-mail, é obrigatória a apresentação da cópia do e-mail de envio de solicitação.</p>
          <p>O prazo para retirada de documentos é de <strong>10 (dez)</strong> dias úteis.</p>
        </div>
      </div>
    </div>
  )
}

export default SolicitacaoDocumentos;