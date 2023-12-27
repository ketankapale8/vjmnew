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


  const aurJaanetitle1 = "abc";
  const aurJaaneDesc = "इस अवसर का लाभ उठाने के लिए तैयार हो जाइए। यज्ञ एक सुंदर वैदिक अनुष्ठान और भारतीय वैदिक संस्कृति का महत्वपूर्ण हिस्सा है। यज्ञ किसी कार्य को प्रारंभ करने से पहले तथा सभी के कल्याण हेतु किया जाता है। हमारे शास्त्रों में उल्लेख है कि यज्ञ करके आप किसी भी दुर्भाग्य को सौभाग्य में बदल सकते हैं और साधक यदि किसी जागृत गुरु के विशेष मार्गदर्शन में और परम्परा के अनुसार यज्ञ करता है तो वह और भी अधिक फलदायक हो जाता है इसलिए, एक शिष्य के लिए, उसके गुरु का पवित्र निवास, आनंदधाम आश्रम, आदर्श आध्यात्मिक गंतव्य है जहाँ  साल-दर-साल इस तरह के पवित्र यज्ञ होते रहते है।"
  const aurJaaneDesc1 = " या रक्ताम्बुजवासिनी विलासिनी चण्डांशु तेजस्विनी। या रक्ता रुधिराम्बरा हरिसखी या श्री मनोल्हादिनी॥"
  const aurJaaneDesc2 = "या रत्नाकरमन्थनात्प्रगटिता विष्णोस्वया गेहिनी। सा मां पातु मनोरमा भगवती लक्ष्मीश्च पद्मावती ॥"
  const aurJaaneDesc3 = "देवी लक्ष्मी को समर्पित, वैभव लक्ष्मी साधना या वरदान सिद्धि साधना एक विशेष भेंट और ध्यान तकनीक है जो भक्तों को वित्तीय परेशानियों से राहत दिलाने और जीवन में सही ढंग से समृद्धि लाने में मदद करती है।  "
  const aurJaaneDesc4= ""
  const aurJaaneHeadings = [
    {
      title : "विशेष कार्यक्रम",
      desc : [
        {
          one : "श्री गणेश-लक्ष्मी पूजन।",
          two : " श्री महालक्ष्मी मंत्र का जाप।",
          three : "भगवान श्री गणेश मंत्र का जाप।",
          four : " श्री लक्ष्मी-गणेश आहुति (मंत्राहुति)।",
          five : "भक्तों द्वारा दिव्य सामूहिक मंत्र जाप। ",
          six : "श्री यंत्र की प्राण प्रतिष्ठा।",
          seven : " वैभव लक्ष्मी साधना।",
          eight : " वरदान सिद्धि साधना।"

        }
      ]
    }
  ]

  const aurJaaneDescLeft = "परम पूज्य सद्गुरु श्री सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी के मार्गदर्शन में, भक्त समृद्धि, ज्ञान, सफलता, समग्र विकास, स्वास्थ्य और आंतरिक शांति प्राप्त करने के लिए पूर्ण समर्पण के साथ यज्ञ और प्रार्थना करेंगे। वैभव लक्ष्मी साधना के दौरान, भक्त देवी लक्ष्मी की कृपा पाने के लिए 'श्री यंत्र' की पूजा करेंगे। यह यंत्र, धन और समृद्धि की देवी लक्ष्मी माता का रहस्यमय और शुद्धतम, त्रि-आयामी प्रतिरूप है। यदि आप सच्चे मन से इस यंत्र की पूजा करते हैं तो आपको धन, प्रसिद्धि और सफलता प्राप्त होगी। ॐ नमो सिद्धि विनायकाय सर्व कार्य कर्त्रे सर्व विघ्न प्रशमनाय सर्व राज्य वश्यकरणाय सर्वजन सर्वस्त्रीपुरुष आकर्षणाय श्रीं ॐ स्वाहा 'हे बुद्धि और आनंद के देवता, भगवान श्री गणेश, केवल आप ही हमारे हर संभव प्रयास को संभव बनाते हैं; आप सभी विध्न बाधाओं को दूर करने वाले हैं और आपने ही ब्रह्मांड में हर प्राणी को सुख प्रदान किया है। आप सभी जीवों के भगवान हैं।' "
  const aurJaaneDesc1Left = " या रक्ताम्बुजवासिनी विलासिनी चण्डांशु तेजस्विनी। या रक्ता रुधिराम्बरा हरिसखी या श्री मनोल्हादिनी॥"
  const aurJaaneDesc2Left = "या रत्नाकरमन्थनात्प्रगटिता विष्णोस्वया गेहिनी। सा मां पातु मनोरमा भगवती लक्ष्मीश्च पद्मावती ॥"
  const aurJaaneDesc3Left = "॥ ॐ गं गणपतये सर्व कार्य सिद्धि कुरु कुरु स्वाहा ॥ भगवान श्री गणेश आपकी सभी मनोकामनाएं पूर्ण करें।"
  const aurJaaneDesc4Left = "वैभव लक्ष्मी साधना / वरदान सिद्धि साधना के दिव्य लाभ हम सभी के जीवन में कुछ इच्छाएं और सपने होते हैं। हम अपनी इच्छाओं को पूरा करने के लिए बहुत मेहनत करते हैं। जहां मेहनत जरूरी है, वहीं यह भी सच है कि पूरे मन से किया गया ध्यान, पूजा और प्रार्थना आपकी मनोकामनाओं को पूरा करने में आपकी मदद करती हैं और जीवन की यात्रा को और अधिक फलदायी बनाती है। युगों से, लोगों ने बिना किसी सकारात्मक परिणाम के सफलता और संतोष प्राप्त करने के लिए कई निराधार अनुष्ठानों का अभ्यास किया है। सफलता सुनिश्चित करने और अपने प्रयासों का फल पाने के लिए, पहले सही कार्यप्रणाली सीखें। वरदान सिद्धि साधना एक वैज्ञानिक और आध्यात्मिक पहलू के साथ सिद्ध पद्धति है।  "
  const aurJaaneHeadingsLeft = [
    {
      title : "वरदान सिद्धि साधना करके ",
      desc : [
        {
          one : "ब्रह्मांड से सकारात्मक ऊर्जा को प्राप्त करें।          ",
          two : " ईश्वर का आशीर्वाद और जीवन के लक्ष्यों को प्राप्त करें।",
          three : "किसी भी बीमारी से मुक्त होकर स्वस्थ जीवन जिएं।",
          four : "संज्ञानात्मक क्षमता में वृद्धि और समस्या समाधान में महारत हासिल करें।",
          five : "तनाव, चिंता और अनिर्णय से मुक्त जीवन जियें।",
          six : "रिश्तों में खुशी और सद्भाव का संचार करें तथा आनंदपूर्वक जीवन व्यतीत करें।",
          // seven : " ",
          // eight : " "

        }
      ]
    }
  ]

  const aurJaaneDescRight = "जब भक्त शुद्ध हृदय और भक्ति के साथ श्री यंत्र सिद्धि का अभ्यास करते हैं  तो देवी लक्ष्मी उन पर अपनी कृपा अवश्य बरसाती हैं।"
  const aurJaaneDescRight1 = "श्री यंत्र को कुछ वैदिक अनुष्ठानों के माध्यम से सक्रिय किया जाता है ताकि यह अपनी पूरी ऊर्जा आसपास के क्षेत्र में फैला सके और भक्तों को इसका लाभ प्राप्त हो सके।"
  

  const aurJaaneHeadingsRight1 = [
    {
      title : "श्री यंत्र सिद्धि सिद्धि के लाभ",
      desc : [
        {
          one : "नकारात्मक ऊर्जाओं और बाधाओं से मुक्ति मिलती है।       ",
          two : " आंतरिक शुद्धि और सशक्तिकरण होता है।",
          three : "व्यक्तिगत विकास होता है और समृद्धि आती है। ",
          four : "रिश्तों में सद्भाव, शांति और समृद्धि आती है।",
          five : " जीवन के सपने पूरे होते है।",
          six : "आध्यात्मिक उत्थान और आंतरिक चेतना का जागरण होता है।",
          // seven : " ",
          // eight : " "

        }
      ]
    }
  ]

  return (
    <div className='ganeshlakshmi'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime}
         bannerImg={bannerImg}
         aurJaanetitle1={title}
         aurJaaneDesc={aurJaaneDesc}
         aurJaaneDesc1={aurJaaneDesc1}
         aurJaaneDesc2={aurJaaneDesc2}
         aurJaaneDesc3={aurJaaneDesc3}
         aurJaaneDesc4={aurJaaneDesc4}

         aurJaaneHeadings={aurJaaneHeadings}
         />
        <LeftImg lefttitle={lefttitle} leftdate={leftdate} leftdesc={leftdesc} lefttime={lefttime} bannerImg={bannerImgLeft}
          aurJaanetitle1={lefttitle}
          aurJaaneDesc={aurJaaneDescLeft}
          aurJaaneDesc1={aurJaaneDesc1Left}
          aurJaaneDesc2={aurJaaneDesc2Left}
          aurJaaneDesc3={aurJaaneDesc3Left}
         aurJaaneDesc4={aurJaaneDesc4Left}

          aurJaaneHeadings={aurJaaneHeadingsLeft}
        />
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} 
        righttime={righttime1} bannerImg={bannerImgRight2}
        aurJaanetitle1={"Content Will be Updated Soon"}
        />
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}
          aurJaanetitle1={lefttitle1}
          aurJaaneDesc={aurJaaneDescRight}
          aurJaaneDesc1={aurJaaneDescRight1}
          aurJaaneHeadings={aurJaaneHeadingsLeft}

        />
        <Mahayagya/>
        <BankTransfer/>
    </div>
  )
}

export default GaneshLakshmi