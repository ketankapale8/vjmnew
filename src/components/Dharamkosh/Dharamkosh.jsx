import React from 'react';
import './dharamkosh.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg12.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/ManaliMeditation/One.png'
import bannerImgLeft from '../../assets/rishikeshmeditation/Six.png';
import bannerImgLeft2 from '../../assets/GaneshLakshmi/leftimg2.png';
import bannerImgRight2 from '../../assets/GaneshLakshmi/rightimg2.png';

import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import BottomComponent from '../../common/EventPagesCommon/BottomComponent/BottomComponent';

import img1 from '../../assets/rishikeshmeditation/One.png';
import img2 from '../../assets/rishikeshmeditation/two.png';
import img3 from '../../assets/rishikeshmeditation/three.png';
import img4 from '../../assets/rishikeshmeditation/four.png';
import img5 from '../../assets/rishikeshmeditation/five.png';
import EightyG from '../../common/80GBenefits/EightyG';
// import Mahayagya from './MahaYagya/Mahayagya';

const Dharamkosh = () => {
  const title = "धर्मो रक्षति रक्षितः"
  const desc = "हे पाप-पुण्यों का निर्णय करने वाले धर्मराज! मुझ पर तथा मेरे परिवार पर प्रसन्न हों। मेरे श्रद्धा के पुष्प स्वीकार कीजिए। हे प्रभो! आपकी कृपा से प्राप्त देन आपके चरणों में अर्पित करते हैं। मेरे प्रभो! हमें जीवन भर दाता बनाकर रखें, याचक नहीं।";


  const lefttitle = "भंडारा योजना";
  const leftdesc = "भंडारा, एक ऐसी योजना है, जिसमें एक विशेष क्षेत्र में लोगों के बीच पका हुआ भोजन, पौष्टिक पेय और पानी वितरित किया जाता है, जब तत्काल भूख से निपटने की बात आती है तो यह चमत्कार करता है।";
  const leftdate = " "
  const lefttime = ""

  // const lefttitle = "मनाली में 5 दिवसीय मेडिटेशन रिट्रीट";
  // const leftdesc = "मनुष्य रचनात्मक ऊर्जा का एक बंडल है जो सृष्टि के सभी रूपों से जुड़ा हुआ है, ब्रह्मांड के निर्माण से लेकर विचारों की प्राप्ति तक, रिश्तों के निर्माण तक। इस 'शक्ति' को सक्रिय करने के तरीकों में विशिष्ट श्वास व्यायाम, मुद्रा और ध्यान तकनीक शामिल हैं।";
  // const leftdate = "कैम्प 1 : 11 – 15 मई, 2023 | "
  // const lefttime = " कैम्प 2 : 17 – 21 मई, 2023"


  const bottomTitle = "ध्यान साधना शिविर में गहन ध्यान की तकनीकें सीखाई जाएंगी।";
  const bottomDesc = "गहन ध्यान की विभिन्न तकनीकों को करने के लिए जीवनी शक्ति के साथ मन को एकाग्र करें।";
 

  const EventsArray1 = [
    {
      title : "विज़ुअलाइज़ेशन ध्यान",
      desc : "आप जो पाना चाहते हैं, बनना चाहते हैं उसकी कल्पना अपने मन में करें, इसे अपने दिमाग में रखें और इसे वास्तविकता बनाने के लिए खुद को सशक्त बनाएं।",
      img: img1,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "गहरी शांति और जागरूकता",
      desc : "गहरे विश्राम का अनुभव करने के लिए सांस पर ध्यान देना सीखें।",
      img: img2,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },
    {
      title : "मंत्र साधना",
      desc : "एक विशेष मंत्र पर ध्यान केंद्रित करें और आंतरिक शांति और आनंद के रूप में भगवान के आशीर्वाद को प्राप्त करें।      ",
      img: img3,
      date: "19,March,2023",
      city: "Delhi",
      tag: "यज्ञ",
      // share : share,
      // date : '10th October'
    }
  ]
  const EventsArray2 = [
    {
      title : "माइंडफुलनेस मेडिटेशन",
      desc : "जीवन में सोच-समझकर विकल्प चुनकर आंतरिक आनंद और संतुलन पाएं। इसमें कुछ सार्वभौमिक बौद्ध शिक्षाओं को शामिल किया जाएगा।     ",
      img: img4,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "चक्र ध्यान",
      desc : "सातों ऊर्जा के केंद्रों को खोलने और रिचार्ज करने की प्राचीन तकनीक सीखें; आधार से शीर्ष तक सार्वभौमिक ऊर्जा के प्रवाह को महसूस करें।         ",
      img: img5,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },
    // {
    //   title : "यज्ञ",
    //   desc : "दैवीय आशीर्वाद का आह्वान करें. ध्यान शिविर में श्रद्धापूर्वक यज्ञ करें। यह आपके मन, शरीर और आत्मा को शुद्ध करता है और आपको ईश्वर के करीब ले जाता है।          ",
    //   img: img3,
    //   date: "19,March,2023",
    //   city: "Delhi",
    //   tag: "यज्ञ",
    //   // share : share,
    //   // date : '10th October'
    // }
  ]

//   const righttitle1 = "विशेष कार्यक्रम";
//   const rightdesc1 = "एक दिव्य अनुभव को महसूस करें जब पूरा वातावरण पवित्र मंत्रों की ध्वनि से गुंजायमान होता है और ईश्वर का आशीर्वाद प्राप्त होता है।";
//   const rightdate1 = "8 से 9 अक्टूबर, 2022 तक "
//   const righttime1 = "सुबह 8.00 बजे से"

//   const lefttitle1 = "संकल्पित यजमान द्वारा यज्ञ";
//   const leftdesc1 = "यदि आप किसी कारणवश यज्ञ में भाग नहीं ले पा रहे हैं तो संकल्पित यजमान के रूप में भाग लें। गुरुकुल के ऋषिकुमार आपकी ओर से यज्ञ करेंगे, और आपका श्री यंत्र, उपहार और प्रसाद डाक द्वारा भेज दिया जाएगा।";
//   const leftdate1 = " "
//   const lefttime1= ""

const aurJaaneHeadings = [
  {
    title : "",
    desc : [
      {
        one : "",
        two : " ",
        three : "",
        four : " ",
        five : " ",
        six : "",
        seven : " ",
        eight : " "

      }
    ]
  }
]


const aurJaaneHeadings1 = [
  {
    title : "धर्मकोष से दानदाता को पुण्य लाभ-",
    desc : [
      {
        one : "एक बार का दान अनन्त काल तक पुण्य की प्राप्ति।",
        two : " अक्षय कीर्ति का पुण्य फल ",
        three : "पूर्वजों का तारणहार | पीढि़यों को रखेगा हरा-भरा और खुशहाल",
        four : " पारिवारिक जनों की जन्मकुण्डली में रहेगी ग्रहों की अनुकूलता | घर-परिवार, नौकरी-व्यापार में उन्नति प्रगति के लिये गुरुकुल के ऋषिकुमार आश्रम में करेंगे नित्य प्रार्थना",
        five : "गणेश-लक्ष्मी महायज्ञ में पूजित एवं प्राण प्रतिष्ठित सुमेरु श्रीयंत्र उपहार स्वरूप भेंट। स्वर्णाक्षरों में अंकित वंशावलि का द्वादश ज्योतिर्लिगाें का सानिध्य एवं सामीप्य ",
        six : "जन्मदिन, विवाह वर्षगांठ या परिवार के अन्य शुभमंगल अवसर पर सद्गुरु श्रीसुधांशु जी महाराज का शुभकामना संदेश। ",
        seven : " संस्था की गोल्डन बुक में स्वर्णाक्षरों से अंकित होगा दानदाता का नाम। ",
        eight : " "

      }
    ]
  }
]




  return (
    <div className='dharamkosh'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        {/* <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/> */}
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}
          aurJaanetitle1={lefttitle }
          aurJaaneDesc={"भारत की पवित्र धरा देव भूमि है। यहाँ कण-कण में देवी-देवताओं का वास हैं। कहा जाता है भारत का कंकर कंकर शिव शंकर है। भगवान शिव ही हमारे पूज्य गुरुवर के ईष्ट आराध्य हैं। "}
          aurJaaneDesc1={" हमारा सौभाग्य है कि हमें ऐसे महान सद्गरु जी का शिष्य बनने का भगवान शिव ने सौभाग्य प्रदान किया जो स्वयं शिव के समान दयालु हैं और सदैव शिष्यों के कल्याण के लिये प्रभु से प्रार्थनाएं करते हैं।          "}
          aurJaaneDesc2={"  भगवान शिव के ध्यान में निमग्न गुरु महाराज जी के मन में विचार आया कि शिष्यों के लिये कुछ ऐसा किया जाये जिससे उनका लोक और परलोक   दोनों संवर जायें। साथ ही उनके पिछली वंशावली में जो पूर्वज रहे हैं तथा वर्तमान में जो परिवार के सदस्य हैं और आगे आने वाली उनकी पीढि़यों का भी कल्याण हो जाये।          "}
          // aurJaaneDesc3={" इसलिए, विश्व जागृति मिशन गायों को हर संभव तरीके से आश्रय देना सुनिश्चित करता है, उन्हें अपनाता है, उनका जीवन भर पालन-पोषण करता है, उन्हें स्वास्थ्य जांच प्रदान करता है और सबसे महत्वपूर्ण बात यह है कि उन्हें परिवार के सदस्य के रूप में माना जाता है।     "}
         //  aurJaaneDesc4={" लघु चन्द्रायण तप के कार्यक्रम की समय सारिणी - ऑफलाइन भागीदारी (19 मई से 2 जून) "}
           aurJaaneHeadings={aurJaaneHeadings}
       
        />

<LeftImg lefttitle={"गुरुवर का शिवसंकल्प"} leftdate={leftdate} leftdesc={"गुरुवर ने विचार किया कि शिष्यों के कल्याण के निमित्त संस्था द्वारा संचालित अनेकानेक सेवाएं आने वाली सदियों में भी हजारों साल तक निरन्तर चलती रहें और भक्तों के धर्मपुण्य का खाता निरन्तर पीढ़ी दर पीढ़ी बढ़ता रहे इसके लिये ताम्रपत्र बनाया जाये जिसमें दान-दाता की वंशावली स्वर्ण अक्षरों में अंकित की जाये। यह ताम्रपत्र कालपात्र कहलायेगा जो समय बीतने के बाद भी हमेशा-हमेशा के लिये रहेगा और यदि हजारों साल बाद भी कोई देखे तो वहाँ उसे उन दान-दाता धर्मात्मा पुण्यात्माओं का नाम लिखा मिले। "} lefttime={lefttime} bannerImg={bannerImgLeft}
          aurJaanetitle1={"गुरुवर का शिवसंकल्प" }
          aurJaaneDesc={"इस भावना से पूज्य गुरुदेव ने आनन्दधाम आश्रम स्थित द्वादश ज्योर्तिलिंग प्रांगण में दानदाता भक्तों के स्वयं के कल्याण, पूर्वजों के उद्धार और आने वाली पीढि़यों की खुशहाली के लिये ‘धर्मकोष’ की स्थापना का संकल्प लिया।         "}
          // aurJaaneDesc1={" हमारा सौभाग्य है कि हमें ऐसे महान सद्गरु जी का शिष्य बनने का भगवान शिव ने सौभाग्य प्रदान किया जो स्वयं शिव के समान दयालु हैं और सदैव शिष्यों के कल्याण के लिये प्रभु से प्रार्थनाएं करते हैं।          "}
          // aurJaaneDesc2={"  भगवान शिव के ध्यान में निमग्न गुरु महाराज जी के मन में विचार आया कि शिष्यों के लिये कुछ ऐसा किया जाये जिससे उनका लोक और परलोक   दोनों संवर जायें। साथ ही उनके पिछली वंशावली में जो पूर्वज रहे हैं तथा वर्तमान में जो परिवार के सदस्य हैं और आगे आने वाली उनकी पीढि़यों का भी कल्याण हो जाये।          "}
          // aurJaaneDesc3={" इसलिए, विश्व जागृति मिशन गायों को हर संभव तरीके से आश्रय देना सुनिश्चित करता है, उन्हें अपनाता है, उनका जीवन भर पालन-पोषण करता है, उन्हें स्वास्थ्य जांच प्रदान करता है और सबसे महत्वपूर्ण बात यह है कि उन्हें परिवार के सदस्य के रूप में माना जाता है।     "}
         //  aurJaaneDesc4={" लघु चन्द्रायण तप के कार्यक्रम की समय सारिणी - ऑफलाइन भागीदारी (19 मई से 2 जून) "}
           aurJaaneHeadings={aurJaaneHeadings}
       
        />

<LeftImg lefttitle={"धर्मकोष क्या और क्यों"} leftdate={leftdate} leftdesc={" धर्मकोष एक ऐसा कोष है जिसमें दानदाता एक बार में एक निश्चित धनराशि संस्था द्वारा चलाई गईं विभिन्न सेवाओं के लिये दान करेगा, वह राशि दानदाता अपनी सुविधानुसार चार किश्तों में भी दे सकता है।"} lefttime={lefttime} bannerImg={bannerImgLeft}
          aurJaanetitle1={"धर्मकोष क्या और क्यों" }
          aurJaaneDesc={"दानदाता से प्राप्त सहयोग राशि को बैंक में स्थाई रूप से जमा कर दिया जायेगा और उस राशि से प्राप्त ब्याज या अन्य माध्यमों से प्राप्त आय द्वारा विश्व जागृति मिशन की विभिन्न सेवाएं निरन्तर संचालित रहेंगी। धर्मकोष में दी गई यह धन राशि ठीक वैसे ही है जैसे एक बार आम का पेड़ लगाओ और जिन्दगी भर उसके फल खाओ।          "}
          aurJaaneDesc1={" अर्थात् धर्मकोष में एक बार दान दो और उस दान की अर्जित राशि से वर्षों-वर्षाें तक दान देने का पुण्य लाभ पाओ।       "}
          aurJaaneDesc2={"  शुभारंभ---- अनन्त का अन्त कहां-  इस धर्मकोष में दान देने वाले भक्त के नाम के साथ उसकी वंशावली का नाम का कालपात्र में स्वर्णाक्षरों में अंकित कर उसे द्वादश ज्योति²लग प्रांगण में अक्टूबर 2022 में आयोजित गणेश-लक्ष्मी महायज्ञ के शुभ अवसर पर स्थापित किया गया। ऐसा ही इसबार शिवरात्री के अवसर पर किया जा रहा है और आगे भी संस्था द्वारा मनाये जाने वाले पर्वों के शुभ मुहूर्त में यह कालपात्र स्थापित किये जाते रहेंगे।   "}
          aurJaaneDesc3={" इसलिए, विश्व जागृति मिशन गायों को हर संभव तरीके से आश्रय देना सुनिश्चित करता है, उन्हें अपनाता है, उनका जीवन भर पालन-पोषण करता है, उन्हें स्वास्थ्य जांच प्रदान करता है और सबसे महत्वपूर्ण बात यह है कि उन्हें परिवार के सदस्य के रूप में माना जाता है।     "}
          aurJaaneDesc4={" लघु चन्द्रायण तप के कार्यक्रम की समय सारिणी - ऑफलाइन भागीदारी (19 मई से 2 जून) "}
           aurJaaneHeadings={aurJaaneHeadings1}
       
        />
        {/* <BottomComponent title={bottomTitle} desc={bottomDesc} EventsArray1={EventsArray1} EventsArray2={EventsArray2}/> */}
        {/* <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}/> */}
        <EightyG/>
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default Dharamkosh