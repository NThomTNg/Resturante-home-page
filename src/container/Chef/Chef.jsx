import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app_bg app_wrapper section_padding'>
    <div className='app_wrapper_img app_wrapper_img-reverse'>
      <img src={images.Chef} alt="chef" />
    </div>
    <div className='app_wrapper_info'>
      <SubHeading title="Moms Word's" />
      <h1 className='app_header-h1'>What food is all about</h1>

      <div className='app_chef-content'>
        <div className='app_chef-content_quote'>
          <img src={images.quote} alt='quote'></img> 
          <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <p className='p_opensans'>Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum</p>
      </div>

    <div className='app_chef-sign'>
      <p>Quyền Nguyen</p>
      <p className='p_opensans'>Proud Vietnamese Mom</p>
      <img src={images.sign} alt="sign"/>
    </div>

    </div>
  </div>
)

export default Chef;