import React from 'react';
import Banner from '../../../src/assets/newassets/banner/Banner4.png'
import NewBanner from '../../newpagescommoncomp/newbanner/NewBanner';
import MiddleContainer from '../../newpagescommoncomp/middleContainer/middleContainer';
import GirlChildContainer from '../../newpagescommoncomp/girlChildContainer/GirlChildContainer';
import FAQ from '../../newpagescommoncomp/FAQ\'s/FAQ';
import FooterBanner from '../../newpagescommoncomp/FooterBanner/FooterBanner';
import GalleryContainer from '../../newpagescommoncomp/GalleryContainer/GalleryContainer';
import GirlStories from '../../newpagescommoncomp/girlStories/GirlStories';



const KaushalVikasYojna = () => {
    const girlChildArr =[
        {
            title : "VJM Activities/Solution to Tackle Unskillfulness Among Women",
            desc : "VJM is working tirelessly to improve the efficiency and transparency of its skill development programs. VJM ensures that free training facilities reach those women and girls who need them most, working with volunteers and a large family of donors. ",
    
            // title2 : "Objective of Sponsor a Girl Child Program",
            // desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",
    
            // title3 : "Key Objectives",
            arr : [
                {
                    title : "Project Skill Development is a participatory program where you can sponsor a training centre for women and girls for a minimum period of one year. For as little as INR 5000–15,000, you can train a woman in our centre, helping her complete her training without any difficulty.",
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
          title1 : "Let's Help Needy Women in Acquiring and Upgrading their Skills Without Placing a Financial Burden on Them",
          desc : "The skill development program will ensure that girls and women enrolled at VJM’s Kaushal Vikas Kendra, Faridabad, have the required skills to become employable and develop entrepreneurial capabilities. The program will enable underprivileged girls and women to continue their school education along with skill development. The training facilities will be free and the benefits thereby will encourage more girls and women, belonging to any economic background, to enroll in skill development courses and open doors to job and business opportunities.",
          title2 : "Objective of the Skill Development Program",
          desc2 : "One of the key objectives of VJM’s skill development program is to encourage and support girl students and women to continue education while developing skills in the beauty, wellness, and apparel sectors through National Skill Development Corporation (NSDC) approved courses. And that will happen if we have enough resources, trainers, and infrastructure to enrol more needy girls and women. As a society, we have to come forward and invest in the skill development of such women who cannot afford it, and when we do that, we witness a big impact on communities and society. ",
      
      
          title3 : "Key Objectives",
          arr : [
              {
                  title : "Encourage needy girls and women to acquire job-oriented skills",
                  title1 : "Provide Free Training facilities . Give a platform to women and girls to boost their creativity and imagination",
                  title2 : "Develop a big skill and training infrastructure with all facilities",
                  title3 : "Make girls and women in large numbers self-dependent. Address non-employability  "
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
                      title : "Sponsor complete Apparel training material for a course",
                      amount : "5000"
                  },
                  {
                      title : "Sponsor to develop a state-of-the-art training centre  ",
                      amount : "7000"
                  },
                  {
                      title : "Sponsor complete beautician training material for a course",
                      amount : "8000"
                  },
                  {
                      title : "Sponsor a Computer or Sewing Machine",
                      amount : "35000"
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
          title : "Come Forward to Empower Underprivileged Girls",
          desc : "Contribute to Kanya Atmanirbhar Abhiyan to Build Library",
          desc2 : "",
          amountArr: [
              {
                  amt : 15000
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
        <GirlStories/>
        <FooterBanner/>
    
    </>
  )
}

export default KaushalVikasYojna