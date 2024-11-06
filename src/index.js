import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o arquivo de estilos CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'; // Importe o arquivo JavaScript do Bootstrap



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

document.getElementById('root');
