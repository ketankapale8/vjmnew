import React from 'react';
import './middlecontainer.scss';

const MiddleContainer = ({leftArray , rightArray}) => {


    // const leftArray = [
    //     {
    //         title1 : "Ensure Access to Good Education for the Needy Girl Child",
    //         desc : "The girl child sponsorship program will enable about 1400 girl children studying at Vishwa Jagriti Mission’s Gyandeep Vidyalaya, Faridabad, to continue education with all facilities, including books, stationery, uniforms, and midday meals. The program will enable underprivileged girls to complete their school education (from nursery to class 8). It will allow them to attend school with dignity throughout the academic year. The program will also assist girl children at VJM’s Kaushal Vikas Kendra in learning vocational skills and being able to either find job opportunities or create a better tomorrow for themselves through entrepreneurship.",
    //         title2 : "Objective of Sponsor a Girl Child Program",
    //         desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",
        
        
    //         title3 : "Key Objectives",
    //         arr : [
    //             {
    //                 title : "Motivate underprivileged families to send their girl children to school and vocational training centres",
    //                 title1 : "Give free education; distribute free uniforms, books, stationery, and bags",
    //                 title2 : "Nutritious mid-day meal",
    //                 title3 : "Increase attendance at the school"
    //             }
    //         ]
    //     }
    // ]

    // const rightArray = [
    //         {
                
    //             amt1 : 415200,
    //             totalAmt :2000000,
    //             percentage : 200000/415200 * 100,
    //             donations : "114",
    //             remaining : `${2000000 - 415200}`,
                
    //             remainingContent : [
    //                 {
    //                     title : "Give stationary for 1 School Girl Child for 1 Year",
    //                     amount : "1000"
    //                 },
    //                 {
    //                     title : "Give Uniform for 1 School Girl Child for 1 Year",
    //                     amount : "2000"
    //                 },
    //                 {
    //                     title : "Give Books to 1 Girl Child Student for a year",
    //                     amount : "1000"
    //                 },
    //                 {
    //                     title : "Give All Education Material to 1 School Girl Child for 1 Year",
    //                     amount : "4000"
    //                 },
    //                 {
    //                     title : "Sponsor a Girl Child for 1 Year",
    //                     amount : "12000"
    //                 },

    //                 {
    //                     title : "Donate as much as you want",
    //                 }
    //             ]
    //         }, 

           
    //     // sub = [
            
    //     // ]
    // ]

    // console.log(rightArray.map(item => item.remainingContent))
  return (
    <div className='middleContainer'>
        <div className="middleContainerMain">
            <div className="leftmiddle">
            {leftArray.map(item=> {
                    return (
                        <>  
                        <div className='itemlist'>
                            <h4>{item.title1}</h4>
                            <p>{item.desc}</p>
                        </div>
                        <div className='itemlist'>

                            <h4>{item.title2}</h4>
                            <p>{item.desc2}</p>
                        </div>

                        <div className='itemlist'>
                            <h4>{item.title3}</h4>
                            {item?.arr?.map(i=>{
                                return (
                                    <>  <ul>
                                        <li>
                                            <p>{i?.title}</p>

                                        </li>
                                        <li>
                                            <p>{i?.title1}</p>

                                        </li>
                                        <li>
                                            <p>{i?.title2}</p>

                                        </li>
                                        <li>
                                            <p>{i?.title3}</p>

                                        </li>
                                    </ul>
                                      
                                    
                                    </>

                                )
                            })}

                        </div>

                        </>
                        )
                        
                    })}
                    </div>
            <div className="rightmiddle">
                    {rightArray.map(item=> {
                        return (
                            <>
                            <div className="donationContainer">
                            <h3 className='rightTitle'>
                                <span >₹{item.amt1}</span> raised of <span style={{color:'black'}}>₹{item.totalAmt}</span> goal
                            </h3>
                            <div className="progressBarContainer">
                                <div className="parent">
                                    <div className="child" style={{width : `${item.percentage}%`}}>
                                        <h4 className='progressText'>{Math.round(item.percentage)}%</h4>
                                    </div>
                                </div>
                                <div className="remaining">

                                    <div className="remainingLeft">
                                        <h4>Donations : {item.donations}</h4>
                                        <h4>Remaining :₹{item.remaining}</h4>

                                    </div>
                                    <div className="remainingRight">
                                        <button>Donate</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {item.remainingContent.map(item => {
                                return (
                                    <>
                                <div className='donationContainer1'>
                                <div className="rightTitleContainer1">
                                        <h3 className='rightTitle1'>
                                            {item?.title}
                                            
                                        </h3>
                                        {item?.amount && (
                                        <h3 className='rightTitle1'>
                                            ₹{item?.amount}
                                            
                                        </h3>
                                        )}

                                </div>

                                <div className="rightDonateContainer">
                                    <button>Donate</button>
                                </div>

                                </div>
                                    
                                    </>
                                )
                            })}
                            
                            </>

                            
                        )
                    })}

            </div>

        </div>


    </div>
  )
}

export default MiddleContainer