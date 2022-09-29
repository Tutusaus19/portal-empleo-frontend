import * as React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function Login () {
    return( 
    <div className='Login'>
        <div className='Login__Tittle'> 
            <p> Accede como candidato </p>
            <h2> Iniciar sesión </h2>
        </div>
    <div className='Login__Inputs'>
        
                <label> Correo electrónico </label>
                <input placeholder="jordanWalke@gmail.com" type="email" name="Nombre" id="email" />
            
               <label> Contraseña  </label>
                <input placeholder="********" type="password" name="Contraseña" id="pas>sword" />
            
    </div>
    <div className='Login__button'>
                <button className='Login__button__type'> Iniciar Sesión </button>
    </div>
    <div className='Login__footer'>
        <p> ¿No tienes cuenta?</p>
        <p><Link to="/register" style={{ color: '#4cb1e3' }}> Crear Cuenta </Link></p>
    </div>
    </div>
    )
}