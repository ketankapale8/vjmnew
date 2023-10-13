import React from 'react';
import './vediceducation.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg11.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/gaushala/Right.png';
import bannerImgLeft from '../../assets/balkalyaan/Two.png';
// import bannerImgLeft2 from '../../assets/gurupurnima/four.png';
// import bannerImgRight2 from '../../assets/gurupurnima/three.png';
// import bannerImgRight3 from '../../assets/gurupurnima/five.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import EightyG from '../../common/80GBenefits/EightyG';
import AboveBottomContainer from '../../common/EventPagesCommon/AboveBottomContainer/AboveBottomContainer';

import one from '../../assets/vedicedu/1.png'
import two from '../../assets/vedicedu/2.png'
import three from '../../assets/vedicedu/4.png'
import four from '../../assets/vedicedu/4.png'

// import Mahayagya from './MahaYagya/Mahayagya';

const VedicEducation = () => {
  const title = "वैदिक शिक्षा - दान क्यों करें"
  const desc = "वैदिक शिक्षा का उद्देश्य छात्रों के सर्वांगीण विकास में ईश्वर की भक्ति, चरित्र निर्माण, व्यक्तित्व का विकास, नागरिक तथा सामाजिक कर्तव्यों का पालन, सामाजिक कुशलता की उन्नति कर उसे एक उपयोगी सदस्य बनाना है जो देश की उन्नति तथा राष्ट्रीय संस्कृति के संरक्षण तथा प्राचीन भारतीय शिक्षा के प्रसार में अपना योगदान कर सके। आपका छोटा सा योगदान गुरुकुल के छात्रों को बिना किसी बाधा के अपनी पढ़ाई जारी रखने और एक जिम्मेदार नागरिक बनने में सहायक होगा।";


  const righttitle = "गुरुकुल – वैदिक शिक्षा";
  const rightdesc = "भारत वैदिक शिक्षा की उपेक्षा नहीं कर सकता जो पिछले 5000 वर्षों से देश की संस्कृति का हिस्सा रही है। 20वीं सदी से पहले भी हमारे देश में महान प्रबंधक और वैज्ञानिक थे। किसी को भी भगवद गीता, रामायण, महाभारत, पुराणों और विभिन्न उपनिषदों सहित हमारे वैदिक शास्त्रों में प्रबंधन रणनीतियों और वैज्ञानिक अंतर्दृष्टि जानकारी मिल सकती है।";
  const rightdate = " "
  const righttime = ""

  const lefttitle = "बाल आश्रम, सूरत, भारत";
  const leftdesc = "बाल आश्रम आपका मामूली अनाथालय नहीं है। यह गरीब बच्चों के लिए एक पूर्ण विद्यालय है जो उच्च गुणवत्ता वाली शिक्षा के साथ-साथ मुफ्त आवास भी प्रदान करता है। ऐसे कई स्वयंसेवक और वेतनभोगी कर्मचारी हैं जो इन बच्चों को पढ़ाते और उनकी देखभाल करते हैं।";
  const leftdate = " "
  const lefttime = ""


  const righttitle1 = "ज्ञानदीप विद्यालय, फरीदाबाद";
  const rightdesc1 = "'एक महिला इस खूबसूरत दुनिया की निर्माता है और हम यह सुनिश्चित करते हैं कि उसकी आर्थिक और सामाजिक पृष्ठभूमि की परवाह किए बिना उसे एक सम्मानजनक जीवन मिले।'";
  const rightdate1 = " "
  const righttime1 = ""

  const lefttitle1 = "सृजन पब्लिक स्कूल, मुरादाबाद";
  const leftdesc1 = "एक स्कूल जो निम्न-आय वाले परिवारों के बच्चों को उच्च-गुणवत्ता की शिक्षा प्रदान करता है, यह स्कूल 10 अप्रैल, 2016 को शुरू हुआ। इसका उद्देश्य दिहाड़ी मजदूरों और प्रवासी श्रमिकों के बच्चों को बुनियादी प्राथमिक स्कूली शिक्षा प्रदान करना है।";
  const leftdate1 = " "
  const lefttime1= ""

  
  const righttitle2 = "आदिवासी पब्लिक स्कूल, झारखंड";
  const rightdesc2= "झारखंड के 'अशांत' इलाकों रुक्का और खूंटी में दो स्कूल चल रहे हैं। वे माओवाद से संबंधित हिंसा से प्रभावित बच्चों को परेशानी मुक्त शिक्षा प्रदान करने के विचार से चलते हैं।";
  const rightdate2 = "ऑनलाइन भाग लें या आश्रम परिसर में"
  const righttime2 = ""

  const ServicesArray1 = [
    {
      title : "एक बच्चे को शिक्षित करें।",
      desc : "शिक्षा जीवन की एक कला है जो हमारे जीवन को बेहतर बनाती है। गुरुकुल के छात्रों को उनकी पढ़ाई जारी रखने में उनकी हर संभव मदद करें।      ",
      img: one,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "छात्रों के भोजन की व्यवस्था।",
      desc : "दिल्ली, सूरत, फरीदाबाद, मुरादाबाद और झारखंड के सभी स्कूल और आश्रम प्रत्येक बच्चे (विश्व जागृति मिशन के विभिन्न संस्थानों में लगभग 5000 बच्चे) को मुफ्त और पौष्टिक भोजन प्रदान करते हैं।      ",
      img: two,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

  ]
  const ServicesArray2 = [
    {
      title : "चिकित्सा देखभाल।",
      desc : "गुरूकुल के छात्रों को अच्छा स्वास्थ्य देने और समय-समय पर उनके लिए दवाएं और टीका उपलब्ध करवाने में मदद करें।      ",
      img: three,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "स्टेशनरी/किताबें/यूनिफॉर्म।",
      desc : "छात्रों के लिए स्टेशनरी/किताबें/यूनिफॉर्म आवश्यक वस्तुएं हैं। छात्रों के लिए यह वस्तुएं आसानी से उपलब्ध करवाई जा सके इसलिए कृपया उनकी मदद करें।      ",
      img: four,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

  ]

  const ServicesArray3 = [
    {
      title : "एक दिन के लिए 1 गाय का भोजन",
      desc : "आप एक गाय के पूरे दिन के भोजन की व्यवस्था के लिए 150/- रूपए का दान कर सकते हैं और यदि आप चाहें तो अधिक गायों को भी भोजन करा सकते हैं।      ",
      img: one,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "एक महीने के लिए एक गाय को गोद लें",
      desc : "एक महीने के लिए एक गाय को गोद लेने में उनके भोजन, दवाई आदि जैसे सभी खर्च शामिल हैं। आप चाहें तो अधिक गायों को भी गोद ले सकते हैं।      ",
      img: two,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

  ]
  const ServicesArray4 = [
    {
      title : "गोदान",
      desc : "गोदान से बढ़कर कुछ भी नहीं है। यदि श्रद्धापूर्वक गौ का दान किया जाय तो वह समस्त कुल का तत्काल उद्धार कर देती है। गोदान करने से जीवन की सभी बाधाएं दूर होती हैं। अपने जन्मदिन/शादी की सालगिरह या अपनी पसंद के किसी भी शुभ दिन पर गोदान करें।      ",
      img: two,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "गाय माता के लिए अलग-अलग वस्तुएँ खिलाएँ (गौ ग्रास)",
      desc : "हरी घास (100 किग्रा की 1 इकाई - 900/- रुपए), चोकर/मवेशी चारा (20 किग्रा बैग - 1100/- रुपए), भूसा / भूसी (100 किग्रा की 1 यूनिट 700/- रुपए), गुड/गुड़ (10 किग्रा बैग 550/- रुपए)      ",
      img: three,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

  ]




  return (
    <div className='vedicedu'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <AboveBottomContainer ServicesArray1={ServicesArray1} ServicesArray2={ServicesArray2}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <AboveBottomContainer ServicesArray1={ServicesArray3} ServicesArray2={ServicesArray4}/>

        {/* <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle2} rightdate={rightdate2} rightdesc={rightdesc2} righttime={righttime2} bannerImg={bannerImg}/> */}
        <EightyG/>
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default VedicEducation