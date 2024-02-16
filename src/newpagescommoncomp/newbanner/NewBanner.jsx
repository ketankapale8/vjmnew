import React from 'react';
import './newbanner.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png'
// import Banner from '../../../src/assets/newassets/banner/Banner1.png'
import DonationAmtCalculator from '../DonationAmtCalculator/DonationAmtCalculator';

const NewBanner = ({Banner ,bannerData}) => {
    // const bannerData = [
    //     {
    //         title : "Transform the lives of children",
    //         desc : "Contribute to Kanya Atmanirbhar Abhiyaan",
    //         amountArr: [
    //             {
    //                 amt : "12,000"
    //             },
    //             {
    //                 amt : "12,000"
    //             },
    //             {
    //                 amt : "12,000"
    //             },
    //             {
    //                 amt : "12,000"
    //             },
    //             {
    //                 amt : "other"
    //             }
    //         ],

    //         commonDesc : "Your support to uplift these children gives you 50% tax exemption under section 80G"
    //     }
    // ]
  return (
    <div className='banner'>
        <div className="bannerContainer">
            <div className="leftContainer">
                <img className='bannerImg' src={Banner}/>
            </div>
            <div className="rightContainer">
                <div className="rightContainerData">
                    <DonationAmtCalculator bannerData={bannerData}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default NewBanner