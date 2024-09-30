import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initWeb3 } from './services/web3';

initWeb3().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});