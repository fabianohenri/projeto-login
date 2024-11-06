import React from 'react';
import SideBarGerneral from '../components/sidebar/SideBarGerneral';

const SystemSettings = () => {
  return (
    <div class="container">
      <div class="row">
       <div class="col-md-3 sidebar_max_min_size">
          <div class="p-3 bg-dark">
            <SideBarGerneral />
          </div>
        </div>
        <div class="col">
          <div class="p-3 mb-2 text-black">
            <h3 className='title_page'>Pagina de Configurações</h3>
            <hr />
            <div className='geral_style'>
            <h2>Aqui vai ser uma pagina onde terão algumas Configuraçõesdo sistema.</h2>
            <h1>CONFIGURAÇÕES DO SISTEMA</h1>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;