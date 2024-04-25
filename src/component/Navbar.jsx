import React from 'react';
import logo from '../images/Cover.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

const download_file_url = 'http://localhost:3000/Resume1.png';

const Navbar = () => {
    const handleDownloadResume = (url) => {
        const fileName = url.split("/").pop();
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => console.error('Error downloading file:', error));
    };

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
                            <Link className='Link' to="/Contact">Contact</Link>
                            <Link className='Link' to="/Projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className='resume'>
                    <button onClick={() => handleDownloadResume(download_file_url)}>Resume ↓</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;