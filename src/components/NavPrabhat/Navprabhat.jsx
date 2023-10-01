import React from 'react';
import './navprabhat.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg9.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/navprabhat/One.png';
import bannerImgLeft from '../../assets/navprabhat/Two.png'
import bannerImgLeft2 from '../../assets/navprabhat/Three.png';
import bannerImgRight2 from '../../assets/navprabhat/One.png';
import bottomBan from '../../assets/navprabhat/rect.png'
import bannerImgRight3 from '../../assets/gurupurnima/five.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
// import Mahayagya from './MahaYagya/Mahayagya';

const Navprabhat = () => {
  const title = "नया साल विशेष"
  const desc = "अच्छे स्वास्थ्य और भरपूर आनंद को अपनी ओर आमंत्रित करते हुए अपने आपको रूपांतरित करने का समय - 30 दिसंबर 2022 से 1 जनवरी 2023 तक विशेष कार्यक्रम।";


  const righttitle = "जीवन निर्माण साधना";
  const rightdesc = "सही ध्यान तकनीक की मदद से अच्छे स्वास्थ्य, समृद्धि, सुख, आनंद और शांति का जीवन जीने के लिए तैयार हो जाइए।";
  const rightdate = "ऑफलाइन - दिनांक: 30 दिसंबर 2022 से 31 दिसंबर "
  const righttime = "2022 ऑनलाइन - दिनांक: 31 दिसंबर 2022 से 1 जनवरी 2023 तक"

  const lefttitle = "नववर्ष पर यज्ञ";
  const leftdesc = "इस पृथ्वी पर यज्ञ करना न केवल पवित्र कार्य है बल्कि सर्वोच्च कर्म भी है। शुभ यज्ञ में शामिल होने के साथ, परम पूज्य सद्गुरु श्री सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी हमें पवित्रता और ईश्वर के आशीर्वाद के साथ नव वर्ष में प्रवेश करने के लिए एक शानदार अवसर प्रदान करते हैं।";
  const leftdate = " "
  const lefttime = ""


  const righttitle1 = "भावपूर्ण भजन और सत्संग";
  const rightdesc1 = "महाराजश्री के भावपूर्ण प्रवचन आपके विचारों और ऊर्जा को रिचार्ज करते हैं। पवित्र मंत्रों को जपने से आप अपनी आभा को शुद्ध और सक्रिय करते हैं। भावपूर्ण भजन आनंद के साथ गाएं और भक्तिमय सुंदर क्षणों के साथ अपने जीवन को सुशोभित करें। भक्ति संगीत की ध्वनि और गुरु की दिव्य आवाज वातावरण को शुद्ध आनंदमय करके आप पर दिव्य आशीर्वाद बरसाएगी।";
  const rightdate1 = "दिनांक और समय: 1 जनवरी 2023, सुबह 11:30 बजे से"
  const righttime1 = ""

  const lefttitle1 = "शोभा यात्रा";
  const leftdesc1 = "नव वर्ष का दिन, अपने साथ शिष्यों के लिए गुरु दर्शन का एक दुर्लभ अवसर भी लाता है, गुरुवर के सानिध्य में नव वर्ष का स्वागत करने के लिए भावपूर्ण भजन-कीर्तन के साथ शोभायात्रा निकाली जाएगी। इस शोभायात्रा में शामिल होने के लिए आप सभी को आमंत्रित किया जाता है";
  const leftdate1 = "समय : सुबह 10 बजे से आनंदधाम आश्रम, नई दिल्ली, भारत "
  const lefttime1= ""

  
  const righttitle2 = "पूर्णिमा दर्शन 2022 - गुरु की पूर्ण कृपा प्राप्त करने का समय";
  const rightdesc2= "परम पूज्य सुधांशु जी महाराज और डॉ अर्चिका दीदी जी के साथ गुरु पूर्णिमा के उत्सव में शामिल हों";
  const rightdate2 = "ऑनलाइन भाग लें या आश्रम परिसर में"
  const righttime2 = ""



  return (
    <div className='navprabhat'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft}/>
        <img style={{width: '100%' , height:'100%'}} src={bottomBan}/>
        {/* <RightImg righttitle={righttitle2} rightdate={rightdate2} rightdesc={rightdesc2} righttime={righttime2} bannerImg={bannerImgRight3}/> */}

        {/* <Mahayagya/> */}
        {/* <BankTransfer/> */}
    </div>
  )
}

export default Navprabhat