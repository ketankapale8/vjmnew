import React, { useState } from 'react'
import './karyakram.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png';
import BannerImg from '../../../assets/karyakramImgs/bannerImgKaryakram.png';
import One from '../../../assets/karyakramImgs/1.png';
import Two from '../../../assets/karyakramImgs/2.png';
import Three from '../../../assets/karyakramImgs/3.png';



import LayerImg from '../../../assets/karyakramImgs/layer.png';

const KaryakramSangya = () => {
    const KaryaKramArray = [
        {
          title : "आश्रम",
          desc : "हरे-भरे शांतिपूर्ण और सुंदर वातावरण के बीच चल रहे हमारे देश और विदेश के आश्रमों से जुड़कर और वहां जाकर आध्यात्मिक उत्थान और भक्ति का अनुभव प्राप्त करें।",
          img: One,
          tag : "",
          date: "15,Feb,2023",
          city: "Bhopal",
          tag : "सत्संग",
          // share : share,
          // date : '12th March'
        },
        {
          title : "सकारात्मक रूप से जुड़ें।",
          desc : "विश्व जागृति मिशन द्वारा चलाए जा रहे सेवा प्रकल्पों में एक दीक्षित,एक स्वयंसेवक या अनुयायी के रूप में जुड़कर अपने जीवन को धन्य बनाएं।          ",
          img: Two,
          tag: "",
          date: "23,May,2023",
          city: "Delhi",
          tag : "पूर्णिमा",
          // share : share,
          // date : '10th February'
        },
        {
          title : "योगदान देना",
          desc : "दान के माध्यम से जरूरतमंदों के जीवन को बेहतर बनाने में अपना सहयोग दें और अपने सामाजिक दायित्वों का पालन करें, जो वास्तविक आनंद और शांति प्राप्त करने का सबसे अच्छा और आसान तरीका है।",
          img: Three,
          date: "19,March,2023",
          city: "Delhi",
          tag: "यज्ञ",
          // share : share,
          // date : '10th October'
        }
      ]

      const [arr , setArr]= useState(KaryaKramArray)
  return (
    <div className='karyakram'>
        <div className="karyakramContainer">
            <div className="optionContainer">
                <div className="karyakramOptions">
                    <div className="karyakramTitle">कार्यक्रम संज्ञा</div>
                    <img className="karyakramImg" src={vectorDesign} alt="design"/>
                    <img className="mainKaryakramImg" src={BannerImg} alt="banner"/>



                </div>

                <div className="karyakramOptions">
                <div className="karyakramTitle1">विश्व जागृति मिशन में जुड़कर पूर्ण आंतरिक शांति का अनुभव करें।</div>
                    <img className="karyakramImg" src={vectorDesign} alt="design"/>
                    <div className="karyakramDesc">
                    विश्व जागृति मिशन वरिष्ठ नागरिकों और युवाओं का हमारे आध्यात्मिक केंद्रों में पूर्ण आंतरिक शांति का अनुभव करने के लिए स्वागत करता है। अनेक वरिष्ठ नागरिक और युवा हमारे योग और ध्यान केंद्रों, आध्यात्मिक रिसॉर्ट्स, आयुर्वेद और आधुनिक स्वास्थ्य सुविधाओं और विभिन्न अन्य सामाजिक केंद्रों का लाभ उठा रहे हैं। इन सभी केंद्रों पर जाकर उन्हें न केवल आत्म तृप्ति का अनुभव होता है ,बल्कि आंतरिक शांति भी प्राप्त होती है।
                        

                    </div>

                </div>

            </div>

            <div className="boxesContainer">
                {arr.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer1" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                            {/* <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', padding: '6px 12px 12px 12px'}}>{item.tag}</button> */}
                        <p>{item.desc}</p>
                    </div>
                        <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अन्वेषण करें {'>'} </button>
                        {/* <div className="tags">
                            <BsCalendarDate style={{ paddingLeft:'4px'}}/>
                            <p>{item.date}</p>
                            <img style={{ paddingLeft:'4px'}} src={location}/>
                            <p>{item.city}</p>
                        </div> */}
                        </div>
                        
                        </>
                    )
                })}


            </div>

        </div>
    </div>
  )
}

export default KaryakramSangya