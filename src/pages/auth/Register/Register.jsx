import * as React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function Register() {
    return (
        <div className='Login'>
            <div className='Login__Tittle'>
                <p> Accede como candidato </p>
                <h2> Iniciar sesión </h2>
            </div>
            <div className='Login__Inputs'>

                <label> Nombre </label>
                <input placeholder="Jordan" type="email" name="Nombre" id="email" />

                <label> Apellidos </label>
                <input placeholder="Walke" type="email" name="Nombre" id="email" />


                <label> Correo electrónico </label>
                <input placeholder="jordanWalke@gmail.com" type="email" name="Nombre" id="email" />

                <label> Crear contraseña  </label>
                <input placeholder="********" type="password" name="Contraseña" id="pas>sword" />

            </div>
            <div className='Login__button'>
                <button className='Login__button__type'> Crear Cuenta </button>
            </div>
            <div className='Login__footer'>
                <p> ¿Ya tienes cuenta?</p>
                <p><Link to="/login" style={{ color: '#4cb1e3' }}> Iniciar sesión </Link></p>
    </div>
        </div>
    )
}