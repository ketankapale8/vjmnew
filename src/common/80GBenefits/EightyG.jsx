import React from 'react';
import './eightyg.scss'
import img from '../../assets/eightyg/BanImg.png'

const EightyG = () => {
  return (
    <div className='eightyg'>
      <div className="eightygContainer">
        <img src={img} className='eightygImg'/>
      </div>
    </div>
  )
}

export default EightyG