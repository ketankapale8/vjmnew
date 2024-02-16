import React from 'react';
import './sponsoragirl.scss';
import NewBanner from '../../newpagescommoncomp/newbanner/NewBanner';
import Banner from '../../../src/assets/newassets/banner/Banner1.png'
import MiddleContainer from '../../newpagescommoncomp/middleContainer/middleContainer';
import GirlChildContainer from '../../newpagescommoncomp/girlChildContainer/GirlChildContainer';
import FAQ from '../../newpagescommoncomp/FAQ\'s/FAQ';
import FooterBanner from '../../newpagescommoncomp/FooterBanner/FooterBanner';
import GalleryContainer from '../../newpagescommoncomp/GalleryContainer/GalleryContainer';


const SponsorAGirl = () => {
  const girlChildArr =[
    {
        title : "Challenges Faced By Girl Child In Indian Society",
        desc : "In India, challenges arise in the journey of a girl child even before she takes birth. At a very young age, as early as the age of 8–10, girls face challenges like forced marriage, child labour, female genital mutilation, and gender discrimination.",

        // title2 : "Objective of Sponsor a Girl Child Program",
        // desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",

        // title3 : "Key Objectives",
        arr : [
            {
                title : "Percentage of the female population aged 6 years and above who ever attended school increased but only 41% of women (15-49 years) have 10 or more years of schooling as opposed to 50.2% of men",
                title1 : "India accounts for 45.8 million of the world’s 142.6 million “missing females” over the past 50 years",
                title2 : "4.6 lakh girls were “missing” at birth each year from 2013 to 2017, as a result of sex selection that prefers a male child to a female child",
                title3 : "Every year more than 1.5 million girls in India are married before they turn 18 (UN Report)",
                title4: "India is the only large country where more girls die than boys (UNICEF)",
                title5: "Girls are more likely to drop out of school (UNICEF)",
                title6: "Estimates suggest that each year, at least 1.5 million girls under 18 get married in India, which makes it home to the largest number of child brides in the world (UNICEF)",
                title7: "The increase in the dropout rate of girls from schools across the country is alarming. (UNICEF)"

            }
        ]
    }
]

const leftArray = [
  {
      title1 : "Ensure Access to Good Education for the Needy Girl Child",
      desc : "The girl child sponsorship program will enable about 1400 girl children studying at Vishwa Jagriti Mission’s Gyandeep Vidyalaya, Faridabad, to continue education with all facilities, including books, stationery, uniforms, and midday meals. The program will enable underprivileged girls to complete their school education (from nursery to class 8). It will allow them to attend school with dignity throughout the academic year. The program will also assist girl children at VJM’s Kaushal Vikas Kendra in learning vocational skills and being able to either find job opportunities or create a better tomorrow for themselves through entrepreneurship.",
      title2 : "Objective of Sponsor a Girl Child Program",
      desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",
  
  
      title3 : "Key Objectives",
      arr : [
          {
              title : "Motivate underprivileged families to send their girl children to school and vocational training centres",
              title1 : "Give free education; distribute free uniforms, books, stationery, and bags",
              title2 : "Nutritious mid-day meal",
              title3 : "Increase attendance at the school"
          }
      ]
  }
]

const rightArray = [
      {
          
          amt1 : 415200,
          totalAmt :2000000,
          percentage : 200000/415200 * 100,
          donations : "114",
          remaining : `${2000000 - 415200}`,
          
          remainingContent : [
              {
                  title : "Give stationary for 1 School Girl Child for 1 Year",
                  amount : "1000"
              },
              {
                  title : "Give Uniform for 1 School Girl Child for 1 Year",
                  amount : "2000"
              },
              {
                  title : "Give Books to 1 Girl Child Student for a year",
                  amount : "1000"
              },
              {
                  title : "Give All Education Material to 1 School Girl Child for 1 Year",
                  amount : "4000"
              },
              {
                  title : "Sponsor a Girl Child for 1 Year",
                  amount : "12000"
              },

              {
                  title : "Donate as much as you want",
              }
          ]
      }, 

     
  // sub = [
      
  // ]
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
              amt : 30000
          },
          {
              amt : 45000
          },
         
          {
              amt : 'other'
          }
      ],

      amountDesc : "sponsor 1 girl/year.",

      commonDesc : "Your support to uplift these children gives you 50% tax exemption under section 80G"
  }
]

  return (
    <>
        <NewBanner bannerData={bannerData} Banner={Banner} />
        <MiddleContainer leftArray={leftArray} rightArray={rightArray}/>
        <GirlChildContainer girlChildArr={girlChildArr}/>
        <FAQ/>
        <GalleryContainer/>
        <FooterBanner/>
    
    </>
  )
}

export default SponsorAGirl