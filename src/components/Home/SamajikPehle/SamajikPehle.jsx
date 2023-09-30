import React from 'react';
import './samajikpehle.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png';
import one from '../../../assets/samajikpehle/1.png'
import two from '../../../assets/samajikpehle/2.png'
import three from '../../../assets/samajikpehle/3.png'
import four from '../../../assets/samajikpehle/4.png'

const box1 = [
  {
    title : "गुरुकुल",
    img : one
  }, 
  {
    title : "गौशाला",
    img : two 
  }
]
// गुरुकुल
// आपदा राहत
const box2 = [
  {
    title : "आपदा राहत",
    img : three
  }, 
  {
    title : "पृौढ अबस्था",
    img : four
  }
]

const SamajikPehle = () => {
  return (
    <div className='samajik'>
        <div className="samajikContainer">
            <div className="samajikleft">
            <div className="samajikTitle">सामाजिक पहलें</div>
            <img className="samajikImg" src={vectorDesign} alt="design"/>
            <div className="samajikDesc">चाहे भुखमरी को खत्म करना हो, भीषण सर्दी या चिलचिलाती गर्मी में राहत देना हो या वृद्धावस्था में वृद्धजनों के स्वास्थ्य संबंधी जरूरतों का ध्यान रखना हो, विश्व जागृति मिशन ज़रूरतमंदों की भलाई के लिए हमेशा आगे रहता है। ऐसा हम अपनी सामाजिक पहलों के माध्यम से करते हैं।</div>
            <button className='exploremore'>और देखें </button>

            </div>

            <div className="samajikright">
              <div className="samajikImgContainer">
              {box1.map(item=>{
                return (
                  <>
                  <div className="imgBox">
                    <img src={item.img} alt="boxImgs" className='imgs' />
                    <p>{item.title}</p>
                  </div>
                  
                  </>
                )
              })}
                </div>

                <div className="samajikImgContainer">
              {box2.map(item=>{
                return (
                  <>
                  <div className="imgBox">
                    <img src={item.img} alt="boxImgs" className='imgs' />
                    <p>{item.title}</p>
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

export default SamajikPehle