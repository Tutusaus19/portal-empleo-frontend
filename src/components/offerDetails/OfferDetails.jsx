import * as React from 'react';
import LoginNavBar from '../../../components/login/loginNavBar/LoginNavBar';
import './style.css';

export default function LoginHome () {
    return( 
        <div className='OfferDetails'>
            <LoginNavBar />
         <div className='LoginHome__News'> 
            <h2> Nuevas Ofertas</h2>
            <p> Conoce nuestras ofertas mas recientes. Estoy seguro de que alguna te encajará</p>
            <div className='LoginHome__News__Offers'>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
            
         </div>
         <div classNamee='LoginHome__RecentlyApplied'></div>

        </div>
       
    );
}