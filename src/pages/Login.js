import React from 'react';
import FormLogin from '../components/FormLogin';
import '../css/style.css';
import { ToastContainer } from 'react-toastify';


const Login = () => {
  return (
    <div className="login_page">
      <ToastContainer />
      <FormLogin />
    </div>

  );
};

export default Login;
