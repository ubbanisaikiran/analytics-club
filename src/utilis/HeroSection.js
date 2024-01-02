import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './HeroSection.css';
import videoSource from '../videos/video-1.mp4';


function HeroSection() {
  return (
    <div className='hero-container'>
    <video src={videoSource} autoPlay loop muted type="video/mp4" />
      <h1>QUAERERE - Analytics Club</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TUTORIALS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;