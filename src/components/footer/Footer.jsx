import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <nav className='Footer'>
            <div className='Footer__Container'>
                <div className='Footer__row'>
                    <div className='col'>
                        <ul className='list-contact'>
                            <h4>  CONTACTO </h4>
                            <li> 📞 914 623 992 </li>
                            <li> 📨 info@kaizen.com  </li>
                            <li> 📍 Calle Alcalá, 55 </li>
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <ul className='list-contact'>
                        <h4>  ENLACES  </h4>
                        <Link to="/login"><li> Login </li></Link>
                        <Link to="/register"> <li> Register </li></Link>
                    </ul>

                </div>
                <div className='col'>
                    <h4> Redes Sociales </h4>
                    <div className='Footer__rrss__linkedin'>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo-linkedin" />
                    </div>
                    <div className='Footer__rrss__instagram'>
                        <img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202090instagramlogosocialsocialmedia-115598_115703.png" alt="logo-instagram" />
                    </div>
                    <div className='Footer__rrss__youtube'>
                        <img src="https://t4.ftcdn.net/jpg/03/04/06/01/360_F_304060171_OUUSKIITlOLRgnDI1EFO8eSZqOHab6Iq.jpg" alt="logo-youtube" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm'>
                    &copy;(new Date().getFullYear()) Kaizen || Proyecto Final The Bridge      
                </p>
            </div>
        </nav>
    );
}