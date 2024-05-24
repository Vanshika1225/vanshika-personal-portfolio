import React, { useState } from 'react'
import newsman from '../images/newsman.jpg';
import quizapp from '../images/images.jpg';
import LinkIcon from '../images/icon.png';

import '../css/project.css'
const Projects = () => {
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }

  const showSeeDetailsButton1 = () => {
    setShowButton1(true);
  }
  const hideSeeDetailButton1 = () => {
    setShowButton1(false);
  }
  const showSeeDetailsButton2 = () => {
    setShowButton2(true);
  }
  const hideSeeDetailButton2 = () => {
    setShowButton2(false);
  }
  return (
    <div>
      <div className='container' id='projects'>
        <div>
          <h1>My Projects</h1>
        </div>
        <div className='project-section'>
          <div className='project-content' onMouseEnter={showSeeDetailsButton1} onMouseLeave={hideSeeDetailButton1}>
            <img src={newsman} alt='' />
            {
              showButton1 && <button className='show-btn-1' onClick={openModal}>See Details</button>
            }
          </div>
          <div className='project-content' onMouseEnter={showSeeDetailsButton2} onMouseLeave={hideSeeDetailButton2}>
            <img src={quizapp} alt='' width='497px;' />
            {
              showButton2 && <button className='show-btn-2' onClick={openModal}>See Details</button>
            }
          </div>
        </div>
      </div>

      {showModal &&
        <div className='modal'>
          <p className='close' onClick={() => setShowModal(false)}>X</p>
          <p className='paragraph'>
            Newsman is a React-based application designed to deliver curated news content to users. Utilizing React's component-based architecture, Newsman offers a user-friendly interface for browsing and consuming news articles. It integrates features like image previews, categorization, and personalized recommendations. Through efficient state management and UI updates, users can seamlessly navigate through different news categories and stay updated with the latest information. Newsman aims to enhance the news reading experience by providing an intuitive and responsive platform built on React technology.
          </p>
          <p className='paragraph'> <b>Technologies used :</b>HTML, CSS, Javascript ,React</p>
          <a href="YOUR_LIVE_LINK" target="_blank" rel="noopener noreferrer">
            <button className='live-btn'>
              Live
            </button>
            <img src={LinkIcon} alt='link icon' className='link-icon' style={{ width: '20px' }} />
          </a>
        </div>
      }

      {showModal &&
        <div className='modal'>
          <p className='close' onClick={() => setShowModal(false)}>X</p>
          <p className='paragraph'>
            Newsman is a React-based application designed to deliver curated news content to users. Utilizing React's component-based architecture, Newsman offers a user-friendly interface for browsing and consuming news articles. It integrates features like image previews, categorization, and personalized recommendations. Through efficient state management and UI updates, users can seamlessly navigate through different news categories and stay updated with the latest information. Newsman aims to enhance the news reading experience by providing an intuitive and responsive platform built on React technology.
          </p>
          <p className='paragraph'> <b>Technologies used :</b>HTML, CSS, Javascript ,React</p>
          <a href="YOUR_LIVE_LINK" target="_blank" rel="noopener noreferrer">
            <button className='live-btn'>
              Live
            </button>
            <img src={LinkIcon} alt='link icon' className='link-icon' style={{ width: '20px' }} />
          </a>
        </div>
      }
    </div>
  )
}

export default Projects