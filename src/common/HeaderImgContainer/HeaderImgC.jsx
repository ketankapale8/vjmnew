import React from 'react';
import './headerimg.scss';


const HeaderImgC = ({img}) => {
  return (
    <div className='headerImg'>
        <img className='bannerImg' src={img} alt='bannerImg'/>
    </div>
  )
}

export default HeaderImgC