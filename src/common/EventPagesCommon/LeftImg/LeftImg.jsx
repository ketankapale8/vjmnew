import React from 'react';
import './leftimg.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png'

const LeftImg = ({lefttitle , leftdesc, leftdate , lefttime , bannerImg }) => {
  return (
    <div className='leftimg'>
        <div className="leftImgContainer">
        <div className="rightContainer">
                    <img className="rightImgContainer" src={bannerImg} />

                    
            </div>
            <div className="leftContainer">
            <div className="LeftTitle">{lefttitle}</div>
            <img className="LeftImage" src={vectorDesign} alt="design"/>
            <div className="LeftDesc">{leftdesc}</div>
            <div className="time-date">
                <div className="LeftDesc">{leftdate}</div>
                <div className="LeftDesc">{lefttime}</div>

            </div>
            <div className="buttons">
                  <button className='exploremore1'>और अधिक जानें {'>'} </button>
                  <button className='exploremore1'>शामिल हों  {'>'} </button>


                </div>



            </div>
           
        </div>
    </div>
  )
}

export default LeftImg