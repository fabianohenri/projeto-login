import {User, MonitorCog} from 'lucide-react';
import { useHistory } from 'react-router-dom';
import '../../css/style.css';


const SideBarContollInternal = () => {
  const history = useHistory();

  const handleUsersPage = () => {
    history.push('/ic/users');
  };

    return (
        <li class="mb-1 ">
            <button class="btn align-items-center rounded collapsed text-white fs-5"   data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              <MonitorCog size={24} color='#ffffff' className='me-2' />
              Controle Interno
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="list-unstyled">
                <li>
                  <a href="/ic/users" class=" no_transition_menu fs-5 align-items-end ms-4 " onClick={handleUsersPage} >
                    <User size={24} color='#ffffff' className='me-2'/>Usuários
                  </a>
                </li>
              </ul>
            </div>
          </li>
    );
}

export default SideBarContollInternal;