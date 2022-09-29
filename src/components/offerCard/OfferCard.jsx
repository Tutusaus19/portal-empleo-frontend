import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function OfferCard() {

  return (
    <div className='Card'>
        <div className='CardContent'>
        <div className='CardHeader'>
            <div>
                <img className='CardHeader__Logo' src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'></img>
            </div>
            <div className='CardHeader__Tittle'>
            <h4> Front End Developer</h4> 
            </div>
        </div>
        <div className='CardHeader2'>
            <div className='CardHeader2__company'>
                Google
            </div>
        </div>
        <div className='CardSubHeader'>
            <div className='CardSubHeader__location'> 
                <p alt='image1'> 🏢 Madrid </p>
            </div>
            <p> | </p>
            <div className='CardSubHeader__place'> 
                <p alt='image2'> 💻 Oficina </p>
            </div>
            <p> | </p>
            <div className='CardSubHeader__typo'> 
                <p alt='image3'> ⌚Full Time </p>
            </div>
        </div>

         <div className='CardBody'>
            <p className='CardBody__description'>
                ¿Tus dos pasiones son las personas y la informática? En Google Madrid te estamos buscando 
            </p>
         </div>


         <div className='CardFooter'>
            <div alt='image4' className='CardFooter__experience'>
              💪  3 - 5 años
            </div>

            <div className='CardFooter__specialty'>
                JavaScript
            </div>
            
            <div className='CardFooter__specialty'>
                React 
            </div>
            
            <div className='CardFooter__specialty'>
                Node.Js
            </div>
         </div>
         <div className='CardFooter__CTA'>
         <Link to='/offer-details' className='CardFooter__CTA__button__link'><button className='CardFooter__CTA__button'>
                ME LO PIDO 
            </button></Link>

         </div>

        </div>
    </div>
  );
}