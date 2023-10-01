import React from 'react';
import './gurupurnima.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg8.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/gurupurnima/One.png';
import bannerImgLeft from '../../assets/gurupurnima/two.png';
import bannerImgLeft2 from '../../assets/gurupurnima/four.png';
import bannerImgRight2 from '../../assets/gurupurnima/three.png';
import bannerImgRight3 from '../../assets/gurupurnima/five.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
// import Mahayagya from './MahaYagya/Mahayagya';

const GuruPurnima = () => {
  const title = "गुरु पूर्णिमा 2022 - गुरु के आशीर्वाद से जीवन को समृद्ध करें"
  const desc = "परम पूज्य सुधांशु जी महाराज और डॉ. अर्चिका दीदी के मार्गदर्शन में शक्तिशाली ध्यान तकनीक और यौगिक क्रिया के माध्यम से गुरु की कृपा को आमंत्रित करें और आनंदमय गुरु पूर्णिमा महोत्सव मनाएं। आध्यात्मिक अभ्यास, ध्यान या साधना, हमारी ओर से एक ऐसी स्थिति बनाने का प्रयास है जिसमें हमारे बेहतर स्व, शांतिपूर्ण और वास्तव में हमारे व्यक्तित्व और विचार प्रक्रिया का नेतृत्व करते हैं, जिससे हम भौतिक और आध्यात्मिक लक्ष्यों को प्राप्त कर सकें।";


  const righttitle = "अमृत मंत्र योग साधना";
  const rightdesc = "अपने गुरु मंत्र को जाग्रत करें और अपने आप को एक सुरक्षा कवच से घेर लें। गुरु से परम सुरक्षा कवच प्राप्त करें और अपना सौभाग्य चक्र जगाएं!";
  const rightdate = "आश्रम परिसर में - 9 से 11 जुलाई 2022 तक ऑनलाइन - 10 से 12 जुलाई 2022 तक ऑनलाइन "
  const righttime = "10 से 12 जुलाई 2022 तक डॉ. अर्चिका दीदी द्वारा सत्र: शाम 4 बजे से"

  const lefttitle = "गुरु मंत्र दीक्षा";
  const leftdesc = "परम पूज्य सुधांशु जी महाराज द्वारा आध्यात्मिक जीवन में दीक्षित होने का अवसर गुरु मंत्र दीक्षा एक सुंदर आध्यात्मिक मार्ग है। जब आप इस रास्ते पर आगे बढ़ते हैं, तो आप निचली चेतना से उच्च चेतना की ओर बढ़ना शुरू करते हैं और अपने सच्चे स्वरूप को महसूस करते हैं।";
  const leftdate = " "
  const lefttime = ""


  const righttitle1 = "दिव्य शक्तिपात क्रिया";
  const rightdesc1 = "अपने भीतर आध्यात्मिक ऊर्जा का संचार करें, गुरु के आशीर्वाद से ठीक हो जाएं, प्राणिक ऊर्जा को बढ़ावा दें और एक गहन आंतरिक जागृति का अनुभव करें।";
  const rightdate1 = "आश्रम परिसर में: 12 जुलाई 2022, सुबह 10 बजे से "
  const righttime1 = "ऑनलाइन: 13 जुलाई 2022, सुबह 8 बजे से"

  const lefttitle1 = "गुरु पूर्णिमा महोत्सव";
  const leftdesc1 = "पूर्णिमा की रात गुरु सानिध्य का आनंद मनाएं! गुरु के साथ रहो, ज्ञान के प्रकाश में रहो, और गुरु पूर्णिमा को हर्षोल्लास से मनाओ। सभी समस्याओं को पीछे छोड़कर जीवन के खूबसूरत अनुभवों की ओर कदम बढ़ाइए।";
  const leftdate1 = " "
  const lefttime1= ""

  
  const righttitle2 = "पूर्णिमा दर्शन 2022 - गुरु की पूर्ण कृपा प्राप्त करने का समय";
  const rightdesc2= "परम पूज्य सुधांशु जी महाराज और डॉ अर्चिका दीदी जी के साथ गुरु पूर्णिमा के उत्सव में शामिल हों";
  const rightdate2 = "ऑनलाइन भाग लें या आश्रम परिसर में"
  const righttime2 = ""



  return (
    <div className='gurupurnima'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}/>
        <RightImg righttitle={righttitle2} rightdate={rightdate2} rightdesc={rightdesc2} righttime={righttime2} bannerImg={bannerImgRight3}/>

        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default GuruPurnima