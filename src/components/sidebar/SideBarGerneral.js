import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo_dashboard.png'; 
import {LayoutDashboard, LogOut, Bot, Settings} from 'lucide-react';
import SideBarContollInternal from './SideBarMenuControllInternal';
import SideBarMenuMicroService from './SideBarMenuMicroService';

const SideBarGerneral = () => {
  const history = useHistory();

  const handleDashboard = () => {
    history.push('/dashboard');
  }

  const handleControleInterno = () => {
    history.push('/controle-interno');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  
  const handleSettings = () => {
    history.push("/settings");
  };

  return (
    <div className="container" style={{ minWidth: '200px', maxWidth: "250px" }}>
      <div className='text-center border-bottom'>
        <img src={logo} alt="Logo" style={{ width: '150px', height: '80px' }} />
      </div>
      <div class="flex-shrink-0 p-3 bg-text-black" style={{ minWidth: '300px', maxWidth: "250px"  }} >
        <ul class="list-unstyled ps-0 ">
          <li class="mb-1 me-2">
          <button class="btn btn-toggle align-items-center text-white fs-5" onClick={handleDashboard} ><LayoutDashboard size={24} color='#ffffff' className='me-2' />
              Dashboard
            </button>
          </li>
          <SideBarContollInternal />
          <SideBarMenuMicroService />
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed text-white fs-5" data-bs-toggle="collapse" data-bs-target="#automatics-jobs-collapse" aria-expanded="false"> <Bot size={24} color='#ffffff' className='me-2' />
              Tarefas Automaticas
          </button>
          </li> 
          <li class="mb-1 me-2">
          <button class="btn btn-toggle align-items-center text-white fs-5" onClick={handleSettings} ><Settings size={24} color='#ffffff' className='me-2' />
              Configurações
            </button>
          </li>
          <li class="mb-1 me-2">
          <button class="btn btn-toggle align-items-center fs-5" style={{color: "red"}} onClick={handleLogout} ><LogOut size={24} color='red' className='me-2' />
              Logout
            </button>
          </li>
        </ul>
      </div>



{/* 
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active text-white " href="#" onClick={handleDashboard}>
            <i className="fas fa-th-large me-2"></i>
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" s style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
              <i className="fas fa-cog me-2 text-white"></i>
              Infraestrutura
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item onClick={handleControleInterno} style={{ backgroundColor: 'transparent' }}>Controle Interno</Dropdown.Item>
              <Dropdown.Item onClick={handleServicosOnline} style={{ backgroundColor: 'transparent' }}>Serviços Online</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={handleSettings}>
            <i className="fas fa-sticky-note me-2"></i>
            Configurações
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i>
            Logout
          </a>
        </li>
      </ul>
      <div className="sidebar-footer mt-auto">
        Sidebar Footer
      </div> */}
    </div>
  );
}

export default SideBarGerneral;
