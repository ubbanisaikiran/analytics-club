/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Page.css"
const About = () => {
  return (
    <div class="main-container">
    <div class="image-div">
      <img src='../../images/Clubnew.jpg' alt="ImageText" />
      
    </div>
    
    <div class="heading-div">
      <h1 className='heading'>Departmet of Management Studies <br /> 
      and Industrial Engineering <br /> IIT (ISM), Dhanbad</h1>
    </div>
    <div class="image-div">
      <img src='../../images/logo.jpg' alt="Another Image Alt Text" />
    </div>
    <video src='/public/videos/video-2.mp4' />
  </div>
  )
}

export default About