import React, {useState} from 'react';
import './middlehomec.scss';
import vectorDesign from '../../../assets/commonAssets/Vector.png'
import img1 from '../../../assets/EventsPage/Bhakti.jpg';
import img2 from '../../../assets/EventsPage/poornima.jpg';
import img3 from '../../../assets/EventsPage/Yagya.jpg';
import location from '../../../assets/EventsPage/location.png';


import {BsCalendarDate} from 'react-icons/bs';
import {FaCity} from 'react-icons/fa';


const EventsArrayHindi = [
    {
      title : "भक्ति सत्संग",
      desc : "गुरु के सत्संग से ज्ञान, बुद्धि, आनंद और आंतरिक शांति के द्वार खुलते हैं। परम पूज्य सुधांशु जी महाराज एवं डॉ. अर्चिका दीदी, देश और विदेशों के विभिन्न स्थानों पर जाकर व्यावहारिक विषयों को छूते हुए सत्संग के माध्यम से भक्तों के हृदय को झकझोर देते हैं।",
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
      desc : "पूर्णिमा जीवन में एक नया अध्याय शुरू करने का शुभ अवसर है और भक्त अपने गुरु के दर्शन के लिए इस दिन का बेसब्री से इंतजार करते हैं। पूर्णिमा दर्शन से     गुरु की पूर्ण कृपा एवं आशीष प्राप्त होता है।",
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
      desc : "यज्ञ करने से हमारा बाहरी और भीतरी वातावरण पवित्र होता है।जब हम गुरु के मार्गदर्शन में यज्ञ करते हैं तो हम भक्ति और आंतरिक शांति के उच्च स्तर पर पहुंच जाते हैं। विश्व जागृति मिशन, पर्यावरण शुद्धि और आंतरिक आनंद के लिए विशेष रूप से गणेश लक्ष्मी महायज्ञ,महाशिवरात्रि यज्ञ तथा समय-समय पर अन्य यज्ञों का आयोजन करता है। ",
      img: img3,
      date: "19,March,2023",
      city: "Delhi",
      tag: "यज्ञ",
      // share : share,
      // date : '10th October'
    },
    // {
    //   title : "यज्ञ",
    //   desc : "यज्ञ करने से हमारा बाहरी और भीतरी वातावरण पवित्र होता है।जब हम गुरु के मार्गदर्शन में यज्ञ करते हैं तो हम भक्ति और आंतरिक शांति के उच्च स्तर पर पहुंच जाते हैं। विश्व जागृति मिशन, पर्यावरण शुद्धि और आंतरिक आनंद के लिए विशेष रूप से गणेश लक्ष्मी महायज्ञ,महाशिवरात्रि यज्ञ तथा समय-समय पर अन्य यज्ञों का आयोजन करता है। ",
    //   img: img3,
    //   date: "19,March,2023",
    //   city: "Delhi",
    //   tag: "यज्ञ",
    //   // share : share,
    //   // date : '10th October'
    // },
    
  ]

  const EventsArrayYugrishi = [
    {
      title : " देवशयनी एकादशी",
      desc : "लौकिक और पारलौकिक सुखों की प्राप्ति का सुलभ माध्यम - देवशयनी एकादशी का व्रत पूजन",
      img: img1,
      date: " 29 June 2023",
      city: " New Delhi",
      tag : "देवशयनी एकादशी",
      // share : share,
      // date : '12th March'
    },
    {
      title : " शनि अमावस्या      ",
      desc : "शनि अमावस्या पर जप-पूजन से होते हैं शनिदेव प्रसन्न। अमावस्या को पितरों का दिन कहा जाता है।      ",
      img: img2,
      tag: "",
      date: "17 June 2023",
      city: "Delhi",
      tag : " शनि अमावस्या      ",
      // share : share,
      // date : '10th February'
    },
    {
      title : " गुरु प्रदोष ",
      desc : " प्रदोष व्रत शिव-उपासना का व्रत होता है, जिस प्रकार भगवान विष्णु की उपासना के लिये दोनों पक्षों की एकादशी का व्रत किया जाता है।      ",
      img: img3,
      date: "15 June 2023",
      city: "Delhi",
      tag: " गुरु प्रदोष ",
      // share : share,
      // date : '10th October'
    }
  ]
  const EventsArraySatsang= [
    {
      title : "  दिव्य भक्ति सत्संग - मेरठ मंडल ",
      desc : "परमपूज्य श्री सुधांशु जी महाराज के पावन सान्निध्य में दिव्य भक्ति सत्संग      ",
      img: img1,
      date: " 20 June 2023",
      city: " Meerut",
      tag : "भक्ति सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "  भक्ति सत्संग - वरदान लोक आश्रम मुम्बई  ",
      desc : "परमपूज्य श्री सुधांशु जी महाराज के पावन सान्निध्य में भक्ति सत्संग - पादपूजन गुरुदर्शन एवं आशीर्वचन      ",
      img: img2,
      tag: "",
      date: " 18 June 2023",
      city: "Mumbai",
      tag : " भक्ति सत्संग      ",
      // share : share,
      // date : '10th February'
    },
    {
      title : " गुरुपूर्णिमा भक्ति सत्संग - पुणे मण्डल",
      desc : " परमपूज्य श्री सुधांशु जी महाराज के पावन सान्निध्य में गुरुपूर्णिमा भक्ति सत्संग - पुणे मण्डल   ",
      img: img3,
      date: "16 June 2023",
      city: "Pune",
      tag: "  गुरुपूर्णिमा भक्ति सत्संग ",
      // share : share,
      // date : '10th October'
    }
  ]

  const EventsArrayPournima= [
    {
      title : "  पूर्णिमा दर्शन      ",
      desc : "परम पूज्जय श्री सुधांशु जी महाराज एवं डॉ अर्चिका दीदी के पवन सान्निध्य में पूर्णिमा महोत्सव के सुभ अवसर पर विराट भक्ति सत्संग एवं भंडारा      ",
      img: img1,
      date: " 5 May 2023",
      city: " New Delhi",
      tag : "पूर्णिमा दर्शन   ",
      // share : share,
      // date : '12th March'
    },
    {
      title : "   पूर्णिमा दर्शन ",
      desc : "परम पूज्जय श्री सुधांशु जी महाराज एवं डॉ अर्चिका दीदी के पवन सान्निध्य में पूर्णिमा महोत्सव के सुभ अवसर पर विराट भक्ति सत्संग एवं भंडारा    ",
      img: img2,
      date: " 4 Feb 2023",
      city: "Mumbai",
      tag : " पूर्णिमा दर्शन  ",
      // share : share,
      // date : '10th February'
    },
    
  ]

  const EventsArraySpecial= [
    {
      title : "  Shiv Anand Mahotsav    ",
      desc : " This Mahashivratri, let’s worship Him with a meditative mind while doing Shiv-Shakti Mahadhyan.      ",
      img: img1,
      date: "17 -19 Feb 2023",
      city: " New Delhi",
      tag : "Anand Mohatsav   ",
      // share : share,
      // date : '12th March'
    },
    {
      title : "  उल्लास पर्व      ",
      desc : "  परम पूज्जय श्री सुधांशु जी महाराज के वतरण दिवस के पावन अवसर पर उल्लास पर्व      ",
      img: img2,
      date: "  2 May 2023",
      city: " New Delhi",
      tag : " पूर्णिमा दर्शन  ",
      // share : share,
      // date : '10th February'
    },
    
    {
      title : " गुरुपूर्णमा महोत्सव   ",
      desc : "   परम पूज्जय श्री सुधांशु जी महाराज के वतरण दिवस के पावन अवसर पर उल्लास पर्व      ",
      img: img2,
      date: "  30 June - 3 July 2023",
      city: " New Delhi",
      tag : " गुरुपूर्णमा महोत्सव  ",
      // share : share,
      // date : '10th February'
    },
  ]

  
  
  const MiddleHomeC = () => {
  const [current , setCurrent] = useState(EventsArrayHindi)
  return (
    <div className='middleContainer'>
        <div className="middleTop">
            <div className="middleTitle">आगामी कार्यक्रम</div>
            <div className="middleDesc">भौतिक और आध्यात्मिक रूप से मानवता के उत्थान के लिए कार्यक्रम।</div>
            <img className="middleImg" src={vectorDesign} alt="design"/>

        </div>
        <div className="middleMain">
          <div className="buttonContainer">

                      <button className={current == EventsArrayHindi ? 'buttons-current' : "buttons"} onClick={()=> setCurrent(EventsArrayHindi)}>All</button>
                        <button className={current == EventsArraySpecial ? 'buttons-current' : "buttons"} onClick={()=> setCurrent(EventsArraySpecial)}>Monthly</button>
                        <button className={current == EventsArraySatsang ? 'buttons-current' : "buttons"} onClick={()=> setCurrent(EventsArraySatsang)}>Satsang</button>
                        <button className={current == EventsArrayYugrishi ? 'buttons-current' : "buttons"}onClick={()=> setCurrent(EventsArrayYugrishi)}>Yugrishi Anusthan</button>
                        <button className={current == EventsArrayPournima ? 'buttons-current' : "buttons"}  onClick={()=> setCurrent(EventsArrayPournima)}>Poornima</button>
          </div>

          <div className="events">

{current.map(item=>{
  return (
    <>
    <div className="boxContainer1" 
    >
      <div className="top">
        <img className='postImg' alt='post' src={item.img}/>  
      </div>
      <div className="bottom">

          <h4>{item.title}</h4>
            <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', padding: '6px 12px 12px 12px'}}>{item.tag}</button>
          <p>{item.desc}</p>
      </div>
          <div className="tags">
            <BsCalendarDate style={{ paddingLeft:'4px'}}/>
            <p>{item.date}</p>
            <img style={{ paddingLeft:'4px'}} src={location}/>
            <p>{item.city}</p>
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

export default MiddleHomeC