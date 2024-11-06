import React from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import logo from '../assets/logo_dashboard.png'; 


import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarComponente = () => {
  const location = useLocation();
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
    
    <nav class="navbar navbar-expand-lg nav-bar-bg">
      <a className="navbar-brand" href="http://www.projetusti.com.br" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" style={{ width: '150px', height: '80px'}} />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item" > 
          <a className="navbar-brand"  onClick={handleDashboard} active={location.pathname.startsWith('/dashboard')}>
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
    </nav>
  );
};

export default NavbarComponente;
