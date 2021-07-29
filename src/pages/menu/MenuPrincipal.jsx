import React from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import CardPadrao from '../../shared/components/CardPadrao';
import EmailImg from '../../assets/menu-principal/email.png';
import ListaControleImg from '../../assets/menu-principal/lista-de-controle.png';
import CartaoCreditoImg from '../../assets/menu-principal/cartao-de-credito.png';
import RecarregarImg from '../../assets/menu-principal/recarregar.png';
import VarificaImg from '../../assets/menu-principal/verifica.png';
import ResumeImg from '../../assets/menu-principal/resume.png';
import PortfolioImg from '../../assets/menu-principal/portfolio.png';
import Calendario from '../../assets/menu-principal/calendario.png';
import Rede from '../../assets/menu-principal/rede.png';
import Boletim from '../../assets/menu-principal/boletim.png';
import DocImg from '../../assets/menu-principal/doc.png';
import PlanImg from '../../assets/menu-principal/business-plan.png';
import EstagioImg from '../../assets/menu-principal/estagio.png';
import ContatosImg from '../../assets/menu-principal/lista-de-contatos.png';
import SinalImg from '../../assets/menu-principal/sinal-de-aviso.png';
import TrocaImg from '../../assets/menu-principal/troca.png';
import SenhaImg from '../../assets/menu-principal/senha.png';
import './MenuPrincipal.scss';

const pages = [
  {name: 'email', url: '/meus-emails', description: 'Meus E-mails', image: EmailImg},
  {name: 'protocolo', url: '/protocolo-rematricula', description: 'Protocólo de Rematrícula', image: ListaControleImg},
  {name: 'rematricula', url: '/rematricula', description: 'Requisição de Rematrícula', image: CartaoCreditoImg},
  {name: 'reEmail', url: '/reenvio-protocolo', description: 'Reenviar e-mail protócolo de rematrícula', image: RecarregarImg},
  {name: 'matricula', url: '/matriculas-confirmadas', description: 'Matrículas Confirmadas', image: VarificaImg},
  {name: 'estrutura', url: '/estrutura-curricular', description: 'Estrutura Curricular', image: ResumeImg},
  {name: 'historico', url: '/historico-disciplinar', description: 'Histórico Disciplinar', image: PortfolioImg},
  {name: 'calendario', url: '/calendario-escolar', description: 'Calendário Escolar', image: Calendario},
  {name: 'gradeHoraria', url: '/grades-horarias', description: 'Grades Horárias', image: Rede},
  {name: 'avaliacaoFinal', url: '/avaliacoes-finais', description: 'Avaliações Finais', image: Boletim},
  {name: 'folha', url: '/folha-prova', description: 'Folha de Prova', image: DocImg},
  {name: 'planoEnsino', url: '/plano-ensino', description: 'Plano de Ensino', image: PlanImg},
  {name: 'ofertasEstagio', url: '/ofertas-estagio', description: 'Ofertas de Estágio', image: EstagioImg},
  {name: 'contatos', url: '/contatos', description: 'Contatos', image: ContatosImg},
  {name: 'avisos', url: '/avisos', description: 'Avisos', image: SinalImg},
  {name: 'alterarDados', url: '/alterar-dados-pessoais', description: 'Alterar Dados Pessoais', image: TrocaImg},
  {name: 'alterarSenha', url: '/alterar-senha', description: 'Alterar Senha', image: SenhaImg}
];

const MenuPrincipal = () => {

  return (
    <div className='menu-container' >
      <VoltarSair flagVoltar={false} /> 
      <ul>
        {pages.map(page => (
          <CardPadrao name={page.name} image={page.image} url={page.url} key={page.name} description={page.description} />
        ))}
      </ul>
    </div>
  );
}

export default MenuPrincipal;