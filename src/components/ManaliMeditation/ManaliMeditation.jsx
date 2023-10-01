import React from 'react';
import './manalimeditation.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg3.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/ManaliMeditation/One.png'
import bannerImgLeft from '../../assets/ManaliMeditation/Two.png';
import bannerImgLeft2 from '../../assets/GaneshLakshmi/leftimg2.png';
import bannerImgRight2 from '../../assets/GaneshLakshmi/rightimg2.png';

import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import BottomComponent from '../../common/EventPagesCommon/BottomComponent/BottomComponent';

import img1 from '../../assets/EventsPage/Bhakti.jpg';
import img2 from '../../assets/EventsPage/poornima.jpg';
import img3 from '../../assets/EventsPage/Yagya.jpg';
// import Mahayagya from './MahaYagya/Mahayagya';

const ManaliMeditation = () => {
  const title = "परम पूज्य सुधांशु जी महाराज और डॉ. अर्चिका दीदी के साथ (19 मई से 4 जून तक)"
  const desc = "अपने मन को शांत करें, अपने आप से मित्रता करें, अपने चारों ओर एक सुरक्षा कवच बनाएं, अपने जीवन के नए आयामों का पता लगाएं और अपने मौन का उपयोग आत्म-परिवर्तन के लिए करें।";


  const righttitle = "लघु चंद्रायन ध्यान साधना";
  const rightdesc = "इस 15 दिवसीय सत्र में पहली बार गायत्री मंत्र ध्यान सिखाया जाएगा। गायत्री मंत्र हमारी बुद्धि को प्रकाशित करने के लिए समर्पित एक प्रार्थना है। यह हमें ज्ञान प्रदान करता है।";
  const rightdate = "(आनंदवर्धन रिसॉर्ट्स में 15 दिवसीय ध्यान साधना)  "
  const righttime = "ऑफलाइन: 19 मई से 2 जून तक | ऑफलाइन: 19 मई से 2 जून तक"

  const lefttitle = "मनाली में 5 दिवसीय मेडिटेशन रिट्रीट";
  const leftdesc = "मनुष्य रचनात्मक ऊर्जा का एक बंडल है जो सृष्टि के सभी रूपों से जुड़ा हुआ है, ब्रह्मांड के निर्माण से लेकर विचारों की प्राप्ति तक, रिश्तों के निर्माण तक। इस 'शक्ति' को सक्रिय करने के तरीकों में विशिष्ट श्वास व्यायाम, मुद्रा और ध्यान तकनीक शामिल हैं।";
  const leftdate = "कैम्प 1 : 11 – 15 मई, 2023 | "
  const lefttime = " कैम्प 2 : 17 – 21 मई, 2023"


  const bottomTitle = "गहन ध्यान सत्र";
  const bottomDesc = "मानव शरीर कष्ट और दर्द का सामना करने के लिए नहीं बना है। लेकिन बिन बुलाए भावनाएँ और तनावपूर्ण स्थितियाँ विषाक्त पदार्थों की तरह काम करती हैं जो आपके शरीर की प्राकृतिक लय में गड़बड़ी पैदा करती हैं। ध्यान के माध्यम से अपने शरीर को संतुलित स्थिति में रखें और खुशी प्राप्त करें जो जीवन का एकमात्र उद्देश्य है। गहन ध्यान तकनीक और क्रियाएं सीखें जो सफाई एजेंटों की तरह काम करती हैं, जो आपके शरीर और दिमाग को प्राकृतिक स्वास्थ्य और कल्याण प्रदान करती हैं।";
 

  const EventsArray1 = [
    {
      title : "यौगिक क्रिया",
      desc : "अपने व्यक्तित्व के एक नये आयाम का अनुभव करें। आपके पास असीमित शारीरिक और भावनात्मक क्षमता है। अद्भुत यौगिक क्रियाओं और ध्यान तकनीकों के माध्यम से अपने सर्वोत्तम संस्करण का अनुभव करें।",
      img: img1,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "प्रश्नोत्तर सत्र",
      desc : "अपना संदेह दूर करें. जीवन अनुत्तरित प्रश्नों से भरा हो सकता है। परम पूज्य सुधांशु जी महाराज और डॉ. अर्चिका दीदी से कोई भी प्रश्न पूछने और उत्तर पाने का एक दुर्लभ अवसर।",
      img: img2,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },
    {
      title : "पंचकर्म",
      desc : "समग्र उपचार के माध्यम से आनंदमय कायाकल्प। समग्र उपचार के सुस्थापित प्राचीन विज्ञान का लाभ उठाएँ। अपनी जीवनशैली को सुधारें और तनाव, चिंता और स्ट्रेस को जड़ से उखाड़ फेंकें। ",
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
      title : "मंगल यात्रा",
      desc : "आनंद के पथ पर चलो. चलना एक साधारण गतिविधि है, लेकिन जब आप अपने गुरु के साथ चलते हैं तो अनुभव असाधारण होता है। जानिए जब आप आनंद की राह पर चलते हैं तो कैसा महसूस होता है।          ",
      img: img1,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "पूर्णिमा दर्शन",
      desc : "गुरु की कृपा. पूर्णिमा दर्शन का मौका प्राप्त करें। दिव्यता का अनुभव करें, गुरु की कृपा प्राप्त करें और अपनी आध्यात्मिक प्रगति को महसूस करें।          ",
      img: img2,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },
    {
      title : "यज्ञ",
      desc : "दैवीय आशीर्वाद का आह्वान करें. ध्यान शिविर में श्रद्धापूर्वक यज्ञ करें। यह आपके मन, शरीर और आत्मा को शुद्ध करता है और आपको ईश्वर के करीब ले जाता है।          ",
      img: img3,
      date: "19,March,2023",
      city: "Delhi",
      tag: "यज्ञ",
      // share : share,
      // date : '10th October'
    }
  ]

//   const righttitle1 = "विशेष कार्यक्रम";
//   const rightdesc1 = "एक दिव्य अनुभव को महसूस करें जब पूरा वातावरण पवित्र मंत्रों की ध्वनि से गुंजायमान होता है और ईश्वर का आशीर्वाद प्राप्त होता है।";
//   const rightdate1 = "8 से 9 अक्टूबर, 2022 तक "
//   const righttime1 = "सुबह 8.00 बजे से"

//   const lefttitle1 = "संकल्पित यजमान द्वारा यज्ञ";
//   const leftdesc1 = "यदि आप किसी कारणवश यज्ञ में भाग नहीं ले पा रहे हैं तो संकल्पित यजमान के रूप में भाग लें। गुरुकुल के ऋषिकुमार आपकी ओर से यज्ञ करेंगे, और आपका श्री यंत्र, उपहार और प्रसाद डाक द्वारा भेज दिया जाएगा।";
//   const leftdate1 = " "
//   const lefttime1= ""



  return (
    <div className='manalimeditation'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <BottomComponent title={bottomTitle} desc={bottomDesc} EventsArray1={EventsArray1} EventsArray2={EventsArray2}/>
        {/* <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}/> */}
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default ManaliMeditation