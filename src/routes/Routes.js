import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/login/login';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/cadastro' exact component={Login}/>
        <Route path='/esqueci-minha-senha' exact component={Login}/>
        <Route path='/menu-principal' exact component={Login}/>
        <Route path='/protocolo-rematricula' exact component={Login}/>
        <Route path='/reenvio-protocolo' exact component={Login}/>
        <Route path='/matriculas-confirmadas' exact component={Login}/>
        <Route path='/estrutura-curricular' exact component={Login}/>
        <Route path='/historico-disciplinar' exact component={Login}/>
        <Route path='/calendario-escolar' exact component={Login}/>
        <Route path='/grades-horarias' exact component={Login}/>
        <Route path='/avaliacoes-finais' exact component={Login}/>
        <Route path='/folha-prova' exact component={Login}/>
        <Route path='/plano-ensino' exact component={Login}/>
        <Route path='/ofertas-estagio' exact component={Login}/>
        <Route path='/contatos' exact component={Login}/>
        <Route path='/avisos' exact component={Login}/>
        <Route path='/alterar-dados-pessoais' exact component={Login}/>
        <Route path='/alterar-senha' exact component={Login}/>
      </Switch>
    </BrowserRouter>

  );
}
