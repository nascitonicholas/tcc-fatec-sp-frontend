import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuPrincipal from '../pages/menu/MenuPrincipal';
import Login from '../pages/login/Login';
import ReenvioProtocolo from '../pages/reenvio-protocolo/ReenvioProtocolo';
import Calendario from '../pages/calendario/Calendario';
import AvaliacoesFinais from '../pages/avaliacoes-finais/AvaliacoesFinais';
import EsqueciMinhaSenha from '../pages/esqueci-minha-senha/EsqueciMinhaSenha';
import Contatos from '../pages/contatos/Contatos';
import DetalheContato from '../pages/detalhe-contato/DetalheContato';
import PrimeiroAcesso from '../pages/primeiro-acesso/PrimeiroAcesso';
import CadastroLoginSenha from '../pages/cadastro-login-senha/CadastroLoginSenha';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/primeiro-acesso' component={PrimeiroAcesso}/>
        <Route path='/cadastro-login-senha' component={CadastroLoginSenha}/>
        <Route path='/esqueci-minha-senha' component={EsqueciMinhaSenha}/>
        <Route path='/' exact component={Login}/>
        {/* 
        <Route path='/cadastro' component={MenuPrincipal}/>
        <Route path='/esqueci-minha-senha' component={MenuPrincipal}/> */}
        <Route path='/menu-principal' component={MenuPrincipal} />
        {/* <Route path='/meus-emails' component={MenuPrincipal}/>
        <Route path='/protocolo-rematricula' component={MenuPrincipal}/>
      <Route path='/rematricula' component={MenuPrincipal}/>*/}
        <Route path='/reenvio-protocolo' component={ReenvioProtocolo}/>
       {/*} <Route path='/matriculas-confirmadas' component={MenuPrincipal}/>
        <Route path='/estrutura-curricular' component={MenuPrincipal}/>
    <Route path='/historico-disciplinar' component={MenuPrincipal}/>*/}
        <Route path='/calendario-escolar' component={Calendario}/>
    {/*<Route path='/grades-horarias' component={MenuPrincipal}/>*/}
        <Route path='/avaliacoes-finais' component={AvaliacoesFinais}/>
       {/*} <Route path='/folha-prova' component={MenuPrincipal}/>
        <Route path='/plano-ensino' component={MenuPrincipal}/>
  <Route path='/ofertas-estagio' component={MenuPrincipal}/>*/}
        <Route path='/contatos' exact component={Contatos}/>
        <Route path='/detalhe-contato/:id' component={DetalheContato}/>
        {/*<Route path='/avisos' component={MenuPrincipal}/>
        <Route path='/alterar-dados-pessoais' component={MenuPrincipal}/>
        <Route path='/alterar-senha' component={MenuPrincipal}/> */}
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;