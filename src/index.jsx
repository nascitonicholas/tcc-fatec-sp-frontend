import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import  Header  from './shared/components/Header';
import  Footer  from './shared/components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
