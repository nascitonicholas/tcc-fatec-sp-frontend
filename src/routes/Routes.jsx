import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuPrincipal from '../pages/menu/MenuPrincipal';
import Login from '../pages/login/Login';
import ReenvioProtocolo from '../pages/reenvio-protocolo/ReenvioProtocolo';
import MatriculasConfirmadas from '../pages/matriculas-confirmadas/MatriculasConfirmadas';
import EstruturaCurricular from '../pages/estrutura-curricular/EstruturaCurricular';
import Calendario from '../pages/calendario/Calendario';
import GradeHoraria from '../pages/grade-horaria/GradeHoraria';
import AvaliacoesFinais from '../pages/avaliacoes-finais/AvaliacoesFinais';
import SolicitacaoDocumentos from '../pages/solicitacao-documentos/SolicitacaoDocumentos';
import OfertasEstagio from '../pages/ofertas-estagio/OfertasEstagio';
import DetalheOfertasEstagio from '../pages/detalhe-ofertas-estagio/DetalheOfertasEstagio';
import EsqueciMinhaSenha from '../pages/esqueci-minha-senha/EsqueciMinhaSenha';
import Contatos from '../pages/contatos/Contatos';
import DetalheContato from '../pages/detalhe-contato/DetalheContato';
import Formulario from '../pages/primeiro-acesso/PrimeiroAcesso';
import CadastroLoginSenha from '../pages/cadastro-matricula-senha/CadastroMatriculaSenha';
import Avisos from '../pages/avisos/Avisos';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cadastro' component={Formulario}/>
        <Route path='/alterar-dados-pessoais' component={Formulario}/>
        <Route path='/cadastro-login-senha' component={CadastroLoginSenha}/>
        <Route path='/esqueci-minha-senha' component={EsqueciMinhaSenha}/>
        <Route path='/' exact component={Login}/>
        <Route path='/menu-principal' component={MenuPrincipal} />
    {/* <Route path='/meus-emails' component={MenuPrincipal}/>
        <Route path='/protocolo-rematricula' component={MenuPrincipal}/>
        <Route path='/rematricula' component={MenuPrincipal}/>*/}
        <Route path='/reenvio-protocolo' component={ReenvioProtocolo}/>
        <Route path='/matriculas-confirmadas' component={MatriculasConfirmadas}/>
        <Route path='/estrutura-curricular' component={EstruturaCurricular}/>
    {/*<Route path='/historico-disciplinar' component={MenuPrincipal}/>*/}
        <Route path='/calendario-escolar' component={Calendario}/>
        <Route path='/grades-horarias' component={GradeHoraria}/>
        <Route path='/avaliacoes-finais' component={AvaliacoesFinais}/>
        <Route path='/solicitacao-documentos' component={SolicitacaoDocumentos}/>
        <Route path='/ofertas-estagio' exact component={OfertasEstagio}/>
        <Route path='/ofertas-estagio/detalhes-vagas' component={DetalheOfertasEstagio}/>
        <Route path='/contatos' exact component={Contatos}/>
        <Route path='/detalhe-contato/:id' component={DetalheContato}/>
        <Route path='/avisos' component={Avisos}/>
     {/*<Route path='/alterar-dados-pessoais' component={MenuPrincipal}/>
        <Route path='/alterar-senha' component={MenuPrincipal}/> */}
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;