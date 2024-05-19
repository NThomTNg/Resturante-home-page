import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app_aboutus app_bg flex_center section_padding' id='about'>
    <div className='app_aboutus-overlay flex_center'>
      <img src = {images.V} alt='v letter' />
    </div>
    <div className='app_aboutus-content flex_center'>
      <div className='app_aboutus-content_about'>
        <h1 className='app_header-h1'>About Us</h1>
        <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type='button' className='custom_button'>Know More</button>
      </div>
      <div className='app_aboutus-content_history'>
        <h1 className='app_header-h1'>Our history</h1>
        <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type='button' className='custom_button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;