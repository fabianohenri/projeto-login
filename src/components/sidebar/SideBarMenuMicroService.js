import {Microscope, ScrollText} from 'lucide-react';
import '../../css/style.css';


const SideBarMenuMicroService = () => {

    return (
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed text-white fs-5" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            <Microscope size={24} color='#ffffff' className='me-2'/>
            Micro Serviços
          </button>
          <div class="collapse" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="/ms/log" class="nav-link fs-5 align-items-end ms-4">
                  <ScrollText size={24} color='#ffffff' className='me-2'/>Log
                </a>
              </li>
            </ul>
          </div>
        </li>
    );
}

export default SideBarMenuMicroService;