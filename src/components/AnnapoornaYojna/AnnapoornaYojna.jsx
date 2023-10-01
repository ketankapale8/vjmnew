import React from 'react';
import './annapoorna.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg7.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/annapoorna/One.png';
import bannerImgLeft from '../../assets/annapoorna/two.png';
import bannerImgRight2 from '../../assets/annapoorna/three.png';
import bannerImgLeft2 from '../../assets/annapoorna/four.png'

import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
import EightyG from '../../common/80GBenefits/EightyG';
// import Mahayagya from './MahaYagya/Mahayagya';

const AnnapoornaYojna = () => {
  const title = "अन्नपूर्णा योजना"
  const desc = "हाल के वर्षों में, भारत ने अनाज उत्पादन और आधुनिक तकनीकों को अपनाने में आत्मनिर्भरता हासिल की है। इसके बावजूद, खाद्य असुरक्षा और कुपोषण का उच्च स्तर अभी भी बना हुआ है। दुनिया भर के सभी कुपोषित लोगों का एक चौथाई हिस्सा हमारे देश में है। प्रति व्यक्ति आय पिछले कुछ वर्षों में बढ़ी है, फिर भी न्यूनतम आहार सेवन कम हुआ है। 1991 से, विश्व जागृति मिशन (वीजेएम) अपने भोजन वितरण कार्यक्रमों के साथ भारत भर के कई शहरों में लगातार काम कर रहा है, जिसका उद्देश्य विभिन्न खाद्य वितरण विधियों और स्वयंसेवकों के माध्यम से लोगों को खाना खिलाना है।";


  const righttitle = "भंडारा योजना";
  const rightdesc = "भंडारा, एक ऐसी योजना है, जिसमें एक विशेष क्षेत्र में लोगों के बीच पका हुआ भोजन, पौष्टिक पेय और पानी वितरित किया जाता है, जब तत्काल भूख से निपटने की बात आती है तो यह चमत्कार करता है।";
  const rightdate = " "
  const righttime = ""

  const lefttitle = "अन्नपूर्णा योजना";
  const leftdesc = "अन्नपूर्णा योजना एक सुंदर व्यवस्था है जिसमें लोग अपने जन्मदिन, शादी की सालगिरह या किसी अन्य विशेष दिन को अनोखे तरीके से मनाते हैं।";
  const leftdate = " "
  const lefttime = ""


  const righttitle1 = "अधिकतम लोगों तक पहुंचना";
  const rightdesc1 = "यदि आप सौ लोगों को नहीं खिला सकते हैं, तो केवल एक को खिलाएं।-मदर टेरेसा हालांकि, विश्व जागृति मिशन अधिक से अधिक लोगों को खाना खिलाने की पूरी कोशिश कर रहा है, फिर भी ऐसे लोगों की अधिकतम संख्या तक पहुंचने के लिए और भी बहुत कुछ करने की जरूरत है, जिनके पास अच्छा भोजन नहीं है।";
  const rightdate1 = " "
  const righttime1 = ""

  const lefttitle1 = "कृपया दान करें";
  const leftdesc1 = "अन्नदान, भूखे बच्चों के साथ-साथ परिवारों के लिए पौष्टिक भोजन उपलब्ध करता है । जब आप विश्व जागृति मिशन के द्वारा चलाए जा रहे इस नेक कार्य के लिए दान करते हैं तो आपके इस दान का उपयोग तुरंत किया जाता है, ताकि किसी को स्वस्थ भोजन खाने में मदद मिल सके।";
  const leftdate1 = " "
  const lefttime1= ""



  return (
    <div className='annapoorna'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}/>
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}/>
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}/>
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}/>
        <EightyG/>
        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default AnnapoornaYojna