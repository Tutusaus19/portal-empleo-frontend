import React from 'react'
import './style.css'

const Navbar = () => {
     return (
        <nav className='navbar__container'>
            <div className='navbar__logo'>
                <h2 className='navbar__title'> Kaizen</h2>
            </div>
            <div className='navbar__buttons'>
                <button className='navbar__buttons__signin'> Sign In </button>
                <button className='navbar__buttons__signup'> Sign Up </button>
            </div>
        </nav>
     )
};

export default Navbar; 