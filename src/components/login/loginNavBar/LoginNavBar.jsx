import * as React from 'react';
import './style.css';
import {BsFillPersonFill} from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function LoginHome() {
    return (
        <div className='NavBarLogin'>
            <div className='NavBarLogin__logo'>
                <h2> Kaizen </h2>
            </div>
            <div className='NavBarLogin__pages'>
                <Link to='/home' className='NavBarLogin__pages2'><p> Home </p> </Link> 
                <Link to='/profile' className='NavBarLogin__pages2'> <p> Profile </p> </Link>
                <Link to='/jobs' className='NavBarLogin__pages2'><p> Jobs </p></Link>
                <Link to='/applied' className='NavBarLogin__pages2'><p> Applied </p></Link>
            </div>
            <div className='NavBarLogin__profile'> 
                <BsFillPersonFill />
            </div>

        </div>
    );
}