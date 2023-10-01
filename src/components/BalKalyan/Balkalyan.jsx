import React from 'react';
import './balkalyaan.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg10.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/balkalyaan/One.png';
import bannerImgLeft from '../../assets/balkalyaan/Two.png';
// import bannerImgLeft2 from '../../assets/gurupurnima/four.png';
// import bannerImgRight2 from '../../assets/gurupurnima/three.png';
// import bannerImgRight3 from '../../assets/gurupurnima/five.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import EightyG from '../../common/80GBenefits/EightyG';
import AboveBottomContainer from '../../common/EventPagesCommon/AboveBottomContainer/AboveBottomContainer';

import five from '../../assets/balkalyaan/five.png'
import six from '../../assets/balkalyaan/six.png'
import seven from '../../assets/balkalyaan/seven.png'
import eight from '../../assets/balkalyaan/eight.png'

// import Mahayagya from './MahaYagya/Mahayagya';

const Balkalyaan = () => {
  const title = "बाल कल्याण"
  const desc = "आप जैसे दयालु लोगों से मिले सहयोग के लिए धन्यवाद, हमने वर्षों से अपने बाल कल्याण संस्थानों के माध्यम से सैकड़ों हजारों गरीब बच्चों के जीवन को बदल दिया है। ये संस्थाएं जरूरतमंद बच्चों को आशा सहित जीवन में आगे बढ़ने के लिए आवश्यक सभी चीजें प्रदान करने का प्रयास करती हैं।";


  const righttitle = "बाल कल्याण योजना की शुरूआत";
  const rightdesc = "भारत में, पीड़ा का मूल कारण गरीबी है, जो लाखों लोगों को प्रभावित करती है। वंचित बच्चे, दुर्भाग्य से, उनमें से एक हैं जो गरीबी और उसके परिणामों के कारण कष्ट उठा रहे हैं।";
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
      title : "मुफ्त शिक्षा",
      desc : "विश्व जागृति मिशन के बाल कल्याण कार्यक्रम गरीब और वंचित बच्चों को मुफ्त और उच्च गुणवत्ता वाली शिक्षा प्रदान करने पर ध्यान केंद्रित करते हैं और विद्यार्थियों को पाठ्यक्रम पर आधारित शिक्षा देने के साथ उन्हें, योग, यज्ञ, संगीत, कम्प्यूटर, खेल-कूद, नेतृत्व, मंच संचालन, प्रवचन, संकीर्तन का भी प्रशिक्षण दिया जाता है।      ",
      img: five,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "आहार-पोषण",
      desc : "दिल्ली, सूरत, फरीदाबाद, मुरादाबाद और झारखंड के सभी स्कूल और आश्रम प्रत्येक बच्चे (विश्व जागृति मिशन के विभिन्न संस्थानों में लगभग 5000 बच्चे) को मुफ्त और पौष्टिक भोजन प्रदान करते हैं।      ",
      img: six,
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
      title : "बाल सुरक्षा",
      desc : "बच्चे बिना किसी डर और तनाव के सुरक्षित वातावरण में मुफ्त आश्रयों में रहते हैं।      ",
      img: seven,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "अच्छा स्वास्थ्य",
      desc : "प्रत्येक बच्चे के अच्छे स्वास्थ्य हेतु कोविड-19 के दौरान सभी बच्चों को टीके की पूरी डोज लगवाई गई इसके साथ ही उनके स्वास्थ्य की नियमित जांच की जाती है और समय-समय पर जो टीके उन्हें लगवाएं जाने है उसे निश्चित समयावधि में लगवाया जाता है।      ",
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
    <div className='balkalyaan'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <AboveBottomContainer ServicesArray1={ServicesArray1} ServicesArray2={ServicesArray2}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle2} rightdate={rightdate2} rightdesc={rightdesc2} righttime={righttime2} bannerImg={bannerImg}/>
        <EightyG/>
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default Balkalyaan