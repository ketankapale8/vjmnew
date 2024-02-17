import React from 'react'
import './footer.scss';
import one from '../../assets/Footer/1.png'
import two from '../../assets/Footer/2.png'
import three from '../../assets/Footer/3.png'
import four from '../../assets/Footer/4.png'
import five from '../../assets/Footer/5.png'
import six from '../../assets/Footer/appstore.png';
import seven from '../../assets/Footer/playstore.png'
import eight from '../../assets/Footer/hand.png';
import { Link } from 'react-router-dom';




const Footer = () => {
  const quickLinks = [
    {
        title : "Home",
        link : "/"
    },
    {
        title : "About Us",
        link : "/aboutvjm"
    },

    {
        title : "Terms & Conditions",
        link : "/terms"
    },
    // {
    //     title : "Vision/Mission",
    //     link : "/"
    // },
    // {
    //     title : "Leadership",
    //     link : "/"
    // },
    {
        title : "Contact Us",
        link : "/contactus"
    },
    // {
    //     title : "Join Team",
    //     link : "/"
    // },
    {
        title : "Privacy Policy",
        link : "/privacypolicy"
    },
    {
        title : "FAQ",
        link : "/frequentlyaskedquestions"
    }

]

const GetInvolved = [
    {
        title : "Sponsor a girl",
        link : "/sponsor-a-girl"
    },
    {
        title : "Feed Children",
        link : "/about-us"
    },
    {
        title : "Bring Books for Children",
        link : "/"
    },
    {
        title : "MidDay Meal",
        link : "/"
    },
    {
        title : "Kaushal Vikas Yojna",
        link : "/"
    },
    {
        title : "Donate For Library",
        link : "/"
    },
    {
        title : "Volunteer with Us",
        link : "/volunteer"
    },
    {
        title : "Donate Us",
        link : "/donation"
    }
]
  return (
    <div className='footer'>
      <div className="footerContainer">
      <div className="left">
                <div className="left-side">
                    <div className="leftsideContainer">
                        <div className="quickLinks">
                            <h3>Quick Links</h3>
                            {/* <img className='line' src={line}/> */}
                        {quickLinks.map(item=>{
                            return (
                                <>
                                    
                                   <div className="itemlist">
                                    <Link to={`${item.link}`} style={{textDecoration:'none', color:'inherit'}}>
                                        {item.title}
                                    </Link>
                                   </div>
                    
                                </>
                            )
                        })}
                        </div>

                        {/* <img src={divider} alt="" className="divider" /> */}
                    </div>
                </div>
                <div className="right-side">
                <div className="rightsideContainer">
                        {/* <img src={logo} alt="" className="logoImg" /> */}
                        <div className="quickLinks1">
                            <h3>Get Involved</h3>
                            {/* <img className='line' src={line}/> */}
                        {GetInvolved.map(item=>{
                            return (
                                <>
                                   <div className="itemlist1">
                                   <Link to={`${item.link}`} style={{textDecoration:'none', color:'inherit'}}>
                                        {item.title}

                                   </Link>
                                   </div>
                    
                                </>
                            )
                        })}
                        </div>

                        {/* <img src={divider} alt="" className="divider" /> */}
                    </div>

                </div>
      </div>
            <div className="right">
                <div className="main">
                <div className="left-side">
                <div className="leftsideContainer">
                            {/* <img src={logo} alt="" className="logoImg" /> */}
                            <div className="quickLinks2">
                                <h3>Contact Us</h3>
                                {/* <img className='line' src={line}/> */}
                                <h4 className='org'>Vishwa Jagriti Mission</h4>
                                <h4 className='org'>All Rights Reserved</h4>

                                <p className='add'>Anand Dham Ashram</p>
                                <p className='add'>Bakkarwala Marg, Nangloi</p>
                                <p className='add'>Najafgarh Road, New Delhi – 110041</p>
                                {/* <div style={{display:'flex', flexDirection:'column', lineHeight:'0px', textAlign:'start', paddingLeft:'10px'}} className='middlec'> */}
                                <p className='contact'>(+91) 9685938938 | (+91) 9589938938</p>
                                {/* <p></p> */}
                                <p className='contact'>(+91) 7291986653 | (+91) 9312284390</p>
                                {/* <p> </p> */}

                            {/* </div> */}
                            {/* {quickLinks.map(item=>{
                                return (
                                    <>
                                    <div className="itemlist">
                                        {item.title}
                                    </div>
                        
                                    </>
                                )
                            })} */}
                            </div>

                            {/* <img src={divider} alt="" className="divider" /> */}
            </div>
               </div>
                <div className="right-side">
                    <div className="rightsideContainer">
                            <div className="quickLinks3">
                        

                            <div className="appDownload">
                                <h3>Download Our App</h3>
                                <img className='downloadIconImages' src={six}/>
                                <img className='downloadIconImages' src={seven}/>


                                {/* <div className="icons">
                                    <FaAppStore style={{color:'white', width:'95px'}}/>
                                    <BsGooglePlay style={{color:'white', width:'95px'}}/>
                                </div> */}
                            </div>
                            <h3>Find Us On </h3>
                            <div className="socialIcons">
                             
                              <div className="row1">
                                <img src={five} className='iconStyle'/>
                                <img src={four} className='iconStyle'/>
                                <img src={two} className='iconStyle'/>

                              </div>
                              <div className="row2">
                                <img src={one} className='iconStyle'/>
                                <img src={three} className='iconStyle'/>

                              </div>
                            </div>

                            </div>

                    </div>
                  
                </div>

                <div className="handContainer">
                  <img className='handImg' src={eight}/>
                </div>

                </div>

            </div>

      </div>
    </div>
  )
}

export default Footer