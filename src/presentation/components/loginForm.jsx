import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = ({onSubmit, loading}) => {

    const{register,handleSubmit,formState:{errors}} = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                id='email'
                {...register("email",{
                    required: "Debes ingresar un correo eléctronico",
                    pattern:{
                        value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/,
                        message: "Ingresa un correo válido"
                    }
                })} 
                />
                {errors.email && <p style={{color: "red"}} >{errors.email.message}</p>}
        </div>

        <div>
             <label htmlFor="password">Contraseña:</label>
            <input 
                type="password"
                id='password'
                {...register("password",{
                    required: "Debes ingresar la contraseña",
                    minLength:{value:8, message: "La contraseña debe tener al menos 8 caracteres"}
                })} 
                />
                {errors.password && <p style={{color: "red"}} >{errors.password.message}</p>}
        </div>
                <button type='submit' disabled={loading}>
                    {loading ? "Cargando..." : "Iniciar sesión"}
                </button>
    </form>
  );
};

export default LoginForm;


