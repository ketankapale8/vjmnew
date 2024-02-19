import React from 'react';
import Banner from '../../../src/assets/newassets/banner/Banner3.png'
import NewBanner from '../../newpagescommoncomp/newbanner/NewBanner';
import MiddleContainer from '../../newpagescommoncomp/middleContainer/middleContainer';
import GirlChildContainer from '../../newpagescommoncomp/girlChildContainer/GirlChildContainer';
import FAQ from '../../newpagescommoncomp/FAQ\'s/FAQ';
import FooterBanner from '../../newpagescommoncomp/FooterBanner/FooterBanner';
import GalleryContainer from '../../newpagescommoncomp/GalleryContainer/GalleryContainer';



const LibraryDonation = () => {
    const girlChildArr =[
        {
            title : "Vishwa Jagriti Mission Activities/Solution to Provide Free Books to Students",
            desc : "VJM is working to improve the efficiency and transparency of its library building program. VJM is ensuring that a nice library building with free books is available for those who need it most, working with volunteers and a large family of donors. The school library is crucial for education, literacy, and information provision, as well as for the social, economic, spiritual, and cultural development of a nation. Hence, the school library must have sufficient and sustained funding for trained staff, technologies, materials, and facilities. Furthermore, the role of libraries has evolved. Today, they are not just about books but are envisioned as spaces for the better education and overall development of students. They are an integral part of schooling.",
    
            // title2 : "Objective of Sponsor a Girl Child Program",
            // desc2 : "One of the key objectives of VJM’s Sponsor a Girl Child program is to encourage and support girls and women to pursue school education. And that will happen if we have enough resources for this noble cause. As a society, we have to come forward and invest in the education of such girls who cannot afford it, and when we do that, we witness a big impact on communities and society. Educated girls are less likely to marry early and lead healthy and productive lives. It also boosts the economy while minimizing inequity, ultimately leading to a healthier and more prosperous society.",
    
            // title3 : "Key Objectives",
            arr : [
                {
                    title : "These spaces also play a transformative role in the lives of students from marginalised families by providing access to books, reading materials, and a safe space for reading peacefully.",
                    title1 : "As a society, it is time for us to acknowledge the importance of libraries in schools and the role they can play in transforming the lives of students.",
                    title2 : "Project School Library Building is a participatory program where you can sponsor a part of the library building, books, and materials.",
                    title3 : "For as little as INR 5000–15,000, you can help a student in our school complete his or her education without facing any difficulty in studying.",
                    title4: "As a sponsor, you will receive photographs and profiles of children benefiting from your support, followed by periodic progress reports.",
                    title5: "Your small contribution has the power to bring about a better academic situation for poor and marginalised children at VJM institutions.",
                    title6: "VJM is a prominent spiritual and social service organisation and one of India’s most trustworthy NGOs, founded in 1991 by HH Sudhanshu Ji Maharaj. It has worked tirelessly for over three decades to improve the lives of impoverished children and support them in enjoying their childhood. With the aid of donors and volunteers from India and overseas, the organisation is striving to address challenges such as a lack of education, healthcare, nutrition, and safety.",
                    title7: "With your support, we can continue our charitable programs more easily and even expand them to different parts of India."
    
                }
            ]
        }
    ]
    
    const leftArray = [
      {
          title1 : "Books Empower the Minds - Give Our School Children Right to Free Education",
          desc : "The library building program will ensure free books, including academic, spiritual, and general knowledge books, magazines, newspapers, and audio-visual content of important textbooks, for children studying at Vishwa Jagriti Mission’s Gyandeep Vidyalaya, Faridabad, India. The program will enable underprivileged children to continue their school education without having to purchase a book. It will encourage them to study well. Easily accessible books and resources will work like a big motivation for children, and they will also reduce the financial burden on parents.",
          title2 : "Objective of Sponsor a Girl Child Program",
          desc2 : "One of the key objectives of VJM’s Library Building Program is to encourage and support children to study well without thinking about the financial burden on parents to purchase books. And that will happen if we have enough resources. As a society, we have to come forward and invest in the education of such children who cannot afford it, and when we do that, we witness a big impact on communities and society. A rich library keeps children motivated. They develop knowledge and spend more time on the school premises.",
      
      
          title3 : "Key Objectives",
          arr : [
              {
                  title : "Make important text books available in the school. Allow students to be creative and inquisitive. Boost the knowledge of students",
                  title1 : "Improve socialisation among children. Motivate students to spend more time on school premises",
                  title2 : "Keep the children happy. Reduce the financial burden on parents",
                  title3 : "Increase attendance at the school Encourage parents to send their children to school to study well and learn better"
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
                      title : "Donate book for a student for a year",
                      amount : "500"
                  },
                  {
                      title : "Ensure a regular supply of books for a class for a year          ",
                      amount : "5000"
                  },
                  {
                      title : "Donate for furniture in the library (table, chair & almirah)",
                      amount : "5000"
                  },
                  {
                      title : "Donate school bags to all students for a year",
                      amount : "8000"
                  },
                  {
                      title : "Donate stationary to all students for a year",
                      amount : "20000"
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
          title : "Come Forward to Build a Rich Library",
          desc : "Contribute to Kanya Atmanirbhar Abhiyan to Build Library",
          desc2 : "",
          amountArr: [
              {
                  amt : 250000
              },
              {
                  amt : 100000
              },
              {
                  amt : 50000
              },
             
              {
                  amt : 'other'
              }
          ],
    
          amountDesc : "2,50,000 donate to build the entire library.",
    
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

export default LibraryDonation