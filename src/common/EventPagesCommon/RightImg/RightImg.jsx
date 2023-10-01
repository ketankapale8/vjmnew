import React from 'react';
import './rightimg.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png'

const RightImg = ({righttitle , rightdesc, rightdate , righttime , bannerImg }) => {
  return (
    <div className='rightimg'>
        <div className="rightImgContainer">
            <div className="leftContainer">
            <div className="LeftTitle">{righttitle}</div>
            <img className="LeftImage" src={vectorDesign} alt="design"/>
            <div className="LeftDesc">{rightdesc}</div>
            <div className="time-date">
                <div className="LeftDesc">{rightdate}</div>
                <div className="LeftDesc">{righttime}</div>

            </div>
            <div className="buttons">
                  <button className='exploremore1'>और अधिक जानें {'>'} </button>
                  <button className='exploremore1'>शामिल हों  {'>'} </button>


                </div>



            </div>
            <div className="rightContainer">
                    <img className="rightImgContainer" src={bannerImg} />

                    
            </div>
        </div>
    </div>
  )
}

export default RightImg