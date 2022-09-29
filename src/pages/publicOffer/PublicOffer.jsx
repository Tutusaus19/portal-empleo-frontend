import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './style.css';

export default function Login () {
    return( 
    <div className='Public'>
        <div className='Public__Tittle'> 
            <h2> Publicar Oferta de Empleo </h2>
            <p> ¿Estás buscando un perfil tecnológico? </p>
            <p> Déjanos que te echemos una mano </p>
        </div>
    <div className='Public__Inputs'>
        
                <label> Compañía </label>
                <input placeholder="Nombre Compañía" type="text" name="Nombre" id="nombre-compañia" />  
    </div>
    <div className='Public__Inputs'>
        
                <label> Contacto </label>
                <input placeholder="Nombre persona contacto" type="text" name="Nombre" id="nombre-contacto" />
                <input placeholder="Apellido persona contacto" type="text" name="Apellido" id="apellido-contacto" />
                <input placeholder="Email" type="email" name="Email" id="email" />
                <input placeholder="Teléfono de contacto" type="mobile" name="Móvil" id="mobile" />
            
    </div>
    <div className='Public__Inputs'>
        
        <label> Posición candidato </label>
        <input placeholder="Título de la posición" type="text" name="Tittle" id="tittle_position" />
        <input placeholder="Área de la posición" type="text" name="Área" id="area_position" />
        <input placeholder="¿Hasta cuándo quieres tener la oferta abierta?" type="date" name="Oferta" id="end_date" />
    
    </div>
    <div className='Public__Inputs'>
        <label> Descripción de la posición </label>
        <textarea placeholder="Responde a las siguientes preguntas: ¿Qué buscamos? , ¿Cuáles serán sus funciones?, ¿Qué ofrecemos?" type="text" name="Tittle" id="tittle_position" />
    </div>
    <Box width={300} sx={{display:'flex', justifyContent:'center'}}>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{display:'flex', justifyContent:'center'}} />
    </Box>
    
    <div className='Public__button'>
                <button className='Login__button__type'> Publicar empleo </button>
    </div>
    </div>
    )
}