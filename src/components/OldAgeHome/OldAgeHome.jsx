import React from 'react';
import './oldagehome.scss';
import HeaderVideoComp from '../../common/HeaderVideoComponent/HeaderVideoComp';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import video from '../../assets/video/ViridhAshram.mp4'
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


  const aurJaaneHeadings = [
    {
      title : "बुजुर्गों को प्रदान की जाने वाली सुविधाएं: विश्व जागृति मिशन बुजुर्गों को स्वाभिमान के साथ जीने में मदद कर उन्हें सशक्त बनाता है। मिशन उन्हें गरीबी और लाचारी से बाहर निकालने के लिए संसाधनों की व्यवस्था करता है। जो गरीब हैं, परित्यक्त हैं, जिनके पास कहीं और जाने का स्थान नहीं है या जो अपनी इच्छा से वृद्धाश्रम में रहना चाहते हैं, हमारे वृद्धाश्रम में इन सभी लोगों के लिए एक आरामदायक और सुरक्षित आश्रय सुनिश्चित किया जाता है।  ",
      desc : [
        {
          one : "हाउस कीपिंग सुविधाएं -हमारे पास पेशेवर रूप से प्रशिक्षित, विनम्र हाउसकीपिंग स्टाफ है जो सिर्फ हाउसकीपिंग ही नहीं करते अपितु बुजुर्गों की देखभाल करने में भी अनुभवी है।             वे सामान्य क्षेत्रों की स्वच्छता बनाने के साथ-साथ स्वच्छता के उच्चतम मानक स्थापित करने के लिए भी प्रतिबद्ध हैं।  ",
          two : "चिकित्सकीय सुविधाएं  -  हमारे स्वास्थ्य केंद्र में सभी दवाएं उपलब्ध रहती है और हमारा स्वास्थ्य केंद्र  आपात स्थितियों के लिए हर समय तैयार रहता है। आवश्यक देखभाल करने वाले कर्मचारी चौबीसों घंटे व्यक्तिगत रूप से देखभाल करते हैं, चिकित्सा आवश्यकताओं की पूर्ति और फिजियोथेरेपी आदि करवाने में उनकी सहायता करते हैं और उन्हें अभिप्रेरित भी करते रहते हैं।",
          three : "हमारी अपनी एंबुलेंस है।  24×7 मेडिकल और नर्सिंग स्टाफ है। आपातकालीन देखभाल उपकरण उपलब्ध है। फिजियोथेरेपी करवाई जाती है और वृद्धजनों की व्यक्तिगत देखभाल भी की जाती है। व्हील चेयर की सुविधा उपलब्ध है।  समय-समय पर उनकी चिकित्सा जांच की जाती है। पास के मल्टी स्पेशियलिटी अस्पताल के साथ हमारा संबंध है, आवश्यकता पड़ने पर उनकी सहायता ली जाती है।",
          four : "भोजन और आहार योजना - सही समय पर सही भोजन करने से हम स्वस्थ और मजबूत बनते हैं। इस आयु  में हमारे बुजुर्गों को स्वस्थ और संतुलित आहार की आवश्यकता होती है, जिसमें सभी पोषक तत्व पर्याप्त मात्रा में मौजूद हों। हम वृद्धजनों की सभी आहार संबंधी आवश्यकताओं का ध्यान रखते हैं। अनुभवी व्यक्ति के मार्गदर्शन और देखरेख में अच्छी तरह से सुसज्जित रसोईघर है। वृद्धजनों की पसंद के अनुसार व्यंजन तैयार किए जाते हैं। खाना पकाने का काम साफ-सुथरे तरीके से किया जाता है।  ",
          five : " मनोरंजक गतिविधियां -  मिशन में हम वृद्धजनों को उनके पसंद की गतिविधियों में सक्रिय भागीदार बनने के लिए प्रोत्साहित करते हैं ताकि वे अपने तनाव और अकेलेपन को दूर करने में सक्षम हों। बुजुर्गों की देखभाल करने का सबसे महत्वपूर्ण तरीका है उन्हें प्यार करना और उन्हें सक्रिय रखना। यहां हम उन्हें मनोरंजक गतिविधियों जैसे            इंडोर गेम खेलना, सोशल मीडिया, पिकनिक, योग कार्यक्रम की मदद से खुद को बाहरी दुनिया से जोड़कर उन्हें तंदुरुस्त और स्वस्थ बनाने की बेहतरीन सुविधाएं प्रदान करते हैं।",
          six : "कुछ प्रमुख सुविधाएं हैं: -मिनी थियेटर, इंडोर गेम्स/आउटडोर गेम्स। योग और ध्यान। ऑडिटोरियम/एम्फीथिएटर। समाचार पत्र और पत्रिकाएँ। ",
          seven : "सुरक्षा सुविधाएं - सुरक्षा और संरक्षण प्रदान करना प्रबंधन की एक महत्वपूर्ण जिम्मेदारी है, वृद्धजनों को सुरक्षित वातावरण प्रदान करने के लिए मिशन सभी सुरक्षा और संरक्षा सुविधाओं से सुसज्जित है। 24×7 सुप्रशिक्षित सुरक्षा गार्ड।  पूरे परिसर की सीसीटीवी कवरेज।  इंटरकॉम सुविधा। ",
          eight : " "
  
        }
      ]
    }
  ]




  return (
    <div className='oldagehome'>
        <HeaderVideoComp title={'हमारे वृद्धाश्रम'} desc={''}  video={video}/>
        {/* <HeaderImgC img={BannerImg}/> */}
        <TitlePage title={title} desc={desc}/>
        <AboveBottomContainer ServicesArray1={ServicesArray1} ServicesArray2={ServicesArray2}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}
                   aurJaanetitle1={righttitle}
                   aurJaaneDesc={" हमारे देश में, एक निश्चित आयु तक पहुँचने पर बहुत से बुजुर्गों के लिए जीवन बहुत कठिन हो जाता है। उन्हें अपनों के प्यार और स्नेह की कमी होती है। यदि वे बिना किसी आय के स्रोत के गरीब हैं तो स्थिति और भी खराब हो सकती है। वे मानसिक तनाव, आघात और कभी-कभी अपने ही परिवारों द्वारा परित्यक्त का सामना करते हैं। वे अंत में अकेले रहते हैं,  भूखे मरते हैं और सबसे बुरी स्थिति में, उनके पास कोई विकल्प नहीं बचता है। इन लोगों को आमतौर पर सामाजिक रूप से बहिष्कृत किया जाता है। बेहद खराब जीवन स्थितियों में जीवित रहने, या किसी असाध्य बीमारी के कारण सामाजिक कलंक जैसे कारणों से उन्हें बेहद कठिन परिस्थितियों का सामना करना पड़ता है। पारिवारिक मूल्यों और आर्थिक कारकों में भारी परिवर्तन के कारण वृद्ध नागरिक घरेलू हिंसा और उपेक्षा के शिकार हो जाते हैं।     ऐसे बुजुर्गों को अच्छा जीवन जीने के लिए भोजन, चिकित्सा देखभाल, स्वच्छता, आजीविका संसाधनों आदि में मदद की आवश्यकता होती है।              "}
                   aurJaaneDesc1={" राष्ट्रीय सांख्यिकी कार्यालय (एनएसओ) की भारत में बुजुर्ग 2021 की रिपोर्ट के अनुसार, देश की बुजुर्ग आबादी (60 वर्ष और उससे अधिक) के 2021 में 138 मिलियन से 2031 में 194 मिलियन को छूने का अनुमान है, इस प्रकार एक दशक में इसमें  41% की वृद्धि होगी।   विश्व जागृति मिशन ने दिल्ली के आनंदधाम आश्रम में अपना पहला वृद्धाश्रम खोला  है। विश्व जागृति मिशन ऐसे सभी जरूरतमंद बुजुर्गों को अपने वृद्धाश्रम में लाने और उन्हें सामान्य जीवन जीने के लिए पर्याप्त सहायता प्रदान करने का प्रयास करता है।                       "}
                   aurJaaneDesc2={"विश्व जागृति मिशन में,  हम वरिष्ठ नागरिकों के साथ ऐसे सम्मान और गरिमा के साथ व्यवहार करना सुनिश्चित करते हैं जिसके वे हकदार हैं। हम समाज में उनकी महत्वपूर्ण भूमिका को समझाने में उनकी मदद करते हैं। जब वरिष्ठ नागरिकों की सहायता करने की बात आती है तो विश्व जागृति मिशन कोई कसर नहीं छोड़ता।"}
                   aurJaaneDesc4={" उपयोगी कड़ियां - दान |  गोपनीयता नीति | नियम और शर्तें     "}
            
                   aurJaaneDesc5={"    "}
                   aurJaaneDesc6={""}
                   aurJaaneDesc7={" "}
                   aurJaaneHeadings={aurJaaneHeadings}
        
        
        />
        {/* <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImg1}/> */}
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