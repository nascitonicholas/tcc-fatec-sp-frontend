import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/login/Login';
import MenuPrincipal from '../pages/menu/MenuPrincipal';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MenuPrincipal}/>
        {/* <Route path='/cadastro' component={Login}/>
        <Route path='/esqueci-minha-senha' component={Login}/> */}
        <Route path='/menu-principal' component={MenuPrincipal} />
        {/* <Route path='/meus-emails' component={Login}/>
        <Route path='/protocolo-rematricula' component={Login}/>
        <Route path='/rematricula' component={Login}/>
        <Route path='/reenvio-protocolo' component={Login}/>
        <Route path='/matriculas-confirmadas' component={Login}/>
        <Route path='/estrutura-curricular' component={Login}/>
        <Route path='/historico-disciplinar' component={Login}/>
        <Route path='/calendario-escolar' component={Login}/>
        <Route path='/grades-horarias' component={Login}/>
        <Route path='/avaliacoes-finais' component={Login}/>
        <Route path='/folha-prova' component={Login}/>
        <Route path='/plano-ensino' component={Login}/>
        <Route path='/ofertas-estagio' component={Login}/>
        <Route path='/contatos' component={Login}/>
        <Route path='/avisos' component={Login}/>
        <Route path='/alterar-dados-pessoais' component={Login}/>
        <Route path='/alterar-senha' component={Login}/> */}
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;