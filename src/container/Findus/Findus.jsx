import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app_bg app_wrapper section_padding' id='contact'>
    <div className='app_wrapper_info'>
    <SubHeading title="Contact" />
    <h1 className='app_header-h1' style={{ marginBottom: '3rem'}}>Find us</h1>
    <div className='app_wrapper-content'>
      <p className='p_opensans'> Adress Adress Adress Adress Adress</p>
      <p className='p_cormorant' style={{color: '#000', margin: '2rem 0'}}>Opening Hours</p>
      <p className='p_opensans'>Mon - Fri: 10:00 am - 01:00 am</p>
      <p className='p_opensans'>Sat - Sun: 10:00 am - 00:00 am</p>
    </div>

    <button className='custom_button' style={{marginTop: '2rem'}}>Visit Us</button>


    </div>
      <div className='app_wrapper_img'>
        <img src={images.findus} alt='findus' />
      </div>
  </div>
);

export default FindUs;