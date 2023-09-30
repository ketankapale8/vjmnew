import React, { useState } from 'react';
import './samajikalyaan.scss';
import one from '../../../assets/samajkalyaan/one.png'
import two from '../../../assets/samajkalyaan/two.png'


const KaryaKramArray = [
    {
      title : "धर्मादा सेवा",
      desc : "गरीबों को शिक्षित करने, गौ सेवा, गरीब रोगियों के लिए स्वास्थ्य सेवा, भंडारा और बुजुर्गों की देखभाल के लिए अपनी कमाई का 2-10% अंशदान करके, अपने जीवन में ईश्वर की कृपा, शांति और समृद्धि को प्राप्त करें।",
      img: one,
      tag : "",
      date: "15,Feb,2023",
      city: "Bhopal",
      tag : "सत्संग",
      // share : share,
      // date : '12th March'
    },
    {
      title : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल",
      desc : "विश्व जागृति मिशन इंटरनेशनल योग स्कूल (वीजेएमआईवाईएस) में योग के वास्तविक सार को समझें और इसके पवित्र ज्ञान से खुद को अवगत कराएं। आज के तनावपूर्ण समय में शांति...       ",
      img: two,
      tag: "",
      date: "23,May,2023",
      city: "Delhi",
      tag : "पूर्णिमा",
      // share : share,
      // date : '10th February'
    },

  ]
const SamajiKalyaan = () => {

      const [arr1 , setArr1] = useState(KaryaKramArray)
  return (
    
    <div className='samajkalyaan'>
        <div className="samajkalyaanContainer">
            <div className="samajkalyaanleft">
              <div className="samajkalyaanTitle">
              विशेष रूप से सामाजिक कल्याण के संदर्भ में विश्व जागृति मिशन के कार्यक्रम

              </div>
            </div>
            <div className="samajkalyaanright">
            <div className="boxesContainer1">
                {arr1.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer1" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                        <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'16px'}}>अन्वेषण करें {'>'} </button>
                 
                    </div>
                        </div>
                        
                        </>
                    )
                })}


            </div>


            </div>
        </div>

    </div>
  )
}

export default SamajiKalyaan