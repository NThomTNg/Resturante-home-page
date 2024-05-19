import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className='app_header app_wrapper section_padding' id='home'>
    <div className='app_wrapper_info'>
      <SubHeading title='Experience comfort from the vietnamese home' />
      <h1 className='app_header-h1'>Authentic South Vietnamese Cuisine</h1>
      <p className='p_opensans' style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <button type='button' className='custom_button'>Explore Menu</button>

    </div>

    <div className='app_wrapper_img'>
    <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
