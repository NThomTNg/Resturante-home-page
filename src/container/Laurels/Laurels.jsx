import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle} }) => (
  <div className='app_laurels_awards-card'>
    <img src= {imgUrl} alt='award' />

    <div className='app_laurels_awards-card_content'>
    <p className='p_cormorant'>{title}</p>
    <p className='p_cormorant' style={{color: '##504a34'}}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app_bg app_wrapper section_padding' id='awards'>
    <div className='app_wrapper_info'>
      <SubHeading title="Awards and recognition" />
      <h1 className='app_header-h1'>Our Laurels</h1>
      
      <div className='app_laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className='app_wrapper_img'>
    <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;