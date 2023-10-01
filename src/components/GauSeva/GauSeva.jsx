import React from 'react';
import './gauseva.scss';
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

import five from '../../assets/balkalyaan/five.png'
import six from '../../assets/balkalyaan/six.png'
import seven from '../../assets/balkalyaan/seven.png'
import eight from '../../assets/balkalyaan/eight.png'

// import Mahayagya from './MahaYagya/Mahayagya';

const Gauseva = () => {
  const title = "गौसेवा"
  const desc = "हमारी संस्कृति में गाय को संपूर्ण विश्व की माता माना गया है। हमारे धर्म ग्रंथों में गाय की छाया को भी शुभ माना गया है तथा गाय के अंगों में संपूर्ण देवी-देवताओं का निवास बताया गया है। यात्रा के समय गौ माता का दर्शन सुखद यात्रा के लिए अति लाभकारी माना जाता है। धर्म, अर्थ, काम व मोक्ष - ये सभी चार पुरूषार्थ हैं जिनके लिए मनुष्य आजीवन लगा रहता है। गौमाता की सेवा से मनुष्य को चारों पुरूषार्थों की उपलब्धि में सहायता मिलती है और यही मनुष्य के जीवन का लक्ष्य है।";


  const righttitle = "गौशाला";
  const rightdesc = "हिंदू धर्म में गाय को पूजनीय स्थान प्राप्त है। बड़े से बड़ा कष्ट भी सिर्फ गौ माता की सेवा करने से दूर हो जाता है। गाय में 33 कोटि देवी-देवताओं का वास होता है। मान्यता है कि गाय की सेवा करने से जहां सभी देवी-देवता प्रसन्न होते हैं, वहीं घर में सुख-समृद्धि और अच्छे स्वास्थ्य का वरदान मिलता है। इतना ही नहीं, गाय की सेवा से कुंडली के सभी दोष दूर हो जाते हैं।";
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
      title : "गाय या बछड़ा गोद लें",
      desc : "प्राचीन काल से ऋषि मुनि गौसेवा करके अपना जीवन सार्थक कर रहे हैं। हमें भी गौ सेवा अवश्य करनी चाहिए जिससे हमारा जीवन सार्थक हो। प्रति वर्ष एक गाय के लिए मात्र 11,000/- रूपए का दान करके गौशाला से गाय या बछड़े को गोद लें।      ",
      img: five,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "गऊ ग्रास सेवा",
      desc : "पहले के समय में हम घर के पास की गौशालाओं में अपने घर की प्रथम रोटी को भेजते थे और हम सब खुशहाल रहते थे, धीरे-धीरे हम गौ माता के प्रति जिम्मेवारी को भूलने लगे हैं, जिसकी वजह से हमें काफी चुनौतियों का सामना करना पड़ रहा है।      ",
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
      title : "आवास व्यवस्था",
      desc : "गौमाता की मूलभूत आवश्यकताओं में से एक है उनके लिए आवास की व्यवस्था करना, हम बेहतर सुविधाओं के साथ गौमाता के लिए आवास बना रहें हैं, आप भी इस पुण्य कार्य में सहभागी बनें।      ",
      img: seven,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "चिकित्सा देखभाल",
      desc : "गौ माता के अच्छे स्वास्थ्य के लिए दवाओं और टीकाकरण की व्यवस्था में दान-सहयोग राशि देकर गउओं को स्वस्थ रखने में हमारी मदद करें।      ",
      img: eight,
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
      img: five,
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
      title : "गोदान",
      desc : "गोदान से बढ़कर कुछ भी नहीं है। यदि श्रद्धापूर्वक गौ का दान किया जाय तो वह समस्त कुल का तत्काल उद्धार कर देती है। गोदान करने से जीवन की सभी बाधाएं दूर होती हैं। अपने जन्मदिन/शादी की सालगिरह या अपनी पसंद के किसी भी शुभ दिन पर गोदान करें।      ",
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
    <div className='gauseva'>
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

export default Gauseva