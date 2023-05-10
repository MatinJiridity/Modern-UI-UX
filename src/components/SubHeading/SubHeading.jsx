import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div style={{marginBottom: "1rem"}}>
    <p className='p__opensans'>{title}</p>
    <img src={images.spoon} className='spoon_image'   alt='spoon image' />
  </div>
);

export default SubHeading;
