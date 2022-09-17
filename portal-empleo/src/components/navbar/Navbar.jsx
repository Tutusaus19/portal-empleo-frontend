import React from 'react'
import './style.css'

const Navbar = () => {
     return (
        <nav className='navbar__container'>
            <div className='navbar__logo'>
                <img className='navbar__logo__img' src="https://kaizenfmk.com/wp-content/uploads/2019/01/imagenPortada_logo.png" alt="logo-kaizen" />
            </div>
            <div className='navbar__buttons'>
                <button className='navbar__buttons__signin'> Sign In </button>
                <button className='navbar__buttons__signup'> Sign Up </button>
            </div>
        </nav>
     )
};

export default Navbar; 