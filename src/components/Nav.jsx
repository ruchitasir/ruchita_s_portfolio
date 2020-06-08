import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav= props=> {
   return(
    <nav>
        <ul>
            <li> <Link to= '/'>Home</Link> </li>
            <li> <Link to='/blog'>Blog</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/projects'>Projects</Link> </li>
        </ul>
    </nav> 
        )
    }

export default Nav