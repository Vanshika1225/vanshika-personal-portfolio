import React from 'react'
import aboutImg from '../images/AboutImage.png';
import '../App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const About = () => {
  return (
    <div id='about'>
      <h1>About Me</h1>
      <div className='about'>
        <div className='left-about'>
          <img src={aboutImg} alt="" style={{ height: '350px' }} />
        </div>
        <div className='about-right'>
          <div className='about'>
            <div className='about-card'>
              <i className="bi bi-lightbulb"></i>
              <span>3 Star</span>
              <span>Leetode</span>
            </div>
            <div className='about-card'>
              <i className="bi bi-lightbulb"></i>
              <span>Advance</span>
              <span>in React Js</span>
            </div>
            <div className='about-card'>
              <i className="bi bi-lightbulb"></i>
              <span>1K+</span>
              <span>GeekForGeek</span>
            </div>
          </div>
          <div> <p>Coding wizard with a love for the stars ✨ and football ⚽. Guitar virtuoso on the side. A true team player, bringing tech-savvy and eclectic passions to the table.</p></div>
        </div>
      </div>
    </div>
  )
}

export default About