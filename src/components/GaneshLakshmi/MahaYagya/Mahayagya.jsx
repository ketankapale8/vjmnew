import React from 'react';
import './mahayagya.scss';
import vectorDesign from '../../../assets/commonAssets/Vector.png';
import ban1 from '../../../assets/GaneshLakshmi/ban1.png'
import ban2 from '../../../assets/GaneshLakshmi/ban2.png'


const Mahayagya = () => {
  return (
    <div className='mahayagya'>
        <div className="mahayagyaContainer">
        <div className="mahayagyaTitle">महायज्ञ उपहार / स्मारिका</div>
        <img className="mahayagyaImage" src={vectorDesign} alt="design"/>
        <div className="descContainer">
        <div className="mahayagyaDesc">इस महायज्ञ में भाग लेने वालों को परम पूज्य महाराजश्री की पवित्र उपस्थिति में पवित्र श्री यंत्र, सुमेरु यंत्र और देवी दुर्गा की धातु की मूर्ति प्राप्त होगी। ये दिव्य उपहार भक्तों के घर की आभा को शुद्ध और धन और समृद्धि के स्थायी निवास में बदल देंगे।</div>
        <div className="mahayagyaDesc"> विद्वान ब्राह्मणों द्वारा वैदिक विधि से श्री गणेश मंदिर, शिव मंदिर, कल्पवृक्ष वाटिका, राधाकृष्ण मंदिर, नवग्रह वाटिका में लगातार 9 दिन पूजन-अर्चन से सिद्ध कर श्री यंत्र, सुमेरु यंत्र एवं धातु की दुर्गा माता की मूर्ति, जो कि आपके जीवन में शुभ-लाभ, रिद्धि-सिद्धि की स्थापना करेंगे। यजमानों को स्थिर लक्ष्मी के वास हेतु भेजे जायेंगे|</div>

        </div>

        <div className="mahayagyaImgContainer">
            <img className='imgs' src={ban1}/>
            <img className='imgs' src={ban2}/>

        </div>
        </div>
    </div>
  )
}

export default Mahayagya