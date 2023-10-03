import React from 'react';
import './donation.scss';
import mandala from '../../../assets/overview/mandala.png'
// import mandala1 from '../../assets/overview/mandala1.png'
// import mandala2 from '../../assets/overview/mandala2.png'
import { Link } from 'react-router-dom';
const Donation = () => {
  return (
    <>
    <div className='donation'>
      <div className="mainContainer">
        <div className="top">
          <h3>Donate for a better cause</h3>
        </div>
        <div className="bottom">
        <div className="boxContainer">
                    <img src={mandala} className="mandalaImgs" alt="mandalaImgs"/>
                    <h2>Donate for Balkalyan</h2>
                    <Link style={{textDecoration:'none', color:'inherit'}} to="/balkalyan-donation">
                    <button className='explorebtn'>Know More</button>
                    </Link>
                    {/* <p>Experience Serendipity and Spirituality by joining our peace center</p> */}

                </div>

                <div className="boxContainer">
                    <img src={mandala} className="mandalaImgs" alt="mandalaImgs"/>
                    <h2>Donate for Cow Shelters</h2>
                    <Link style={{textDecoration:'none', color:'inherit'}} to="/cowshelter-donation">
                    <button className='explorebtn'>Know More</button>

                    </Link>
                    {/* <p>Become a dikshit , volunteer or a follower at VJM and expand your inner belief</p> */}

                </div>

                <div className="boxContainer">
                    <img src={mandala} className="mandalaImgs" alt="mandalaImgs"/>
                    <h2>Donate for Dharmada</h2>
                    <Link style={{textDecoration:'none', color:'inherit'}} to="/dharmada-donation">
                    <button className='explorebtn'>Know More</button>

                    </Link>
                    {/* <p>Make this world a better place. Please donate at our different ventures</p> */}

                </div>
                <div className="boxContainer">
                    <img src={mandala} className="mandalaImgs" alt="mandalaImgs"/>
                    <h2>Donate for Annapurna Yojna</h2>
                    <Link style={{textDecoration:'none', color:'inherit'}} to="/annapoorna-donation">
                    <button className='explorebtn'>Know More</button>

                    </Link>

                    {/* <p>Make this world a better place. Please donate at our different ventures</p> */}

                </div>
               

        </div>
      </div>

    </div>
    
    </>
  )
}

export default Donation