import React from 'react';
import './navjeevansadhana.scss';
import BannerImg from '../../../assets/navjeevansadhana/bannerImg.png'
import Lotus from '../../../assets/navjeevansadhana/Lotus-Flower.png'
import Design from '../../../assets/navjeevansadhana/Design.png'



const NavjeevanSadhana = () => {
  return (
    <div className='navjeevansadhana'>
        <div className="navjeevansadhanaContainer">
            <div className="sadhanaLeft">
              <img className='sadhanaBannerImg' src={BannerImg}/>
            </div>

            <div className="sadhanaRight">
              <img src={Design} className='topFlowerImg'/>
                <div className="sadhanaTitle">
                नव जीवन साधना!
                </div>
                <div className="sadhanaDesc">
                स्वयं को नवीन करना इतना कठिन नहीं है, यह सरल और सहज है, महाराजश्री हर चरण में स्वयं आपका मार्गदर्शन करेंगे।
                </div>
                <div className="sadhanaSubDesc">
                नवीन करना, नई परिभाषा, और रूपान्तरण नये जीवन का
                </div>
                <div className="buttons">
                  <button className='exploremore'>और देखें </button>
                  <button className='exploremore'>सदस्यता लें {'>'} </button>


                </div>
                <img src={Lotus} className='flowerImg'/>
            </div>
        </div>
    </div>
  )
}

export default NavjeevanSadhana