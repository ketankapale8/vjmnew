import React from 'react';
import './mahashivratri.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg15.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/mahashivratri/One.png';
import bannerImgLeft from '../../assets/mahashivratri/Two.png';
import bannerImgLeft2 from '../../assets/mahashivratri/Three.png';
import bannerImgRight2 from '../../assets/mahashivratri/Four.png';
import bannerImgRight3 from '../../assets/mahashivratri/Five.png';
import bannerImgRight4 from '../../assets/mahashivratri/Six.png';
import bannerImgRight5 from '../../assets/mahashivratri/Seven.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import CommonGyaan from '../../common/CommonGyaanFromHome/CommonGyaan';


import img1 from '../../assets/commongyaan/One.png'
import img2 from '../../assets/commongyaan/Two.png'
import img3 from '../../assets/commongyaan/Three.png'
import share from '../../assets/articles/share.png'

// import Mahayagya from './MahaYagya/Mahayagya';

const Mahashivratri = () => {
  const title = "108 कुण्डिया श्री गणेश लक्ष्मी महायज्ञ – 2022"
  const desc = "पर्यावरण शुद्धि, दीर्घायु, समृद्धि, वैश्विक शांति और ईश्वरीय कृपा प्राप्ति के लिएश्री गणेश लक्ष्मीमहायज्ञ की शुरुआत परम पूज्य सद्गुरु श्री सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी ने की।";


  const righttitle = "शिव-शक्ति महाध्यान";
  const rightdesc = "शिव-शक्ति महाध्यान, ध्यान की गहन तकनीक है जिसमें साधक अपनी संपूर्ण आध्यात्मिक ऊर्जा को भगवान शिव पर केंद्रित करने का प्रयास करते हैं।";
  const rightdate = "आश्रम परिसर में : 17 फरवरी - सुबह 8 बजे | शाम 4 बजे , 18 फरवरी - सुबह 8 बजे| 19 फरवरी - सुबह 8 बजे  "
  const righttime = "ऑनलाइन :18 फरवरी - सुबह 8 बजे | शाम 4 बजे , 19 फरवरी - सुबह 8 बजे | 20 फरवरी - सुबह 8 बजे"

  const lefttitle = "वैभव लक्ष्मी साधना / वरदान सिद्धि साधना";
  const leftdesc = "देवी लक्ष्मी को समर्पित, वैभव लक्ष्मी साधना या वरदान सिद्धि साधना एक विशेष भेंट और ध्यान तकनीक है जो भक्तों को वित्तीय परेशानियों से राहत दिलाने और जीवन में सही ढंग से समृद्धि लाने में मदद करती है।";
  const leftdate = "08 और 09 अक्टूबर 2022 "
  const lefttime = "प्रातः 8.00 बजे से"


  const righttitle1 = "शिव-शक्ति कृपा यज्ञ";
  const rightdesc1 = "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः। अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् II";
  const rightdate1 = "ब्रह्मांड के निर्माण की शुरुआत में, भगवान ब्रह्मा ने मनुष्यों को बनाया और कहा कि तुम यज्ञों को करो और फलो-फूलो, क्योंकि ये तुम्हें वह सब प्रदान करेंगे जो तुम पाना चाहते हो।"
  const righttime1 = ""

  const lefttitle1 = "12 ज्योतिर्लिंग स्थानम का लोकार्पण";
  const leftdesc1 = "12 ज्योतिर्लिंग भगवान शिव के सबसे सुंदर और दिव्य रूप हैं। इन्हें द्वादश ज्योतिर्लिंग के रूप में भी जाना जाता है, ये भगवान शिव के भक्तों के लिए सबसे पवित्र पूजा स्थल हैं। कर्म बंधन एवं जीवन और मृत्यु के चक्र से मुक्त होने के लिए भक्त उनके पास जाते हैं।";
  const leftdate1 = "आनंद धाम आश्रम में, महाशिवरात्रि के पावन अवसर पर परम पूज्य श्री सुधांशु जी महाराज और डॉ. अर्चिका दीदी द्वारा भगवान शिव की असीमता के इन द्वादश ज्योतिर्लिंगों के सुंदर स्थान का लोकार्पण किया जाएगा। "
  const lefttime1= ""

  const righttitle2 = "125,000 पार्थिव शिवलिंग का निर्माण।";
  const rightdesc2 = "28 जनवरी 2023 से 21 दिनों तक पार्थिव शिवलिंगों के सृजन में भाग लेने के लिए आएं। यह सृजन 108 पुजारियों द्वारा पवित्र मंत्रों ओम नमः शिवाय और महामृत्युंजय मंत्र के सार्वभौमिक जाप के बीच होगा।"
  const rightdate2 = "पार्थिव शिवलिंगों के सृजन में शामिल होने के लिए साधकों और भगवान शिव भक्तों का स्वागत है।"
  const righttime2 = ""

  const ArticleArray = [
    {
      title : "भक्ति गीत और सत्संग",
      desc : "कुछ समय के लिए बाहरी दुनिया के लिए सभी दरवाजे बंद कर दें और भगवान शिव और उनकी शिक्षाओं के बारे में आध्यात्मिक प्रवचन और भक्ति गीत सुनें जो जीव आत्मा को ऊपर उठाने के लिए हैं। प्रवचनों के माध्यम से, अपने मन को ध्यान, निःस्वार्थ सेवा और भगवान शिव के साथ आत्मा के संवाद करने के महत्व पर फिर से ध्यान केंद्रित करें।",
      desc1: "हमसे जुड़ें लाइव स्ट्रीमिंग : 18 फरवरी, शाम 4 बजे और 19 फरवरी, दोपहर 12 बजे",
      img: img1,
      tag : "",
    //   date: "15,Feb,2023",
    //   city: "Bhopal",
    //   tag : "Article",
    //   share : share,
      // date : '12th March'
    },
    {
      title : "शोभा यात्रा",
      desc : "महाशिवरात्रि अपने साथ शिष्यों और साधकों के लिए गुरु दर्शन का एक सुखद अवसर लेकर आती है, इस अवसर पर शोभा यात्रा निकाली जाती है, इस यात्रा में परम पूज्य सद्गुरु श्री सुधांशु जी महाराज और डॉ. अर्चिका दीदी के साथ हर कोई शामिल होता है। आनंदधाम आश्रम में इस दिव्य उत्सव को मनाने के लिए भारत और विदेश से एकत्रित हुए भगवान शिव के उत्साही भक्तों द्वारा भक्ति गीत गाए जाएंगे।          ",
      desc1 : " हमसे जुड़ें : लाइव स्ट्रीमिंग (19 फरवरी, सुबह 9:30 बजे)",
      img: img2,
    //   tag: "",
    //   date: "23,May,2023",
    //   city: "Delhi",
    //   tag : "Video",
    //   share : share,
      // date : '10th February'
    },
    {
      title : " महाआरती",
      desc : "प्राचीन वैदिक अनुष्ठानों से निकली, आरती का आध्यात्मिकता के विज्ञान में एक विशेष स्थान है। यह भगवान के प्रति अपनी भक्ति और कृतज्ञता अर्पित करने का एक अनुष्ठान है। जब भक्त आरती करते हैं तो उनके सातों चक्र भी शुद्ध और सक्रिय होते हैं। आपको हजारों मिट्टी के दीयों के साथ महाआरती में भाग लेने के लिए आमंत्रित किया जाता है।",
      
      desc1 : "हमसे जुड़ें : लाइव स्ट्रीमिंग (शाम 4 से 7 बजे) पर",
      img: img3,
    //   date: "19,March,2023",
    //   city: "Delhi",
    //   tag: "Article",
    //   share : share,
      // date : '10th October'
    }, 

    {
      title : "शिवरात्रि",
      desc : "सांस्कृतिक गतिविधियों का एक गुंजायमान कार्यक्रम जिसमें भगवान शिव के भक्त खुशी में नाचेंगे और भोलेनाथ को प्रसन्न करने के लिए भावपूर्ण भक्ति गीत भी गाएंगे। भक्ति संगीतमय संध्या परम पूज्य सद्गुरु श्री सुधांशु जी महाराज और दीदी जी का विशेष प्रवचन| मध्यरात्रि मंत्र जप और पूजन|",
      
      desc1 :" लाइव परफॉर्मेंस :18 फरवरी 2023 समय: शाम 4 बजे से 7 बजे तक , रात 10 बजे से 12 बजे तक",
      
      img: img3,
    //   date: "19,March,2023",
    //   city: "Delhi",
    //   tag: "Article",
    //   share : share,
      // date : '10th October'
    }, 
    
      
    
  ]

  const commongyaantitle = "भगवान शिव का अद्भुत वातावरण";
  const commongyaandesc = "भगवान शिव का दर्शन अलौकिक है और उनके भक्त अद्वितीय हैं। सांसारिकता के प्रति उनका दृष्टिकोण असाधारण है। उनका रहन-सहन और परम योगी के प्रति लगाव अत्यंत आकर्षक है। वे प्राकृतिक साधक हैं और महाशिवरात्रि इन सभी भक्तों के लिए एक गुरु के सानिध्य में अथाह भक्ति की ओर जाने का सही अवसर अवसर प्रदान करती है।"


  const righttitle3 = "महाशिवरात्रि(ऑनलाइन)";
  const rightdesc3 = "महाशिवरात्रि पर, ऑनलाइन ध्यान सत्र के माध्यम से भगवान शिव और देवी पार्वती का आशीर्वाद लें। संकल्पित यजमान सौभाग्यशाली होंगे कि वे तीन दिनों के सभी छह शुभ ध्यान सत्रों में भाग लेंगे। वहीं आश्रम में ऋषिकुमार उनकी ओर से रुद्राभिषेक और महायज्ञ भी करेंगे। संकल्पित यजमानों की तस्वीरें शिव-शक्ति कृपा यज्ञ साइट, वेबसाइट और विभिन्न सोशल मीडिया प्लेटफॉर्म पर प्रदर्शित की जाएंगी।";
  const rightdate3 = " "
  const righttime3 = ""

  const lefttitle3 = "आनंद धाम आश्रम में महाशिवरात्रि (ऑफलाइन)";
  const leftdesc3 = "कुछ सौभाग्यशाली भक्तों को आनंदधाम आश्रम परिसर में महाराजश्री के साथ कुछ समय बिताने का अवसर प्राप्त होगा। शिवरात्रि पर्व के लिए विशेष कार्यक्रम तैयार किए गए हैं, जिनमें ध्यान सत्र, प्रार्थना, रुद्राभिषेक, शिव महायज्ञ और देव दर्शन शामिल हैं।";
  const leftdate3 = "17 फरवरी - 19 फरवरी 2023"
  const lefttime3= ""


  const righttitle4 = "मुख्य महा शिवरात्रि महोत्सव";
  const rightdesc4 = "सीमित स्थान शेष-आज ही अपनी बुकिंग कराएं।शिव-शक्ति महाध्यान (सुबह 8 बजे से) 1.25 लाख पार्थिव शिवलिंग रुद्राभिषेक और पूजन सुबह 9:30 बजे से";
  const righttime4 = "शिव-शक्ति कृपा यज्ञ (सुबह 10:30 बजे से)";
  const rightdate4 = "संगीत संध्या व सत्संग (शाम 4 बजे से)"

  return (
    <div className='ganeshlakshmi'>
        <HeaderImgC img={BannerImg}/>
        {/* <TitlePage title={title} desc={desc}/> */}
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgRight3}/>
        <RightImg righttitle={righttitle2} rightdate={rightdate2} rightdesc={rightdesc2} righttime={righttime2} bannerImg={bannerImgLeft2}/>
        <CommonGyaan ArticleArray={ArticleArray} commongyaantitle={commongyaantitle} commongyaandesc={commongyaandesc}/>
        <RightImg righttitle={righttitle3} rightdate={rightdate3} rightdesc={rightdesc3} righttime={righttime3} bannerImg={bannerImgRight4}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgRight5}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default Mahashivratri