import React from 'react';
import './ganeshlakshmi.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg6.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/GaneshLakshmi/rightImg1.png';
import bannerImgLeft from '../../assets/GaneshLakshmi/leftimg.png';
import bannerImgLeft2 from '../../assets/GaneshLakshmi/leftimg2.png';
import bannerImgRight2 from '../../assets/GaneshLakshmi/rightimg2.png';

import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import Mahayagya from './MahaYagya/Mahayagya';

const GaneshLakshmi = () => {
  const title = "108 कुण्डिया श्री गणेश लक्ष्मी महायज्ञ – 2022"
  const desc = "पर्यावरण शुद्धि, दीर्घायु, समृद्धि, वैश्विक शांति और ईश्वरीय कृपा प्राप्ति के लिएश्री गणेश लक्ष्मीमहायज्ञ की शुरुआत परम पूज्य सद्गुरु श्री सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी ने की।";


  const righttitle = "108 कुण्डिया श्री गणेश लक्ष्मी महायज्ञ";
  const rightdesc = "यज्ञ एक सुंदर वैदिक अनुष्ठान और भारतीय वैदिक संस्कृति का महत्वपूर्ण हिस्सा है।";
  const rightdate = "6 से 9 अक्टूबर, 2022 तक "
  const righttime = "समय : सुबह 8.00 बजे से"

  const lefttitle = "वैभव लक्ष्मी साधना / वरदान सिद्धि साधना";
  const leftdesc = "देवी लक्ष्मी को समर्पित, वैभव लक्ष्मी साधना या वरदान सिद्धि साधना एक विशेष भेंट और ध्यान तकनीक है जो भक्तों को वित्तीय परेशानियों से राहत दिलाने और जीवन में सही ढंग से समृद्धि लाने में मदद करती है।";
  const leftdate = "08 और 09 अक्टूबर 2022 "
  const lefttime = "प्रातः 8.00 बजे से"


  const righttitle1 = "विशेष कार्यक्रम";
  const rightdesc1 = "एक दिव्य अनुभव को महसूस करें जब पूरा वातावरण पवित्र मंत्रों की ध्वनि से गुंजायमान होता है और ईश्वर का आशीर्वाद प्राप्त होता है।";
  const rightdate1 = "8 से 9 अक्टूबर, 2022 तक "
  const righttime1 = "सुबह 8.00 बजे से"

  const lefttitle1 = "संकल्पित यजमान द्वारा यज्ञ";
  const leftdesc1 = "यदि आप किसी कारणवश यज्ञ में भाग नहीं ले पा रहे हैं तो संकल्पित यजमान के रूप में भाग लें। गुरुकुल के ऋषिकुमार आपकी ओर से यज्ञ करेंगे, और आपका श्री यंत्र, उपहार और प्रसाद डाक द्वारा भेज दिया जाएगा।";
  const leftdate1 = " "
  const lefttime1= ""


  return (
    <div className='ganeshlakshmi'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}/>
        <Mahayagya/>
        <BankTransfer/>
    </div>
  )
}

export default GaneshLakshmi