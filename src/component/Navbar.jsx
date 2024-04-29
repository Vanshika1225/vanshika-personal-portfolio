import React from 'react';
import logo from '../images/Cover.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const handleDownloadResume = () => {

    }
    return (
        <div className='container'>
            <div className='navigation-bar'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt='logo' />
                    </Link>
                    <h4>Portfolio</h4>
                </div>
                <div className='navigation-options'>
                    <ul>
                        <li className='li'>
                            <Link className='Link' to="/About"> About me</Link>
                            <Link className='Link' to="/Skills">Skills</Link>
                            <Link className='Link' to="/Projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className='resume'>
                    <button onClick={() => handleDownloadResume()}>
                        <Link to="/Resume" style={{color:"white",textDecoration:'none'}}>
                            {/* Resume  ↓ */}
                            Resume
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;