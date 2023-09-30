import React from 'react';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import bannerImg from '../../assets/BannerImgs/BannerImg1.png';
import MiddleHomeC from './MiddleHomeContainer/MiddleHomeC.jsx';
import './home.scss'
import KaryakramSangya from './KaryakramSangya/KaryakramSangya';
import SamajiKalyaan from './SamajikKalyaan/SamajikKalyaan';
const Home = () => {
  return (
    <div className='home'>
      <HeaderImgC img={bannerImg}/>
      <MiddleHomeC/>
      <KaryakramSangya/>
      <SamajiKalyaan/>
    </div>
  )
}

export default Home