import React, { useState} from 'react';
import {useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { User, Key } from 'lucide-react';
import '../css/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const history = useHistory(); // Estado de login inicialmente falso


  const notifyError = (message) => {
    toast.error(message);
  };


  const onSubmit = async (data) => {

    try {
      const response = await fetch('http://0.0.0.0:65500/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const responseData = await response.json();
      console.log(responseData);
      
      

      setError(null); // Limpar erros anteriores
      localStorage.setItem('logado', true);
      localStorage.setItem('User', responseData.name )

      
      setError(null); // Limpa erros anteriores
      console.log(localStorage.getItem('logado'));
      history.push('/dashboard');

    } catch (error) {
      console.log(localStorage.getItem('logado'));
      localStorage.setItem('logado', false);
      notifyError('Erro ao fazer login. Verifique suas credenciais.');

    }
  };

  return (
    <div>
      <div className="card-login">
        <div className="card-login-header">
          <h3>Login</h3>
          <hr />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
            <div className="input-login-group form-group">
              <div className="input-login-group-prepend">
                <span className='icon-wrapper'><User size={24} color='#ffffff'/></span>
              </div>
              <input placeholder="Email" {...register("email", { required: true })} className="form-control" autoComplete="current-email" />
            </div>
            <div className="input-login-group form-group mb-2">
              <div className="input-login-group-prepend">
              <span className='icon-wrapper'><Key size={24} color='#ffffff'/></span>
              </div>
              <input type="password" placeholder="Password" {...register("password", { required: true })} name="password" className="form-control" autoComplete="current-password" />
            </div>
            <div className="input-login-group form-group mb-3">
              <input className="login_btn d-flex" type="submit" onClick={handleSubmit} value="Logar"/>
              {error && notifyError(error)}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
