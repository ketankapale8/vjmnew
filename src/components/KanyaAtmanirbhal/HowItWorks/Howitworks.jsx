import React from 'react';
import './howitworks.scss';
import vectorDesign from '../../../assets/commonAssets/Vector.png'

import one from '../../../assets/newassets/girl/1.png';
import two from '../../../assets/newassets/girl/2.png';
import three from '../../../assets/newassets/girl/3.png';
import four from '../../../assets/newassets/girl/4.png';
import five from '../../../assets/newassets/girl/5.png';
import six from '../../../assets/newassets/girl/6.png';


const howitworksArr1 = [
    {
        title :"Identify Out of school girls ",
        img : one,
        desc : "Survey of nearby slum areas to identify families with girl children who are not going to school"
    },
    {
        title :"Encourage and Mobilise Families",
        img : two,
        desc : "Encouraging and motivating families to send their girl children to school for education and skill development"

    },  {
        title :" Motivate Families with the best facility",
        img : three,
        desc : "Motivate children with the best facilities, including free healthcare and midday meals"

    },
];

const howitworksArr2 = [
    {
        title :"Hire efficient staff and invite volunteers",
        img : four,
        desc : "Hire efficient staff and invite volunteers to ensure regular classes and quality education"
    },
    {
        title :"Vocational Training to ensure job",
        img : five,
        desc : "Provide vocational training to students like computer education, stitching course, beautician course"
    },
    {
        title :"Yes! I want to help",
        img : six,
        desc : "Contribute"
    }
]

const Howitworks = () => {
  return (
    <div className='howitworks'>
        <div className="howitworksContainer">
        <h2>How does project Kanya Atmanirbhar Abhiyan work?</h2>
      <img src={vectorDesign} className='middleImg'/>

            <div className="worksContainer1">
            {howitworksArr1.map(item=> {
                return (
                    <>
                        <div className="worksBlock">
                            <img src={item.img}/>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </>
                )
            })}
            </div>

            <div className="worksContainer1">
            {howitworksArr2.map(item=> {
                return (
                    <>
                        <div className="worksBlock">
                            <img src={item.img}/>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Howitworks