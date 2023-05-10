import React from 'react';
import './Header.css';
import images from '../../constants/images';
import {SubHeading} from '../../components';

const Header = () => (
  <div className='app__header section__padding app__wrapper' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour"/>
      <h1 className='app_header-h1'>The key to Fine dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome image" />
    </div>
  </div>
);

export default Header;
