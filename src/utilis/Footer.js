import React from 'react';
import './Footer.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

function Footer() {
    
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About'>How it helps</Link>
            <Link to='/About'>Testimonials</Link>
            <Link to='/About'>Learning outcomes</Link>
            <Link to='/About'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Contactus'>Contact</Link>
            <Link to='/Countactus'>Support</Link>
            <Link to='/Contactus'>Suggestions</Link>
            <Link to='/Contactus'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>  

          <div class='footer-link-items'>
  <h2>Social Media</h2>
  <a href='https://www.linkedin.com/company/quaerere-analytics-club-dms-iit-ism-dhanbad/'>LinkedIn</a>
  <a href='https://www.instagram.com/analytics_club_iit_dhanbad/'>Instagram</a>
 
  <a href='https://twitter.com/AnalyticsDMSISM'>Twitter</a>
</div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Analytics
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Analytics club © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;