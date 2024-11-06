import React from 'react';
import SideBarGerneral from '../components/sidebar/SideBarGerneral';


const Dashboard = () => {

  const UserLogin = localStorage.getItem("User");

  return (
    <div class="container">
      <div class="row" >
        <div class="col-md-3 sidebar_max_min_size">
          <div class="p-3 bg-dark" >
            <SideBarGerneral />
          </div>
        </div>
        <div class="col">
          <div class="p-3 mb-2 text-black">
            <h3 className='title_page'>Pagina do Dashboard Usuário logado: {UserLogin} </h3>
            <hr />
            <div className='geral_style'>
             <h2>Aqui em baixo vai ter uma área toda de serviços monitorados.</h2>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
