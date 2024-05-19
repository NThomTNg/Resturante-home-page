import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app_footer section_padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app_footer-links'>
      <div className='app_footer-links_contacts'>
        <h1 className='app_footer-headtext'>Contact Us</h1>
        <p className='p_opensans'>3 W 12th St, Los Angelos, LA 04392, USA</p>
        <p className='p_opensans'>+1 435-235-354</p>
        <p className='p_opensans'>+1 435-235-354</p>
      </div>

      <div className='app_footer-links_logo'>
        <img src={images.Logo} alt="footer_log" />
        <p className='p_opensans'>Find the comfort of home in our resturante</p>
        <div className='app_footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app_footer-links_work'>
        <h1 className='app_footer-headtext'>Working hours</h1>
        <p className='p_opensans'>Monday-Friday:</p>
        <p className='p_opensans'>08:00 am -12:00 am</p>
        <p className='p_opensans'>Saturday-Sunday:</p>
        <p className='p_opensans'>07:00 am -11:00pm</p>
      </div>
    </div>
    <div className='footer_copyright'>
      <p className='p_opensans'>2024 Vietfoody. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;