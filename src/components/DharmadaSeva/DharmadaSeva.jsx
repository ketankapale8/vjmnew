import React from 'react';
import './dharmadaseva.scss';
import donationCommonImg from '../../assets/donationCommon/left.png'
import video from '../../assets/video/Video.mp4';
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
import HeaderVideoComp from '../../common/HeaderVideoComponent/HeaderVideoComp';
import DonationCommon from '../../common/DonationCommon/DonationCommon';
import CircleBasedComp from '../../common/CircleBasedComponent/CircleBasedComp';

import one from '../../assets/dharmadaseva/1.png'
import two from '../../assets/dharmadaseva/2.png'
import three from '../../assets/dharmadaseva/3.png';

import four from '../../assets/dharmadaseva/4.png'
import five from '../../assets/dharmadaseva/5.png'
import six from '../../assets/dharmadaseva/6.png';

import seven from '../../assets/dharmadaseva/7.png'
import eight from '../../assets/dharmadaseva/8.png'
import nine from '../../assets/dharmadaseva/9.png';

import ten from '../../assets/dharmadaseva/10.png'
import eleven from '../../assets/dharmadaseva/11.png'
import twelve from '../../assets/dharmadaseva/12.png';
// import Mahayagya from './MahaYagya/Mahayagya';

const DharmadaSeva = () => {
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

const Array1 = [
  {
    title : "अनाथ शिक्षा एवं संरक्षण",
  //   desc : "गरीबों को शिक्षित करने, गौ सेवा, गरीब रोगियों के लिए स्वास्थ्य सेवा, भंडारा और बुजुर्गों की देखभाल के लिए अपनी कमाई का 2-10% अंशदान करके, अपने जीवन में ईश्वर की कृपा, शांति और समृद्धि को प्राप्त करें।",
    img: one,
    tag : "",
    date: "15,Feb,2023",
    city: "Bhopal",
    tag : "सत्संग",
    // share : share,
    // date : '12th March'
  },
  {
    title : "अनाथ शिक्षा एवं संरक्षण",
  //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
    img: two,
    tag: "",
    date: "23,May,2023",
    city: "Delhi",
    tag : "पूर्णिमा",
    // share : share,
    // date : '10th February'
  },
  {
      title : "रोगीजनों का उपचार",
    //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
      img: three,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

]
const Array2 = [
  {
    title : "वैदिक शिक्षा",
  //   desc : "गरीबों को शिक्षित करने, गौ सेवा, गरीब रोगियों के लिए स्वास्थ्य सेवा, भंडारा और बुजुर्गों की देखभाल के लिए अपनी कमाई का 2-10% अंशदान करके, अपने जीवन में ईश्वर की कृपा, शांति और समृद्धि को प्राप्त करें।",
    img: four,
    tag : "",
    date: "15,Feb,2023",
    city: "Bhopal",
    tag : "सत्संग",
    // share : share,
    // date : '12th March'
  },
  {
    title : "वृद्धजन सेवा",
  //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
    img: five,
    tag: "",
    date: "23,May,2023",
    city: "Delhi",
    tag : "पूर्णिमा",
    // share : share,
    // date : '10th February'
  },
  {
      title : "अन्नदान- भण्डारा सेवा",
    //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
      img: six,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

]
const Array3 = [
  {
    title : "यज्ञ एवं सत्संग में सहयोग",
  //   desc : "गरीबों को शिक्षित करने, गौ सेवा, गरीब रोगियों के लिए स्वास्थ्य सेवा, भंडारा और बुजुर्गों की देखभाल के लिए अपनी कमाई का 2-10% अंशदान करके, अपने जीवन में ईश्वर की कृपा, शांति और समृद्धि को प्राप्त करें।",
    img: seven,
    tag : "",
    date: "15,Feb,2023",
    city: "Bhopal",
    tag : "सत्संग",
    // share : share,
    // date : '12th March'
  },
  {
    title : "मंदिर निर्माण",
  //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
    img: eight,
    tag: "",
    date: "23,May,2023",
    city: "Delhi",
    tag : "पूर्णिमा",
    // share : share,
    // date : '10th February'
  },
  {
      title : "रक्तदान",
    //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
      img: nine,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

]

const Array4 = [
  {
    title : "अतिनिर्धन कन्या विवाह",
  //   desc : "गरीबों को शिक्षित करने, गौ सेवा, गरीब रोगियों के लिए स्वास्थ्य सेवा, भंडारा और बुजुर्गों की देखभाल के लिए अपनी कमाई का 2-10% अंशदान करके, अपने जीवन में ईश्वर की कृपा, शांति और समृद्धि को प्राप्त करें।",
    img: ten,
    tag : "",
    date: "15,Feb,2023",
    city: "Bhopal",
    tag : "सत्संग",
    // share : share,
    // date : '12th March'
  },
  {
    title : "दैविक आपदा बाढ़-भूकम्प आदि राहत कार्य",
  //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
    img: eleven,
    tag: "",
    date: "23,May,2023",
    city: "Delhi",
    tag : "पूर्णिमा",
    // share : share,
    // date : '10th February'
  },
  {
      title : "गरीब छात्रें को छात्रवृत्ति",
    //   desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
      img: twelve,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

]

const Array5 = [
  {
    title : "दाता",
   desc : "एक वर्ष के लिए 1000/- रूपए या उससे अधिक का योगदान देने पर दान दाता को डोनर कार्ड, श्री लक्ष्मी गणेश यंत्र और एक डायरी भी दी जाती है।   ",
    img: ten,
    tag : "",
    date: "15,Feb,2023",
    city: "Bhopal",
    tag : "सत्संग",
    // share : share,
    // date : '12th March'
  },
  {
    title : "वार्षिक उपहार",
    desc : "एक वर्ष के लिए 500/- रूपए या अधिक का योगदान देने पर दान दाता को श्री लक्ष्मी गणेश यंत्र दिया जाता है।     ",
    img: eleven,
    tag: "",
    date: "23,May,2023",
    city: "Delhi",
    tag : "पूर्णिमा",
    // share : share,
    // date : '10th February'
  },
  {
      title : "सकारात्मक परिवर्तन लाने वालों का एक समूह",
     desc : "पूरे भारत और विदेश से आए दयालु आत्माओं के एक समूह का हिस्सा बनें जो समाज में सकारात्मक बदलाव के लिए प्रयास कर रहे हैं।       ",
      img: twelve,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

]





  return (
    <div className='dharmadaseva'>
        <HeaderVideoComp title={'धर्मादा सेवा'} desc={'प्रीयतां धर्मराजाय, त्वदीयं वस्तु, गोविन्दं तुभ्यमेव समर्पये।'} video={video}/>
        <DonationCommon title={'अपनी कमाई का दो से दस प्रतिशत दान करना'} desc={'हे पाप-पुण्यों का निर्णय करने वाले धर्मराज! मुझ पर तथा मेरे परिवार पर प्रसन्न हों। मेरे श्रद्धा के पुष्प स्वीकार कीजिए। हे प्रभो! आपकी कृपा से प्राप्त देन आपके चरणों में अर्पित करते हैं। मेरे प्रभो! हमें जीवन भर दाता बनाकर रखें, याचक नहीं।'} img={donationCommonImg}/>
        <CircleBasedComp title={'अपनी कमाई का दो से दस प्रतिशत दान करें।'} desc={''} Array1={Array1} Array2={Array2} Array3={Array3} Array4={Array4}/>
        <CircleBasedComp title={'शास्त्रों में इन स्थानों पर दान विशेष पुण्यकारी बतलाया गया है'}  Array1={Array5} Array2={[]} Array3={[]} Array4={[]}/>
        {/* <HeaderImgC img={BannerImg}/> */}
        {/* <TitlePage title={title} desc={desc}/> */}
        {/* <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/> */}
        {/* <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/> */}
        {/* <BottomComponent title={bottomTitle} desc={bottomDesc} EventsArray1={EventsArray1} EventsArray2={EventsArray2}/> */}
        {/* <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}/> */}
        <EightyG/>
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default DharmadaSeva