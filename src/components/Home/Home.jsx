import React from 'react';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import bannerImg from '../../assets/BannerImgs/BannerImg1.png';
import MiddleHomeC from './MiddleHomeContainer/MiddleHomeC.jsx';
import HeaderVideoComp from '../../common/HeaderVideoComponent/HeaderVideoComp.jsx';
import video from '../../assets/video/Home.mp4';
import './home.scss'
import KaryakramSangya from './KaryakramSangya/KaryakramSangya';
import SamajiKalyaan from './SamajikKalyaan/SamajikKalyaan';
import SamajikPehle from './SamajikPehle/SamajikPehle';
import Gyaan from './GyaanSection/Gyaan';
import NavjeevanSadhana from './NavjeevanSadhana/NavjeevanSadhana';
const Home = () => {
  return (
    <div className='home'>
      {/* <HeaderVideoComp title={'अन्नपूर्णा योजना'} desc={''}  video={video} style={{width:'100%'}}/> */}
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