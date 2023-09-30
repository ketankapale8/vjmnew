import React from 'react';
import './gyaan.scss';
import vectorDesign from '../../../assets/commonAssets/Vector.png';
import img1 from '../../../assets/articles/one.png'
import img2 from '../../../assets/articles/two.png'
import img3 from '../../../assets/articles/three.png'
import share from '../../../assets/articles/share.png'



const Gyaan = () => {
    const ArticleArray = [
        {
          title : "दूसरों से तुलना का रोग !",
          desc : "आज का आदमी हर कुछ अपने अधीन कर लेना चाहता है, वह व्यक्ति हो अथवा वस्तुएं। यही कारण है कि हर क्षण दूसरों की ओर उसकी नजरें लगी रहती हैं। ",
          img: img1,
          tag : "",
          date: "15,Feb,2023",
          city: "Bhopal",
          tag : "Article",
          share : share,
          // date : '12th March'
        },
        {
          title : "लाख खुशियों के बावजूद जीवन में अधूरापन",
          desc : "भोजन, वस्त्र, घर, साधन, पद, प्रतिष्ठा से कहीं अनेक गुना अधिक महत्व की चीज है सकारात्मक सोच। सकारात्मक सोच के बिना जीवन नीरस बनता है और एक सीमा के बाद घर-परिवार के लोग भी काटने से दौड़ते हैं।           ",
          img: img2,
          tag: "",
          date: "23,May,2023",
          city: "Delhi",
          tag : "Video",
          share : share,
          // date : '10th February'
        },
        {
          title : " आनन्दधाम में वृद्धावस्था सार्थक बनायें, गुरुकृपा का सौभाग्य पायें",
          desc : "- हमारा देश बुजुर्गों का सम्मान करने वाला देश है, राम, श्रवणकुमार का देश है, जहां अपने पिता की आज्ञा से राज्याभिषेक को छोड़कर जंगल की ओर चल देने की परम्परा है।",
          img: img3,
          date: "19,March,2023",
          city: "Delhi",
          tag: "Article",
          share : share,
          // date : '10th October'
        }, 
        
          
        
      ]
  return (
    <div className='gyaan'>
        <div className="gyaanContainer">
            <div className="gyaanTitle">
            सुधांशु जी महाराज का नवीनतम ज्ञान
            </div>
            <img className='gyaanImg' src={vectorDesign} alt="design"/>

            <div className="boxesContainer2">
            {ArticleArray.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer2" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        <p className='date'>{item.date}</p>
                        <p>{item.desc}</p>
                        <div className="tags">
                            <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अन्वेषण करें {'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={item.share}/>

                            </div>
                        </div>
                 
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

export default Gyaan