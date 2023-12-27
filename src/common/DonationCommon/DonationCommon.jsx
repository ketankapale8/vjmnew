import React from 'react';
import './donationcommon.scss';
import { Link } from 'react-router-dom';

const DonationCommon = ({title , desc , img, 
    aurJaanetitle1,
   aurJaaneDesc,
   aurJaaneDesc1,
   aurJaaneDesc2,aurJaaneDesc3,
   aurJaaneDesc4,
   aurJaaneHeadings

}) => {
  return (
    <div className='donationcommon'>
        <div className="donationCommonContainer">
            <div className="donationCommonleft">
                <img className="leftImg" src={img}/>
            </div>
            <div className="donationCommonright">
                <div className="donationCommontitle">
                    {title}
                </div>
                <div className="donationCommondesc">
                    {desc}

                    <div className="buttons">
              <Link to="/more" state={{
                aurJaanetitle1 :aurJaanetitle1 , 
                aurJaaneDesc:aurJaaneDesc,
                aurJaaneDesc1: aurJaaneDesc1,
                aurJaaneDesc2: aurJaaneDesc2,
                aurJaaneDesc3: aurJaaneDesc3,
                aurJaaneDesc4: aurJaaneDesc4,
                // aurJaaneDesc5: aurJaaneDesc5,
                // aurJaaneDesc6: aurJaaneDesc6,
                // aurJaaneDesc7: aurJaaneDesc7,

                aurJaaneHeadings: aurJaaneHeadings

                
                }} >
                  <button className='exploremore1'>और अधिक जानें {'>'} </button>
              
              </Link>
                  {/* <button className='exploremore1'>शामिल हों  {'>'} </button> */}


                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DonationCommon