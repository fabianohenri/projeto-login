import React, { useState, useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { User, Key } from 'lucide-react';

const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const history = useHistory(); // Estado de login inicialmente falso

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("logado");
  }, []);


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
      setError(null); // Limpa erros anteriores
      console.log(localStorage.getItem('logado'));
      history.push('/dashboard');

    } catch (error) {
      console.log(localStorage.getItem('logado'));
      localStorage.setItem('logado', false);
      console.error('Erro ao fazer login:', error.message);
      setError('Erro ao fazer login. Verifique suas credenciais.');

    }
  };

  return (
    <div className="">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className='icon-wrapper'><User size={24} color='#ffffff'/></span>
              </div>
              <input placeholder="Email" {...register("email", { required: true })} className="form-control" autoComplete="current-email" />
            </div>
            <div className="input-group form-group mb-3">
              <div className="input-group-prepend">
              <span className='icon-wrapper'><Key size={24} color='#ffffff'/></span>
              </div>
              <input type="password" placeholder="Password" {...register("password", { required: true })} name="password" className="form-control" autoComplete="current-password" />
            </div>
            <div className="input-group form-group mb-3">
              <input className="login_btn btn btn-primary d-flex" type="submit" onClick={handleSubmit} value="Logar"/>
              {error && alert('Erro ao fazer login. Verifique suas credenciais.')}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
