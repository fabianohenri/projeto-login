import React, { useState} from 'react';
import { Redirect, useHistory} from 'react-router-dom';
import logo from '../assets/logo_dashboard.png'; 


const Navbar = () => {
  const history = useHistory();

  function handleDashboard() {
    history.push('/dashboard');
  }

  const handleControleInterno = () => {
    history.push('/controle-interno');
  };

  const handleServicosOnline = () => {
    history.push('/servicos-online');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="collapse navbar-collapse" id="navbarNav">
        <a className="navbar-brand" href="http://www.projetusti.com.br" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" style={{ width: '150px', height: '60px' }} />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item" > 
          <a className="navbar-brand"  onClick={handleDashboard}>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            
            <a className="navbar-brand"  onClick={handleControleInterno}>
              Controle Interno
            </a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand"  onClick={handleServicosOnline}>
              Serviços Online
            </a>
          </li>  
          <li className="nav-item">
            <a className="navbar-brand"  onClick={handleLogout}>
              Logout
            </a>
          </li>           
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
