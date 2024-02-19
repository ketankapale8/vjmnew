import React from 'react';
import './birthdaycontribution.scss'
import NewBanner from '../../newpagescommoncomp/newbanner/NewBanner';
import Banner from '../../../src/assets/newassets/banner/Banner5.png'

const BirthdayContribution = () => {
  const bannerData = [
    {
        title : "Make your birthday extra special with a small act of kindness!",
        desc : "Contribute to Kanya Atmanirbhar Abhiyan ",
        desc2 : "Sponsor a girl",
        amountArr: [
            {
                amt : 12000
            },
            {
                amt : 1725.00
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

  const birthdayArr= [
    {
      title : "Celebrate your birthday more meaningfully!",
      desc : "Show your kinder version on your birthdays and be a reason for the smiles and happiness of the less fortunate children",
      title2: "What it’s About",
      desc1 : "Basic education is the right of every child, but many children are not fortunate to get it due to parental ignorance, poverty, and often tedious jobs, including rag-picking. They become devoid of books, guides, teachers, a school atmosphere, and a good education that can truly transform their lives.",
      desc2: "Birthdays, moreover, are all about having fun, celebrating with family, friends, and well-wishers, and getting gifts.",
      desc3 : "Enjoy all that, and along with that, give a gift and share some love with the needy children. This is the way to share your blessings with the sweet children of God.",

      arr : [
        {
          title1: "Give a gift of empowerment through education!",
          title2: "Spread happiness, kindness, and true human spirit on your birthday!",
          title3: "Vishwa Jagriti Mission wishes you a very Happy Birthday | Let Your Birthday Be a Gift for the Helpless!"
        }
      ],

      desc4: "Your donation will allow 1 child get school uniform, books, stationery, and mid-day meal."
    }
  ]
  return (
    <>
      <NewBanner bannerData={bannerData} Banner={Banner} />
      <div className="birthday">
        {birthdayArr.map(item => {
          return (
            <>
          <div className="birthdayContainer">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
              <div className="title">{item.title2}</div>
              <div className="desc">{item.desc1}</div>
              <div className="desc">{item.desc2}</div>
              <div className="desc">{item.desc3}</div>

              {item.arr.map(item=> {
                return (
                  <>
                    <ul>
                      <li>
                        <div className='desc'>{item.title1}</div>
              

                      </li>
                      <li>
                        <div className='desc'>{item.title2}</div>
              

                      </li>
                      <li>
                        <div className='desc'>{item.title3}</div>
              

                      </li>
                    </ul>
                  </>
                )
              })}

<div className="desc">{item.desc4}</div>



          </div>
            
            </>
          )
        })}
      </div>
    </>
  )
}

export default BirthdayContribution