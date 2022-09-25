import * as React from 'react';
import LoginNavBar from '../../../components/login/loginNavBar/LoginNavBar';
import './style.css';

export default function LoginHome () {
    return( 
        <div>
            <LoginNavBar />
            <p> BUENAS!! Esto es la HOME dentro del Perfil</p>
        </div>
       
    );
}