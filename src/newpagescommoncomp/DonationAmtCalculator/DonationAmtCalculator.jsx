import React, { useState } from 'react';
import './donationamt.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png'



// const bannerData = [
//     {
//         title : "Transform the lives of children",
//         desc : "Contribute to Kanya Atmanirbhar Abhiyaan",
//         desc2 : "Sponsor a girl",
//         amountArr: [
//             {
//                 amt : 12000
//             },
//             {
//                 amt : 30000
//             },
//             {
//                 amt : 45000
//             },
           
//             {
//                 amt : 'other'
//             }
//         ],

//         amountDesc : "sponsor 1 girl/year.",

//         commonDesc : "Your support to uplift these children gives you 50% tax exemption under section 80G"
//     }
// ]
const DonationAmtCalculator = ({bannerData}) => {
    const [amount , setAmount] = useState(0)
  return (
    <div className='donationContainer'>
        {bannerData.map(item => {
            return (
                <>
                    <h3>{item.title}</h3>
                    <div style={{display:'flex', flexDirection:'column',gap:'0px'}}>
                        <p>{item.desc}</p>
                        <p>{item.desc2}</p>

                    </div>

            <img className="middleImg" src={vectorDesign} alt="design"/>

                    <div className='contributeSection'>
                        <div className='buttonContainer'>
                        {item.amountArr.map(item=> {
                            return (
                                <button className={amount == item.amt ? "buttons-current" :"buttons"}
                                value={item.amt} 
                                onClick={(e)=> setAmount(e.target.value)}>{item.amt}</button>
                                
                                )
                            })}
                            </div>

                        <h4>{`${amount} ${item.amountDesc}`}</h4>
                        <button className='contributeBtn'>Contribute</button>
                        <p className='commonDesc'>{item.commonDesc}</p>
                        

                    </div>
                </>
            )
        })}
    </div>
  )
}

export default DonationAmtCalculator