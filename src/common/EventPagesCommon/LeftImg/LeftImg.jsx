import React from 'react';
import './leftimg.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png';
import { Link } from 'react-router-dom';


const LeftImg = ({lefttitle , leftdesc, leftdate , lefttime , bannerImg
  , aurJaanetitle1,
   aurJaaneDesc,
   aurJaaneDesc1,
   aurJaaneDesc2,aurJaaneDesc3,
   aurJaaneDesc4,
   aurJaaneHeadings
}) => {
  
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
            <div className="buttons" >
            <Link to="/more" state={{aurJaanetitle1 :aurJaanetitle1 , 
                aurJaaneDesc:aurJaaneDesc,
                aurJaaneDesc1: aurJaaneDesc1,
                aurJaaneDesc2: aurJaaneDesc2,
                aurJaaneDesc3: aurJaaneDesc3,
                aurJaaneDesc4: aurJaaneDesc4,

                aurJaaneHeadings: aurJaaneHeadings

                
                }} >
                  <button className='exploremore1'>और अधिक जानें {'>'} </button>
                </Link>
                  {/* <button className='exploremore1'>शामिल हों  {'>'} </button> */}


                </div>



            </div>
           
        </div>
    </div>
  )
}

export default LeftImg