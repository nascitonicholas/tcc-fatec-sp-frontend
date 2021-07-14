import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Header from './shared/components/Header.js';
import Footer from './shared/components/Footer.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
