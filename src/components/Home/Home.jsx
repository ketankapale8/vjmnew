import React from 'react';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import bannerImg from '../../assets/BannerImgs/BannerImg1.png';
import MiddleHomeC from './MiddleHomeContainer/MiddleHomeC.jsx';
import './home.scss'
import KaryakramSangya from './KaryakramSangya/KaryakramSangya';
import SamajiKalyaan from './SamajikKalyaan/SamajikKalyaan';
import SamajikPehle from './SamajikPehle/SamajikPehle';
import Gyaan from './GyaanSection/Gyaan';
import NavjeevanSadhana from './NavjeevanSadhana/NavjeevanSadhana';
const Home = () => {
  return (
    <div className='home'>
      <HeaderImgC img={bannerImg}/>
      <MiddleHomeC/>
      <KaryakramSangya/>
      <SamajiKalyaan/>
      <SamajikPehle/>
      <Gyaan/>
      <NavjeevanSadhana/>
    </div>
  )
}

export default Home