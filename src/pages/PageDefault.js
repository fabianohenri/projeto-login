import React from 'react';
import SidebarControleInterno from '../components/SidebarControleInterno';

const ControleDefault = () => {
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
          <h3 className='title_page'>Pagina do Controle Interno dos Usuários</h3>
          <hr />
          <div className='geral_style'>
          <h2>Aqui vai ser uma pagina para gerenciar os usuários da pagina de infrastrutura..</h2>
          <h1>CONTROLE INTERNO - Usuários</h1>
          </div> 
        </div>
      </div>
    </div>
  </div>
);
};

export default ControleDefault;