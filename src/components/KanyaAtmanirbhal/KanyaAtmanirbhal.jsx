import React from 'react';
import HeaderImgC from '../../common/HeaderImgContainer/HeaderImgC';
import Banner from '../../assets/newassets/banner/Banner2.png'
import BannerImg from '../../assets/newassets/banner/KanyaBanner.png';
import GirlChildContainer from '../../newpagescommoncomp/girlChildContainer/GirlChildContainer';
import './kanyaaatmanirbhal.scss'
import NewBanner from '../../newpagescommoncomp/newbanner/NewBanner';
import Howitworks from './HowItWorks/Howitworks';
import AboveBottomContainerForKanya from '../../newpagescommoncomp/AboveBottomContainerForKanya/AboveBottomContainerForKanya';
import one from '../../assets/newassets/kanya/1.png';
import two from '../../assets/newassets/kanya/2.png';
import three from '../../assets/newassets/kanya/3.png';
import four from '../../assets/newassets/kanya/4.png';
import GirlStories from '../../newpagescommoncomp/girlStories/GirlStories';


const KanyaAtmanirbhal = () => {
    const girlChildArr =[
        {
            title : "What We Do",
            desc : "Established in the year 2002 in Delhi NCR’s Faridabad area, Gyandeep Vidyalaya is an eminent non-profit educational institution that aims to provide a promising future to the underprivileged children from ragpicker families and slum areas, especially girl children.",
    
            // title2 : "Objective of Sponsor a Girl Child Program",
            // desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",
    
            // title3 : "Key Objectives",
            arr : [
                {
                    title : "Teach and train girl children and women from slum areas",
                    title1 : "Free education (from nursery to class 8); distribution of free uniforms, books, stationery, and bags",
                    title2 : "Every day, students are served a nutritious and tasty midday meal that is free of cost",
                    title3 : "Devotees and volunteers celebrate their birthdays and anniversaries by contributing towards the meals for the school’s children",
                    title4: "India is the only large country where more girls die than boys (UNICEF)",
                    title5: "Girls are more likely to drop out of school (UNICEF)",
                    title6: "Estimates suggest that each year, at least 1.5 million girls under 18 get married in India, which makes it home to the largest number of child brides in the world (UNICEF)",
                    title7: "The increase in the dropout rate of girls from schools across the country is alarming. (UNICEF)"
    
                }
            ]
        }
    ]

    const bannerData = [
        {
            title : "Transform the lives of children",
            desc : "Contribute to Kanya Atmanirbhar Abhiyaan",
            desc2 : "Sponsor a girl",
            amountArr: [
                {
                    amt : 12000
                },
                {
                    amt : 15000
                },
                // {
                //     amt : 45000
                // },
               
                {
                    amt : 'other'
                }
            ],
      
            amountDesc : "sponsor 1 girl/year.",
      
            commonDesc : "Your support to uplift these children gives you 50% tax exemption under section 80G"
        }
      ]

      const ServicesArray1 = [
        {
          title : "Sponsor a Girl",
          desc : "Become a compassionate parent by sponsoring a child’s education.     ",
          img: one,
          tag : "",
          raised : 649412.00,
          goal : 2000000.00,
          percentage : 649412/2000000 * 100,
          date: "15,Feb,2023",
          city: "Bhopal",
          tag : "सत्संग",
          // share : share,
          // date : '12th March'
        },
        {
          title : "Feed Children",
          desc : "Arrange nutritious food items for a small group of children for a day/week/month   ",
          img: two,
          raised : 525615.00,
          goal : 1000000.00,
          percentage : 525615.00/1000000 * 100,
          tag: "",
          date: "23,May,2023",
          city: "Delhi",
          tag : "पूर्णिमा",
          // share : share,
          // date : '10th February'
        },
    
      ]

      const ServicesArray2 = [
        {
          title : "Bring Books for Children",
          desc : "Donate for the betterment of free library facilities for children.      ",
          img: three,
          raised :  649412.00,
          goal : 2000000.00,
          percentage : 649412.00/2000000 * 100,
          tag : "",
          date: "15,Feb,2023",
          city: "Bhopal",
          tag : "सत्संग",
          // share : share,
          // date : '12th March'
        },
        {
          title : "Let’s Make Them Skillful",
          desc : "Ensure the development of skills in needy women for a better tomorrow.   ",
          img: four,
          raised : 525615.00,
          goal : 1000000.00,
          percentage : 525615.00/1000000 * 100,          
          tag: "",
          date: "23,May,2023",
          city: "Delhi",
          tag : "पूर्णिमा",
          // share : share,
          // date : '10th February'
        },
    
      ]


  return (
    <div className='kanya'>
        <HeaderImgC img={BannerImg} />
        <GirlChildContainer girlChildArr={girlChildArr}/>
        <Howitworks/>
        <div style={{paddingTop:'0px'}}>
            <NewBanner bannerData={bannerData} Banner={Banner} />
        </div>
        <AboveBottomContainerForKanya ServicesArray1={ServicesArray1} ServicesArray2={ServicesArray2}/>
        <GirlStories/>

    </div>
  )
}

export default KanyaAtmanirbhal