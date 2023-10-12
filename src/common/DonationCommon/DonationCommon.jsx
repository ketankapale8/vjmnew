import React from 'react';
import './donationcommon.scss';

const DonationCommon = ({title , desc , img}) => {
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
                </div>
            </div>

        </div>
    </div>
  )
}

export default DonationCommon