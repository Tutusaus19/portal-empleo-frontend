import * as React from 'react';

export default function Register () {
    return( 
    <div className='Login'>
            <div className='Register__Tittle'>
                <p> ¿Aún no tienes cuenta?</p>
                <p> Registrate aquí como candidato </p>
            </div>
            <div className='Register__Inputs'>
                <input type="firt_name" name="Nombre" id="first_name" />
                <input type="surname" name="Surname" id="surname" />
                <input type="email" name="Nombre" id="email" />
                <input type="password" name="Contraseña" id="password" />
            </div>
            <div>
                <button className='Register__button'> Iniciar Sesión </button>
            </div>
    </div> 
    )
}