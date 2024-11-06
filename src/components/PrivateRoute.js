import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast.error('Para acessar essa página precisa estar logado!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

// Componente para rota privada
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('logado');

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <>
            {notify()} {/* Exibe o toast de erro */}
            <Redirect to="/" /> {/* Redireciona para a página de login */}
          </>
        )
      }
    />
  );
};

export default PrivateRoute;
