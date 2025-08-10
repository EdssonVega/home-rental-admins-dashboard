import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginFailure, loginRequest, loginSucces } from '../../state/auth/authSlice';
import LoginForm from '../components/loginForm';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const {loading, error, isAuthenticated} = useSelector((state)=> state.auth);

  const handleLogin = (data) => {
    dispatch(loginRequest());

    setTimeout (()=> {
      if(data.email === "edssonvega@gmail.com" && data.password === "12345678"){
        dispatch(loginSucces({email: data.email}));
        alert("Inicio de sesión exitoso!")
      } else {
        dispatch(loginFailure("Correo o contraseña incorrectos"));
        alert("Correo o contraseña incorrectos");
      }
    },1000);
  };

  if(isAuthenticated){
   return <Navigate to={"/homes"}/>
  }

  return (
    <div className='login-page'>
      <h2>Iniciar sesión</h2>
      {error && <p style={{color: "red"}}>{error}</p>}
      <LoginForm onSubmit={handleLogin} loading={loading}/>
    </div>
  )
}

export default LoginPage;
