import React from 'react';
import './girlchildcontainer.scss';
import girlBanner from '../../assets/newassets/banner/girlImg.png';
import vectorDesign from '../../assets/commonAssets/vectorwhite.png'

const GirlChildContainer = ({girlChildArr}) => {
    // const girlChildArr =[
    //     {
    //         title : "Challenges Faced By Girl Child In Indian Society",
    //         desc : "In India, challenges arise in the journey of a girl child even before she takes birth. At a very young age, as early as the age of 8–10, girls face challenges like forced marriage, child labour, female genital mutilation, and gender discrimination.",

    //         // title2 : "Objective of Sponsor a Girl Child Program",
    //         // desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",

    //         // title3 : "Key Objectives",
    //         arr : [
    //             {
    //                 title : "Percentage of the female population aged 6 years and above who ever attended school increased but only 41% of women (15-49 years) have 10 or more years of schooling as opposed to 50.2% of men",
    //                 title1 : "India accounts for 45.8 million of the world’s 142.6 million “missing females” over the past 50 years",
    //                 title2 : "4.6 lakh girls were “missing” at birth each year from 2013 to 2017, as a result of sex selection that prefers a male child to a female child",
    //                 title3 : "Every year more than 1.5 million girls in India are married before they turn 18 (UN Report)",
    //                 title4: "India is the only large country where more girls die than boys (UNICEF)",
    //                 title5: "Girls are more likely to drop out of school (UNICEF)",
    //                 title6: "Estimates suggest that each year, at least 1.5 million girls under 18 get married in India, which makes it home to the largest number of child brides in the world (UNICEF)",
    //                 title7: "The increase in the dropout rate of girls from schools across the country is alarming. (UNICEF)"

    //             }
    //         ]
    //     }
    // ]
  return (
    <div className='girlchildcontainer'>
        <div className="girlchildmainBox">
            <div className="girlchildLeft">
            {girlChildArr.map(item => {
                return (
                    <>
                    <h3 className="girlchildTitle">{item.title}</h3>
                    <img src={vectorDesign} className='middleImg'/>

                    <p style={{paddingTop:'10px'}}>{item.desc}</p>

                    <ul>
                        {item.arr.map(i=>{
                            return (
                                <>
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

                                <li>

                          <p>{i.title4}</p>
                                 </li>
                                 <li>                                 

<p>{i?.title5}</p>
                                 </li>
                                 <li>
                                 <p>{i?.title6}</p>

                                 </li>
                                 <li>
<p>{i?.title7}</p>

                                 </li>

                                
                                </>
                            )
                        })}
                    </ul>

                    
                    
                    </>
                )
            })}
            </div>

            <div className="girlchildRight">
                <img className="girlImg" src={girlBanner}/>

            </div>
        </div>
    </div>
  )
}

export default GirlChildContainer