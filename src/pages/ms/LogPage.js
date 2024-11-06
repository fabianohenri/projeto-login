import React from 'react';
import SideBarGerneral from '../../components/sidebar/SideBarGerneral';


const LogPage = () => {

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
            <h3 className='title_page'>Pagina para exibição de logs</h3>
            <hr />
            <div className='geral_style'>
            <h2>Nessa pagina tentarei pegar os logs dos serviços para exibição em tela..</h2>
            <h1>PAGINA DE LOGS</h1>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
