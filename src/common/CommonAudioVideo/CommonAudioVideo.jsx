import React from 'react';
import './commonaudiovideo.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png'
import ReactPlayer from 'react-player'
// import img1 from '../../../assets/EventsPage/Bhakti.jpg';
// import img2 from '../../../assets/EventsPage/poornima.jpg';
// import img3 from '../../../assets/EventsPage/Yagya.jpg';
// import location from '../../../assets/EventsPage/location.png';

const EventsArrayHindi = [
    {
      title : "भक्ति सत्संग",
      desc : "गुरु के सत्संग से ज्ञान, बुद्धि, आनंद और आंतरिक शांति के द्वार खुलते हैं। परम पूज्य सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी, देश और विदेशों के विभिन्न स्थानों पर जाकर व्यावहारिक विषयों को छूते हुए सत्संग के माध्यम से भक्तों के हृदय को झकझोर देते हैं।",
    //   img: img1,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "पूर्णिमा दर्शन",
      desc : "पूर्णिमा जीवन में एक नया अध्याय शुरू करने का शुभ अवसर है और भक्त अपने गुरु के दर्शन के लिए इस दिन का बेसब्री से इंतजार करते हैं। पूर्णिमा दर्शन से     गुरु की पूर्ण कृपा एवं आशीष प्राप्त होता है।",
    //   img: img2,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },
    {
      title : "यज्ञ",
      desc : "यज्ञ करने से हमारा बाहरी और भीतरी वातावरण पवित्र होता है।जब हम गुरु के मार्गदर्शन में यज्ञ करते हैं तो हम भक्ति और आंतरिक शांति के उच्च स्तर पर पहुंच जाते हैं। विश्व जागृति मिशन, पर्यावरण शुद्धि और आंतरिक आनंद के लिए विशेष रूप से गणेश लक्ष्मी महायज्ञ,महाशिवरात्रि यज्ञ तथा समय-समय पर अन्य यज्ञों का आयोजन करता है। ",
    //   img: img3,
      date: "19,March,2023",
      city: "Delhi",
      tag: "यज्ञ",
      // share : share,
      // date : '10th October'
    }
  ]

  const videos = [
    {
        title : "निर्णय ऐसा लो कि पछतावा न हो",
        url : "https://www.youtube.com/watch?v=mQ9evqJpgSw&ab_channel=SudhanshuJiMaharaj",
        desc : "जीवन की इस लम्बी यात्रा में हमें कई निर्णय लेने होते हैं। इनमें मुख्य निर्णय वे होते हैं जो हमारे धर्म, कर्म, पाप और पुण्य से सम्बंधित होते हैं। ये आवश्यक है कि इनसे जुड़े हुए निर्णय आप ऐसे लें कि बाद में पछताना न पड़े। दुर्योधन के जीवन की ये रोचक कथा यही सन्देश देती है।"
    }, 

    {
        title : "अपने व्यवहार में ये 3 चीज़ें शामिल करें",
        url : "https://www.youtube.com/watch?v=cr6gHRn07Ws&ab_channel=SudhanshuJiMaharaj",
        desc : "आपके व्यवहार पर बहुत बातें निर्भर करती हैं। आप खुद में कैसा महसूस करेंगे और जो आपके संपर्क में हैं वो आपके साथ कैसा महसूस करेंगे। अपने व्यवहार में ये तीन चीज़ें शामिल करें। ये आपके व्यक्तिव को निखारेंगी साथ ही आपके भीतर सुंदरता,  प्रसन्नता,आनंद और भक्ति को जागृत करेंगी।"
    },

    {
        title : "कैसी भी परिस्थिति हो संतुलन बनाए रखें ",
        url : "https://www.youtube.com/watch?v=Uo3BgW83NiE&ab_channel=SudhanshuJiMaharaj",
        desc : "जीवन जीने की कला भगवान श्री कृष्ण ने दी। कायर मन में वीरता का संचार किया। जीवन की सार्थकता का हमें पता होना चाहिए ,और किसी भी उम्र में अपने कर्तव्य को भूलना नहीं चाहिए, अपने धन को धन्य बनाओ। क्या करना चाहिए और क्या नहीं करना चाहिए इसमें भेद आना चाहिए कम  कमा लो ,लेकिन प्यार, कभी कम नहीं होना चाहिए ।यह जीवन दर्शन भी आना चाहिए और अपने आनंद को कभी ना भूले।"
    }
  ]

const CommonAudioVideo = ({title}) => {
  return (
    <div className='middleContainer'>
        <div className="middleTop">
            <div className="middleTitle">{title}</div>
            <div className="middleDesc">भौतिक और आध्यात्मिक रूप से मानवता के उत्थान के लिए कार्यक्रम।</div>
            <img className="middleImg" src={vectorDesign} alt="design"/>

        </div>
        <div className="middleMain">
            <div className='events'>
            {videos.map(item=>{
  return (
    <>
    <div className="boxContainer" 
    >
      <div className="top">
        <ReactPlayer url={item.url} width={'400px'} height={"200px"} 
        controls={true}
        playing={true} /> 
        {/* <img className='postImg' alt='post' src={item.img}/>   */}
      </div>
      <div className="bottom">

          <h4>{item.title}</h4>
          <p>{item.desc}</p>
            {/* <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', padding: '6px 12px 12px 12px'}}>{item.tag}</button> */}
      </div>
          <div className="tags">
            {/* <BsCalendarDate style={{ paddingLeft:'4px'}}/> */}
            {/* <p>{item.date}</p> */}
            {/* <img style={{ paddingLeft:'4px'}} src={location}/> */}
            {/* <p>{item.city}</p> */}
          </div>
    </div>
    
    </>
  )
})} 


            </div>


        </div>

    </div>
  )
}

export default CommonAudioVideo