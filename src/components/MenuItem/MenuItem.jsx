import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app_menuItem'>
    <div className='app_menuItem-head'>
      <div className='app_menuItem-name'>
        <p className='p_cormorant' style={{color: 'black'}}>{title}</p>
      </div>

      <div className='app_menuItem-dash'></div>

      <div className='app_menuItem-price'>
        <p className='p_cormorant'>{price}</p>
      </div>
    </div>

    <div className='app_menuItem-sub'>
      <p className='p_opensans'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;