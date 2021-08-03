import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/**">
        <Header />
        <App />
        <Footer />
      </Route>
    </Switch>

  </Router>,
  document.getElementById('root')
);
