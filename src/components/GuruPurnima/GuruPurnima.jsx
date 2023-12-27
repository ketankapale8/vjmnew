import React from 'react';
import './gurupurnima.scss';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import BannerImg from '../../assets/BannerImgs/BannerImg8.png'
import TitlePage from '../../common/EventPagesCommon/TitlePage/TitlePage';
import BankTransfer from '../../common/EventPagesCommon/BankTransferPage/BankTransfer';
import bannerImg from '../../assets/gurupurnima/One.png';
import bannerImgLeft from '../../assets/gurupurnima/two.png';
import bannerImgLeft2 from '../../assets/gurupurnima/four.png';
import bannerImgRight2 from '../../assets/gurupurnima/three.png';
import bannerImgRight3 from '../../assets/gurupurnima/five.png';


import RightImg from '../../common/EventPagesCommon/RightImg/RightImg';
import LeftImg from '../../common/EventPagesCommon/LeftImg/LeftImg';
// import Mahayagya from './MahaYagya/Mahayagya';

const GuruPurnima = () => {
  const title = "गुरु पूर्णिमा 2023 | 30 जून से 3 जुलाई 2023 तक"
  const desc = "गुरुवर के आशीर्वाद से जीवन को आनंदमय बनाएं। परम पूज्य सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी के अनुग्रहपूर्ण मार्गदर्शन में ध्यान के द्वारा गुरु आशीष प्राप्त करें और गुरु पूर्णिमा महोत्सव मनाएं। गुरुवर के आशीष से गुरु पूर्णिमा के अवसर पर मंत्र शक्ति ध्यान, शक्तिपात और मंत्र दीक्षा के माध्यम से अपने आपको रूपांतरित करें। ध्यान के द्वारा हम एक आंतरिक वातावरण का निर्माण करते हैं, हम स्वयं ही हमारे व्यक्तित्व और विचार प्रक्रिया को रूपांतरित करते हैं, ताकि हम भौतिक और आध्यात्मिक दोनों लक्ष्यों को प्राप्त कर सकें।  ";


  const righttitle = "अमृत मंत्र योग साधना";
  const rightdesc = "अपने गुरु मंत्र को जाग्रत करें और अपने आप को एक सुरक्षा कवच से घेर लें। गुरु से परम सुरक्षा कवच प्राप्त करें और अपना सौभाग्य चक्र जगाएं!";
  const rightdate = "आश्रम परिसर में - 9 से 11 जुलाई 2022 तक ऑनलाइन - 10 से 12 जुलाई 2022 तक ऑनलाइन "
  const righttime = "10 से 12 जुलाई 2022 तक डॉ. अर्चिका दीदी द्वारा सत्र: शाम 4 बजे से"

  const lefttitle = "गुरु मंत्र दीक्षा";
  const leftdesc = "परम पूज्य सुधांशु जी महाराज द्वारा आध्यात्मिक जीवन में दीक्षित होने का अवसर गुरु मंत्र दीक्षा एक सुंदर आध्यात्मिक मार्ग है। जब आप इस रास्ते पर आगे बढ़ते हैं, तो आप निचली चेतना से उच्च चेतना की ओर बढ़ना शुरू करते हैं और अपने सच्चे स्वरूप को महसूस करते हैं।";
  const leftdate = " "
  const lefttime = ""


  const righttitle1 = "दिव्य शक्तिपात क्रिया";
  const rightdesc1 = "अपने भीतर आध्यात्मिक ऊर्जा का संचार करें, गुरु के आशीर्वाद से ठीक हो जाएं, प्राणिक ऊर्जा को बढ़ावा दें और एक गहन आंतरिक जागृति का अनुभव करें।";
  const rightdate1 = "आश्रम परिसर में: 12 जुलाई 2022, सुबह 10 बजे से "
  const righttime1 = "ऑनलाइन: 13 जुलाई 2022, सुबह 8 बजे से"

  const lefttitle1 = "गुरु पूर्णिमा महोत्सव";
  const leftdesc1 = "पूर्णिमा की रात गुरु सानिध्य का आनंद मनाएं! गुरु के साथ रहो, ज्ञान के प्रकाश में रहो, और गुरु पूर्णिमा को हर्षोल्लास से मनाओ। सभी समस्याओं को पीछे छोड़कर जीवन के खूबसूरत अनुभवों की ओर कदम बढ़ाइए।";
  const leftdate1 = " "
  const lefttime1= ""

  
  const righttitle2 = "पूर्णिमा दर्शन 2022 - गुरु की पूर्ण कृपा प्राप्त करने का समय";
  const rightdesc2= "परम पूज्य सुधांशु जी महाराज और डॉ अर्चिका दीदी जी के साथ गुरु पूर्णिमा के उत्सव में शामिल हों";
  const rightdate2 = "ऑनलाइन भाग लें या आश्रम परिसर में"
  const righttime2 = ""

  const aurJaanetitle1 = "abc";
  const aurJaaneDesc = "इस शक्तिशाली ध्यान के माध्यम से अपने गुरु मंत्र की शक्ति को जागृत करें। अपने चारों ओर एक दिव्य सुरक्षा कवच बनाकर निराशा और नकारात्मकता की परतों को हटाकर अपने सौभाग्य चक्र को जागृत करें।"
  const aurJaaneDesc1 = "ध्यान का अभ्यास करने से आपको अपने कर्म बंधन और नश्वर पापों को तोड़ने में मदद मिलेगी और आप अनंत आनंद के मार्ग पर आगे बढ़ने में सक्षम होंगे।"
  const aurJaaneDesc2 = "यह 2 दिवसीय मंत्र शक्ति ध्यान साधना है जिसमें प्रतिदिन 60 मिनट का एक सत्र और 30 मिनट का एक सत्र शामिल है।"
  const aurJaaneDesc3 = "  "
  const aurJaaneDesc4= ""
  const aurJaaneHeadings = [
    {
      title : "इसके लाभ",
      desc : [
        {
          one : "अपने सौभाग्य चक्र को जागृत कर जीवन के प्रति सकारात्मक दृष्टिकोण विकसित करें।",
          two : " अपने अंदर की सुप्त ऊर्जा से जुड़कर अपनी आंतरिक शक्ति को महसूस करें।",
          three : "तनाव और चिंता दूर करें और जीवन में ध्यान को केंद्रित करें।",
          four : " सकारात्मक सोच, मन, शरीर और आत्मा के आंतरिक संतुलन को बनाने के लिए अपने दिमाग को सशक्त बनाएं। ",
          // five : "भक्तों द्वारा दिव्य सामूहिक मंत्र जाप। ",
          // six : "श्री यंत्र की प्राण प्रतिष्ठा।",
          // seven : " वैभव लक्ष्मी साधना।",
          // eight : " वरदान सिद्धि साधना।"

        }
      ]
    }
  ]

  const aurJaaneDescLeft = "एक शिष्य के जीवन का सबसे कीमती दिन वह होता है जब एक गुरु उसे एक पवित्र मंत्र से दीक्षित करता है। गुरु के प्रति 'आत्म-भक्ति' की यह आजीवन प्रतिबद्धता जीवन-परिवर्तनकारी क्षण से कम नहीं है।"
  const aurJaaneDescLeft1 = "मंत्र दीक्षा के माध्यम से गुरु अपनी आध्यात्मिक ऊर्जा को शिष्य के माध्यम से संचारित करने में सक्षम होते हैं। यह शिष्यों के जीवन में एक नए चरण की शुरुआत है क्योंकि उन्हें एक नए आध्यात्मिक पथ की ओर अग्रसर किया जाता है, एक ऐसा मार्ग जो शांति, खुशी, कल्याण और भरपूर आनंद की ओर ले जाता है।"
  const aurJaaneDescLeft2 = "यह 2 दिवसीय मंत्र शक्ति ध्यान साधना है जिसमें प्रतिदिन 60 मिनट का एक सत्र और 30 मिनट का एक सत्र शामिल है।"
  const aurJaaneDesc3Left3 = "  "
  const aurJaaneDescLeft4= ""
  const aurJaaneHeadingsLeft = [
    {
      title : "इसके लाभ",
      desc : [
        {
          one : " नएपन और सकारात्मक दृष्टिकोण का अनुभव करें।",
          two : " दीक्षा आपको जीवन में स्वयं द्वारा थोपी गई सीमाओं से पार पाने में सहायता करती है।",
          three : "स्वयं से प्रेम करें, दूसरों से प्रेम करें और निःस्वार्थ भाव से सबकी सेवा करें।",
          four : " जीवन की चुनौतियों का निडरता से सामना करने के लिए साहस और ज्ञान अर्जित करें।",
          five : " मंत्र दीक्षा के माध्यम से आप धार्मिकता के मार्ग पर चलते हैं और आनंदमय जीवन जीते हैं।",
          // six : "श्री यंत्र की प्राण प्रतिष्ठा।",
          // seven : " वैभव लक्ष्मी साधना।",
          // eight : " वरदान सिद्धि साधना।"

        }
      ]
    }
  ]


  const aurJaaneDesc1Left = "पूर्णिमा की रात गुरु के सानिध्य का आनंद मनाएं।"
  const aurJaaneDesc1Left1 = "गुरु पूर्णिमा के पावन अवसर पर विभिन्न कार्यक्रमों का आनंद लें। परम पूज्य महाराजश्री और डॉ. अर्चिका दीदी की उपस्थिति में यह एक अविस्मरणीय अनुभव होगा।"
  const aurJaaneDesc1Left2 = "यह 2 दिवसीय मंत्र शक्ति ध्यान साधना है जिसमें प्रतिदिन 60 मिनट का एक सत्र और 30 मिनट का एक सत्र शामिल है।"
  const aurJaaneDesc1Left3 = "  "
  const aurJaaneDesc1Left4= ""
  const aurJaaneHeadings1Left = [
    {
      title : "मुख्य विशेषताएं",
      desc : [
        {
          one : "  गुरु पूर्णिमा दर्शन।",
          two : "  भजन, सांस्कृतिक कार्यक्रम और प्रार्थना।",
          three : "महाराजश्री और दीदी जी द्वारा आध्यात्मिक प्रवचन।",
          // four : " जीवन की चुनौतियों का निडरता से सामना करने के लिए साहस और ज्ञान अर्जित करें।",
          // five : " मंत्र दीक्षा के माध्यम से आप धार्मिकता के मार्ग पर चलते हैं और आनंदमय जीवन जीते हैं।",
          // six : "श्री यंत्र की प्राण प्रतिष्ठा।",
          // seven : " वैभव लक्ष्मी साधना।",
          // eight : " वरदान सिद्धि साधना।"

        }
      ]
    }
  ]




  const aurJaaneDescRight = "शक्तिपात, वह दीक्षा है जिसके माध्यम से एक गुरु साधक को आंतरिक जागृति और शुद्धि की ओर ले जाने वाली दिव्य ऊर्जा प्रदान करता है। साधक का प्रभामंडल ऊर्जावान होता है जो उसे हर प्रकार के दुर्भाग्य से बचाता है।"
  const aurJaaneDescRight1 = "गुरु की शक्तिशाली ऊर्जा आपको स्वस्थ करेगी, ऊर्जावान बनाएगी और आपकी रक्षा करेगी। अपने भीतर आध्यात्मिक ऊर्जा का आह्वान करें, गुरु के आशीर्वाद से अपने अंतर्मन को शुद्ध करें, अपनी प्राणिक ऊर्जा को बढ़ाएं और एक गहन आंतरिक जागृति का अनुभव करें।"
  

  const aurJaaneHeadingsRight1 = [
    {
      title : "इसके लाभ",
      desc : [
        {
          one : "अपने चारों ओर के ऊर्जा क्षेत्र (अपनी आभा) को शुद्ध करें और एक दिव्य आभा को बनाए।      ",
          two : "लचीलापन और स्व-चिकित्सा की शक्ति में सुधार आता है। ",
          three : "नकारात्मकता के घेरे को तोड़ें और सकारात्मक परिवर्तन का अनुभव करें।          ",
          // four : "रिश्तों में सद्भाव, शांति और समृद्धि आती है।",
          // five : " जीवन के सपने पूरे होते है।",
          // six : "आध्यात्मिक उत्थान और आंतरिक चेतना का जागरण होता है।",
          // seven : " ",
          // eight : " "

        }
      ]
    }
  ]



  const aurJaaneDesc2Right = "परम पूज्य सुधांशु जी महाराज और डॉ. अर्चिका दीदी के साथ गुरु पूर्णिमा के समारोह में शामिल हों।पूर्णिमा (पूर्णिमा की रात) जीवन का एक नया अध्याय शुरू करने का अति शुभ अवसर है। गुरु पूर्णिमा गुरु की पूर्ण कृपा प्राप्त करके आध्यात्मिक जागृति का साक्षी बनती है और जीवन पथ पर नए सिरे से चलने की शुरुआत करती है।"
  const aurJaaneDesc2Right1 = "पूर्णिमा का प्रकाश आपके मन के अंधकार को दूर करे। गुरु के दिव्य शब्दों को सुनें और आत्मसात करें और आत्म-साक्षात्कार और ईश्वर-साक्षात्कार के मार्ग पर चलने के लिए अपनी प्रतिबद्धता को नवीनीकृत करें।"
  const aurJaaneDesc2Right2 = ""
  const aurJaaneDesc2Right3 = "  "
  const aurJaaneDesc2Right4= ""
  const aurJaaneHeadings2Right5 = [
    {
      title : "लाइव कार्यक्रमों की मुख्य विशेषताएं",
      desc : [
        {
          one : " भजन - भगवान और गुरु की स्तुति करने वाले भक्ति संगीत और भजनों में शामिल होकर अपने गुरु के प्रति अपनी भक्ति और प्रेम को व्यक्त करें। अपने आप को संगीत में डुबोएं और अपने मन को शांत करें। ऐसी शांत अवस्था में, अगले 365 दिनों के लिए बिना शर्त अपने हृदय के तार को अपने गुरु के साथ जोड़ दें ।          ",
          two : " महाराजश्री और डॉ. अर्चिका दीदी के प्रवचन -  इस विशेष अवसर पर महाराजश्री को सुनें और ज्ञान के अनमोल मोतियों को इकट्ठा करें जो गुरु पूर्णिमा 2024 तक आपकी 365-दिवसीय यात्रा में आपकी सहायता करेंगे। इस दिन का मुख्य आकर्षण डॉ. अर्चिका दीदी का जादुई शब्दों के साथ दिया गया प्रवचन है जो एक शिष्य के जीवन में एक गुरु की महिमा को बढ़ाता है। वह हर साल गुरु पूर्णिमा पर अपने भावपूर्ण संबोधन से सबको मंत्रमुग्ध कर देती हैं।          ",
          three : "विशेष गुरु पूर्णिमा कार्यक्रम - गुरु पूर्णिमा गुरुओं को विनम्र सम्मान देने का पवित्र अवसर है। गुरुकुल के छात्र तीन दिनों में कई कार्यक्रमों के माध्यम से अपनी कृतज्ञता व्यक्त करेंगे।",
          // four : " सकारात्मक सोच, मन, शरीर और आत्मा के आंतरिक संतुलन को बनाने के लिए अपने दिमाग को सशक्त बनाएं। ",
          // five : "भक्तों द्वारा दिव्य सामूहिक मंत्र जाप। ",
          // six : "श्री यंत्र की प्राण प्रतिष्ठा।",
          // seven : " वैभव लक्ष्मी साधना।",
          // eight : " वरदान सिद्धि साधना।"

        }
      ]
    }
  ]




  return (
    <div className='gurupurnima'>
        <HeaderImgC img={BannerImg}/>
        <TitlePage title={title} desc={desc}/>
        <RightImg righttitle={righttitle} rightdate={rightdate} rightdesc={rightdesc} righttime={righttime} bannerImg={bannerImg}
           aurJaanetitle1={righttitle}
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
                     aurJaaneDesc1={aurJaaneDescLeft1}
                     aurJaaneDesc2={aurJaaneDescLeft2}
                     aurJaaneDesc3={aurJaaneDesc3Left3}
                     aurJaaneDesc4={aurJaaneDescLeft4}
                     aurJaaneHeadings={aurJaaneHeadingsLeft}
        />
        <RightImg righttitle={righttitle1} rightdate={rightdate1} rightdesc={rightdesc1} righttime={righttime1} bannerImg={bannerImgRight2}
            aurJaanetitle1={righttitle1}
            aurJaaneDesc={aurJaaneDescRight}
            aurJaaneDesc1={aurJaaneDescRight1}

           aurJaaneHeadings={aurJaaneHeadingsRight1}

        
        />
        <LeftImg lefttitle={lefttitle1} leftdate={leftdate1} leftdesc={leftdesc1} lefttime={lefttime1} bannerImg={bannerImgLeft2}
             aurJaanetitle1={lefttitle1}
             aurJaaneDesc={aurJaaneDesc1Left}
             aurJaaneDesc1={aurJaaneDesc1Left1}
             aurJaaneDesc2={aurJaaneDesc1Left2}
             aurJaaneDesc3={aurJaaneDesc1Left3}
             aurJaaneDesc4={aurJaaneDesc1Left4}
             aurJaaneHeadings={aurJaaneHeadings1Left}
        
        />
        <RightImg righttitle={righttitle2} rightdate={rightdate2} rightdesc={rightdesc2} righttime={righttime2} bannerImg={bannerImgRight3}
             aurJaanetitle1={righttitle2}
             aurJaaneDesc={aurJaaneDesc2Right}
             aurJaaneDesc1={aurJaaneDesc2Right1}
             aurJaaneDesc2={aurJaaneDesc2Right2}
             aurJaaneDesc3={aurJaaneDesc2Right3}
             aurJaaneDesc4={aurJaaneDesc2Right4}
             aurJaaneHeadings={aurJaaneHeadings2Right5}
        
        />

        {/* <Mahayagya/> */}
        <BankTransfer/>
    </div>
  )
}

export default GuruPurnima