import React from 'react';
import '../App.css';
import Cplus from '../images/c++.png'
import java from '../images/java.png'
import react from '../images/react.jpg'
import html from '../images/html.jpg'
import css from '../images/css.png'
import git from '../images/git.png'
import js from '../images/js.png'
import dsa from '../images/dsa.png'

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <h2>My Skills</h2>
        <div className='skill-set'>
          <div className='inner-1'>
            <div className='box'>
              <img src={Cplus} alt='' />
              <span>C++</span>
            </div>
            <div className='box'>
              <img src={java} alt='' />
              <span>JAVA</span>
            </div>
            <div className='box'>
              <img src={react} alt='' />
              <span>React</span>
            </div>
            <div className='box'>
              <img src={html} alt='' />
              <span>HTML</span>
            </div>
          </div>
        </div>
        <div className='skill-set'>
          <div className='inner-2'>
            <div className='box'>
              <img src={css} alt='' />
              <span>CSS</span>
            </div>
            <div className='box'>
              <img src={git} alt='' />
              <span>Git</span>
            </div>
            <div className='box'>
              <img src={dsa} alt='' />
              <span>DSA</span>
            </div>
            <div className='box'>
              <img src={js} alt='' />
              <span>Javascript</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills