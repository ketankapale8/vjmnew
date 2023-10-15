import React from 'react';
import './oldagehome.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg14.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/olagehome/Right.png';
import bannerImg1 from '../../assets/olagehome/left.png';

import bannerImgLeft from '../../assets/balkalyaan/Two.png';
// import bannerImgLeft2 from '../../assets/gurupurnima/four.png';
// import bannerImgRight2 from '../../assets/gurupurnima/three.png';
// import bannerImgRight3 from '../../assets/gurupurnima/five.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import EightyG from '../../common/80GBenefits/EightyG';
import AboveBottomContainer from '../../common/EventPagesCommon/AboveBottomContainer/AboveBottomContainer';

import one from '../../assets/olagehome/1.png'
import two from '../../assets/olagehome/2.png'
import three from '../../assets/olagehome/3.png'
import four from '../../assets/olagehome/4.png'

import five from '../../assets/olagehome/5.png'
import six from '../../assets/olagehome/6.png'
import seven from '../../assets/olagehome/7.png'
import eight from '../../assets/olagehome/8.png'

// import Mahayagya from './MahaYagya/Mahayagya';

const OldAgeHome = () => {
  const title = "बुजुर्गों ने परिवार, समाज और राष्ट्र के निर्माण में अहमभूमिका निभाई है।"
  const desc = "जब उन्हें आवश्यकता हो तो सम्मान के साथ जीने में उनकी मदद करें।";


  const title1 = "हमारे वृद्धाश्रम";
  const desc1 = "पूरे भारत के दयालु लोगों के आर्थिक सहयोग के साथ, आनंदधाम आश्रम में अपना पहला वृद्धाश्रम स्थापित करने के बाद से विश्व जागृति मिशन अनुमानित 1000 बुजुर्गों की सेवा करने में सक्षम था।"


  const righttitle = "वृद्ध आश्रम";
  const rightdesc = "हमारे देश में, एक निश्चित आयु तक पहुँचने पर बहुत से बुजुर्गों के लिए जीवन बहुत कठिन हो जाता है। उन्हें अपनों के प्यार और स्नेह की कमी होती है। यदि वे बिना किसी आय के स्रोत के गरीब हैं तो स्थिति और भी खराब हो सकती है।";
  const rightdate = " "
  const righttime = ""

  const lefttitle = "विश्व जागृति मिशन के गुरुकुल का लक्ष्य और उपलब्धियां";
  const leftdesc = "आनंदधाम आश्रम, नई दिल्ली के विशाल परिसर में स्थित, महर्षि वेदव्यास गुरुकुल विद्यापीठ एक अनूठा केंद्र है, जिसमें प्राचीन और आधुनिक विषयों का अध्ययन कराया जाता है। इसकी प्रमुख परिकल्पना युवा मन में वैज्ञानिक स्वभाव के साथ भारतीय विश्वास प्रणाली को विकसित करना तथा वंचित बच्चों को मुफ्त और गुणवत्तापूर्ण शिक्षा प्रदान करना है।";
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
      title : "वरिष्ठ नागरिक की पूरी देखभाल",
      desc : "किसी उपेक्षित वरिष्ठ नागरिक के एकाकीपन को दूर करने के लिए उन्हें अपनाकर उन्हें उनके अकेलेपन से लड़ने में मदद करें और उन लोगों का साथ दें जिन्हें इसकी सबसे ज्यादा जरूरत है।    ",
      img: one,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "वरिष्ठ नागरिक के एक महीने के खाने-पीने का खर्चा वहन करें।",
      desc : "हमारे वरिष्ठ नागरिकों को प्रतिदिन पौष्टिक आहार लेने और अच्छा स्वास्थ्य बनाए रखने में मदद करें।      ",
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
      title : "वस्त्र/दैनिक आवश्यकताओं के लिए दान करें।",
      desc : "हमारे वरिष्ठ नागरिकों को मौसम की स्थिति के अनुसार कपड़े और दैनिक उपयोग की वस्तुएं उपलब्ध कराने में मदद करें।   ",
      img: three,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "मोतियाबिंद की सर्जरी कराने में मदद करें।",
      desc : "मोतियाबिंद सर्जरी की सहायता से हमारे वरिष्ठ नागरिकों को फिर से स्पष्ट रूप से देखने में मदद होगी। कृपया इस सर्जरी पर होने वाले व्यय को वहन करके उनकी मदद करें।   ",
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
      title : "इंफ्रास्ट्रक्चर डेवलपमेंट",
      desc : "बेहतर इंफ्रास्ट्रक्चर का मतलब वरिष्ठों की बेहतर देखभाल और आराम है। आप भी इंफ्रास्ट्रक्चर डेवलपमेंट में हमारी मदद करें।      ",
      img: five,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "किसी वरिष्ठ नागरिक की नियमित दवाओं/ओपीडी खर्च के लिए दान करें।",
      desc : "कुछ वरिष्ठ नागरिक तो सामान्य दवाएं भी नहीं खरीद पाते हैं, उनको स्वस्थ बनाए रखने में मदद करें।      ",
      img: six,
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
      title : "वरिष्ठ जनों को उनके अंतिम दिनों में आशा का उपहार दें।",
      desc : "वरिष्ठ नागरिक प्रसन्न होंगे यदि आपने उनकी आवश्यकताओं को ध्यान में रखा और उन्हें आशातीत खुशी प्रदान की तो इससे वो रोमांचित होंगे और अपने जीवन के अंतिम दिनों को आसानी से बीता पाएंगे।      ",
      img: seven,
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
      img: eight,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

  ]




  return (
    <div className='oldagehome'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <AboveBottomContainer ServicesArray1={ServicesArray1} ServicesArray2={ServicesArray2}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImg1}/>
        <TitlePage title={title1} desc={desc1}/>

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

export default OldAgeHome