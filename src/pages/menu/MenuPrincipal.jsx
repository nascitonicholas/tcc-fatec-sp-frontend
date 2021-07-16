import React from 'react';
import { Link } from 'react-router-dom';

const baseImg = '../../assets/menu-principal/';
const pages = [
  {name: 'email', url: '/meus-emails', description: 'Meus E-mails', image: 'email'},
  {name: 'protocolo', url: '/protocolo-rematricula', description: 'Protocólo de Rematrícula', image: 'lista-de-controle'},
  {name: 'rematricula', url: '/rematricula', description: 'Requisição de Rematrícula', image: 'cartao-de-credito'},
  {name: 'reEmail', url: '/reenvio-protocolo', description: 'Reenviar e-mail protócolo de rematrícula', image: 'recarregar'},
  {name: 'matricula', url: '/matriculas-confirmadas', description: 'Matrículas Confirmadas', image: 'verifica'},
  {name: 'estrutura', url: '/estrutura-curricular', description: 'Estrutura Curricular', image: 'resume'},
  {name: 'historico', url: '/historico-disciplinar', description: 'Histórico Disciplinar', image: 'portfolio'},
  {name: 'calendario', url: '/calendario-escolar', description: 'Calendário Escolar', image: 'email'},
  {name: 'gradeHoraria', url: '/grades-horarias', description: 'Grades Horárias', image: 'rede'},
  {name: 'avaliacaoFinal', url: '/avaliacoes-finais', description: 'Avaliações Finais', image: 'boletim'},
  {name: 'folha', url: '/folha-prova', description: 'Folha de Prova', image: 'doc'},
  {name: 'planoEnsino', url: '/plano-ensino', description: 'Plano de Ensino', image: 'business-plan'},
  {name: 'ofertasEstagio', url: '/ofertas-estagio', description: 'Ofertas de Estágio', image: 'estagio'},
  {name: 'contatos', url: '/contatos', description: 'Contatos', image: 'lista-de-contatos'},
  {name: 'avisos', url: '/avisos', description: 'Avisos', image: 'sinal-de-aviso'},
  {name: 'alterarDados', url: '/alterar-dados-pessoais', description: 'Alterar Dados Pessoais', image: 'troca'},
  {name: 'alterarSenha', url: '/alterar-senha', description: 'Alterar Senha', image: 'senha'}
];

const MenuPrincipal = () => {
  

  return (
    <>
      <ul>
        {pages.map(page => (
          <li key={page.name}>
            <img src={baseImg + page.image + '.png'} alt='Imagem descritiva' />
            <Link className="button" to={page.url}>{page.description}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuPrincipal;