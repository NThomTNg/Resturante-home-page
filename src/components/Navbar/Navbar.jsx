import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from "react-icons/md";

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <div className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.Logo} alt='app logo'/>
      </div>
      <ul className='app_navbar-links'>
        <li className='p_opensans'><a href='#home'>Home</a></li>
        <li className='p_opensans'><a href='#about'>About</a></li>
        <li className='p_opensans'><a href='#menu'>Menu</a></li>
        <li className='p_opensans'><a href='#contact'>Contact</a></li>
        <li className='p_opensans'><a href='#takeaway'>Takeaway</a></li>
      </ul>
      <div className='app_navbar-login'>
        <a href='#login' className='p_opensans'>Log In / Register</a>
        <div />
        <a href='#booktable' className='p_opensans'>Book Table</a>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color='#171717' fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>
        <MdOutlineRestaurant fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
          <ul className='app_navbar-smallscreen_links'>
            <li className='p_opensans'><a href='#home'>Home</a></li>
            <li className='p_opensans'><a href='#about'>About</a></li>
            <li className='p_opensans'><a href='#menu'>Menu</a></li>
            <li className='p_opensans'><a href='#contact'>Contact</a></li>
            <li className='p_opensans'><a href='#takeaway'>Takeaway</a></li>
          </ul>
        </div>
      )}


      </div>
    </div>
  )
}
export default Navbar;