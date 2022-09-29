import * as React from 'react';
import './style.css';

export default function Profile () {
    return( 
    <div className='Profile'>
        <div>
            <h2> Edita tu pergil </h2>
        </div>

        <div className='Profile__1'>
            <h4> Sobre ti</h4>
            <p> Antes de nada, necesitamos saber quién eres </p>
            <div>
                <label> Índicanos tu nombre </label>
                <input type="text"  placeholder='Indicanos tu nombre '/>
                <label> Apellidos  </label>
                <input type="text"  placeholder='Apellidos '/>
            </div>
            <div>
                <label> ¿Cuál es o son tus áreas de especialidad? </label>
                    <select name="Multiselect" id="multiselect" multiple>
                    <option value="Data Science"> Data Science </option>
                    <option value="Developer">Developer</option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Ciberseguridad">Ciberseguridad</option>
                    <option value="Marketing Automation">Marketing Automation</option>
                    </select>
            </div>
            <div>
                
            </div>
        </div>
        
    </div>
    );
 }
