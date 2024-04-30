import React from 'react';
import image from '../images/sidePic.jpg';
import instaImage from '../images/insta.webp';
import linkedIn from '../images/linkedin.png';
import githubimages from '../images/github.png';
import mail from '../images/mail.png';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className="left">
                    <h3> Hi, My name is <span>Vanshika </span>
                        And I have a good command in
                        <span> Frontend Technologies like HTML5 , CSS3 , Javascript and ReactJs</span>
                    </h3>
                    <div className="home-logo">
                        <a href="https://www.instagram.com/"><img src={instaImage} style={{ width: "45px" }} alt='insta image' /></a>
                        <a href="https://www.linkedin.com/in/vanshika-04769721b/"><img src={linkedIn} style={{ height: "38px" }} alt='linked image' /></a>
                        <a href="https://github.com/Vanshika1225"><img src={githubimages} alt='github image' /></a>
                        <a href="https://mail.google.com/mail/u/"><img src={mail} alt='mail image' /></a>
                    </div>
                </div>
                <div className='right'>
                    <img src={image} alt='sidepic' />
                </div>
            </div>
        </>
    );
};

export default Hero;
