import * as React from 'react';

export default function Login () {
    return( 
    <div className='Login'>
            <div className='Login__Tittle'>
                <p> Accede como candidato </p>
            </div>
            <div className='Login__Inputs'>
                <input type="email" name="Nombre" id="email" />
                <input type="password" name="Contraseña" id="password" />
            </div>
            <div className='Login__button'>
                <button className='Login__button__type'> Iniciar Sesión </button>
            </div>
    </div>
    )
}