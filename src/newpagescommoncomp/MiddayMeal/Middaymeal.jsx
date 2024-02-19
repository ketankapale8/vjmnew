import React from 'react';
import Banner from '../../../src/assets/newassets/banner/Banner6.jpg'
import NewBanner from '../../newpagescommoncomp/newbanner/NewBanner';
import MiddleContainer from '../../newpagescommoncomp/middleContainer/middleContainer';
import GirlChildContainer from '../../newpagescommoncomp/girlChildContainer/GirlChildContainer';
import FAQ from '../../newpagescommoncomp/FAQ\'s/FAQ';
import FooterBanner from '../../newpagescommoncomp/FooterBanner/FooterBanner';
import GalleryContainer from '../../newpagescommoncomp/GalleryContainer/GalleryContainer';



const MiddayMeal = () => {
    const girlChildArr =[
        {
            title : "VJM Activities/Solution to Tackle Classroom Hunger",
            desc : "VJM is working to improve the efficiency and transparency of its midday meal programs. VJM ensures that food reaches those who need it most, working with volunteers and a large family of donors. ",
    
            // title2 : "Objective of Sponsor a Girl Child Program",
            // desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",
    
            // title3 : "Key Objectives",
            arr : [
                {
                    title : "Project Midday Meal is a participatory program where you can sponsor a one-time meal for our school children for a minimum period of one year. For as little as INR 5000–15,000, you can feed a student in our school, helping him or her complete his or her education without facing classroom hunger.",
                    title1 : "As a sponsor, you will receive photographs and profiles of women and girls benefiting from your support, followed by periodic progress reports.",
                    title2 : "Your small contribution has the power to bring about better conditions for needy women and girls at VJM institutions.",
                    title3 : "For as little as INR 5000–15,000, you can help a student in our school complete his or her education without facing any difficulty in studying.",
                    title4: "As a sponsor, you will receive photographs and profiles of children benefiting from your support, followed by periodic progress reports.",
                    title5: "Your small contribution has the power to bring about a better academic situation for poor and marginalised children at VJM institutions.",
                    title6: "As a sponsor, you will receive photographs and profiles of children benefiting from your support, followed by periodic progress reports.",
                    title7: "Ensure access to trainers, infrastructure, resources for a year: INR 50000/- | Contribute to developing a state-of-the-art training centre:  INR 50000-100000/- "
    
                }
            ]
        }
    ]
    
    const leftArray = [
      {
          title1 : "Ensure Access to a Nutritious Midday Meal for School Children",
          desc : "The Midday Meal program will ensure a nutritious meal for children studying at Vishwa Jagriti Mission’s Gyandeep Vidyalaya. The program will enable underprivileged children to continue their school education (from nursery to class 8) with a peaceful mind and healthy body. It will encourage them to attend school regularly throughout the academic year. A wholesome, freshly cooked lunch served hygienically will work like a big motivation for children, and it will also reduce the burden on parents.",
          title2 : "Objective of the Midday Meal Program",
          desc2 : "One of the key objectives of VJM’s Midday Meal program is to encourage and support children to continue school education. And that will happen if we have enough resources to end classroom hunger. As a society, we have to come forward and invest in the education and health of such children who cannot afford it, and when we do that, we witness a big impact on communities and society. A nutritious meal keeps children healthy and motivated. They join school without a break and study well. ",
      
      
          title3 : "Key Objectives",
          arr : [
              {
                  title : "End classroom hunger. Increase school enrolment",
                  title1 : "Increase school attendance Improve socialisation among children",
                  title2 : "Address malnutrition",
                  title3 : "Keep the children healthy and happy "
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
                      title : "Ensure 1 time midday meal for 1 Child for 1 year",
                      amount : "1725"
                  },
                  {
                      title : "Ensure 1 time midday meal for 2 Child for 1 year ",
                      amount : "3450"
                  },
                  {
                      title : "Ensure 1 time midday meal for 3 Child for 1 year",
                      amount : "5175"
                  },
                  {
                      title : "Ensure 1 time midday meal for 5 Child for 1 year",
                      amount : "8625"
                  },

                  {
                    title : "SSponsor 1 girl for a year",
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
          title : "Let’s End Classroom Hunger",
          desc : "Contribute to Kanya Atmanirbhar Abhiyan ",
          desc2 : "- Mid-Day Meal Program",
          amountArr: [
              {
                  amt : 1725
              },
              {
                  amt : 3460
              },
              {
                  amt : 8625
              },

              {
                amt : 17250
            },
             
              {
                  amt : 'other'
              }
          ],
    
          amountDesc : "Sponsor 1 girl trainee for a course (Beautician / Appreal / Computer education)",
    
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

export default MiddayMeal