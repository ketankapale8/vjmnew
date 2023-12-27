import React from 'react';
import './rightimg.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png';
import { Link } from 'react-router-dom';

const RightImg = ({righttitle , rightdesc, rightdate , righttime ,
   bannerImg , aurJaanetitle1,
   aurJaaneDesc,
   aurJaaneDesc1,
   aurJaaneDesc2,aurJaaneDesc3,
   aurJaaneDesc4,
   aurJaaneDesc5,aurJaaneDesc6,aurJaaneDesc7,
   aurJaaneHeadings


  }) => {
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
              <Link to="/more" state={{aurJaanetitle1 :aurJaanetitle1 , 
                aurJaaneDesc:aurJaaneDesc,
                aurJaaneDesc1: aurJaaneDesc1,
                aurJaaneDesc2: aurJaaneDesc2,
                aurJaaneDesc3: aurJaaneDesc3,
                aurJaaneDesc4: aurJaaneDesc4,
                aurJaaneDesc5: aurJaaneDesc5,
                aurJaaneDesc6: aurJaaneDesc6,
                aurJaaneDesc7: aurJaaneDesc7,

                aurJaaneHeadings: aurJaaneHeadings

                
                }} >
                  <button className='exploremore1'>और अधिक जानें {'>'} </button>
              
              </Link>
                  {/* <button className='exploremore1'>शामिल हों  {'>'} </button> */}


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