import React from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import LinkFlecha from '../../shared/components/LinkFlecha';
import './SolicitacaoDocumentos.scss';

const SolicitacaoDocumentos = () => {

  const documentos = [
    {id: 1, title: 'Solicitação de Cancelamento de Matrícula (Todos os Cursos)', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/FormularioCancelamento2020.docx' },
    {id: 2, title: 'Solicitação de Trancamento de Matrícula (Todos os Cursos)', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/FormularioTrancamento2020.docx' },
    {id: 3, title: 'Análise e Desenvolvimento de Sistemas - Matutino e Vespertino', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/ads_mt.doc' },
    {id: 4, title: 'Análise e Desenvolvimento de Sistemas - Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/ads_n.doc' },
    {id: 5, title: 'Automação de Escritórios e Secretariado', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/aes.doc' },
    {id: 6, title: 'Edifícios - Matutino e Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/edif.doc' },
    {id: 7, title: 'Eletrônica Industrial - Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/ei.doc' },
    {id: 8, title: 'Gestão de Turismo - Vespertino', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/gtur.doc' },
    {id: 9, title: 'Gestão Empresarial - EAD', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/ge.doc' },
    {id: 10, title: 'Hidráulica e Saneamento Ambiental - Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/hsa.doc' },
    {id: 11, title: 'Instalações Elétricas - Matutino', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/ie.doc' },
    {id: 12, title: 'Materiais - Manhã', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/mat.docx' },
    {id: 13, title: 'Materiais, Processos e Componentes Eletrônicos - Manhã', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/mpce.doc' },
    {id: 14, title: 'Mecânica de Precisão - Integral', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/mecprec.doc' },
    {id: 15, title: 'Microeletrônica - Matutino', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/micro.doc' },
    {id: 16, title: 'Movimento de Terra e Pavimentação - Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/pav.doc' },
    {id: 17, title: 'Processos de Produção - Matutino e Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/procprod.doc' },
    {id: 18, title: 'Projetos - Matutino e Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/proj.doc' },
    {id: 19, title: 'Soldagem - Vespertino', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/sold_tarde.doc' },
    {id: 20, title: 'Soldagem - Noturno', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/solicitacao-documentos/sold.doc' },
  ]

  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={true} />
      <div className='flex flex-row' >
        <div>
          {
            documentos.map(documento => (
              <LinkFlecha id={documento.id} title={documento.title} url={documento.url} key={documento.id} />
            ))
          }
        </div>
        <div className='somente-pc mensagem-container flex flex-column' >
          <h1 className='secundary-color' >Caro(a) aluno(a):</h1>
          <p className='secundary-color' >Faça o download do formulário de solicitação de documentos correspondente a seu curso/turno e envie para o e-mail: <strong className='secundary-color' >documentos@fatecsp.br</strong>.</p>
          <p className='secundary-color' >Para a retirada de documentos solicitados via e-mail, é obrigatória a apresentação da cópia do e-mail de envio de solicitação.</p>
          <p className='secundary-color' >O prazo para retirada de documentos é de <strong className='secundary-color' >10 (dez)</strong> dias úteis.</p>
        </div>
      </div>
    </div>
  )
}

export default SolicitacaoDocumentos;