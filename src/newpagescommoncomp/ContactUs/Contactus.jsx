import React from 'react';
import './contactus.scss';

const Contactus = () => {
  return (
    <div className='contactus'>
      <div className="contactusContainer">
        <div className="contactusleft">
            <h3>Our Locations</h3>
            <div className='address'>
              <p>Vishwa Jagriti Mission, Anand Dham Ashram</p>
              <p>Bakkarwala Marg, Nangloi-Najafgarh Road</p>
              <p>New Delhi – 110041</p>
            </div>
            <div className="contactDetails">
            <p>Phone: <span style={{fontWeight:'bold'}}>
            +91 9711991583, 9582954200, 9312272625, 9312284390
              </span></p>
              <p>
              Toll-Free: <span style={{fontWeight:'bold'}}>
                 1800 11 8188 | WhatsApp : 9711991583
                  </span></p>
              <p>Email: <span style={{fontWeight:'bold'}}>
                info@vishwajagritimission.org | info@sudhanshujimaharaj.net
                </span>
                </p>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0998269211195!2d77.0132105761378!3d28.65672948298024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05bdd0b95153%3A0x2c598c91137605b7!2sVishwa%20Jagriti%20Mission!5e0!3m2!1sen!2sin!4v1708149217637!5m2!1sen!2sin" width="600" height="350"  allowfullscreen="" loading="lazy" style={{border: '1px solid lightgray', borderRadius:'5px'}} referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
        <div className="contactusright">
        <h3>Contact Us</h3>
            <p>Fields marked with * are required</p>
            <div className="contactusForm">
              <div className='titles'>
              <label>Your Name</label> <span>*</span>
              </div>
              <input/>
              <div className='titles'>
              <label>Your Phone</label> <span>*</span>
              </div>
              <input/>
              <div className='titles'>
              <label>Subject</label> <span>*</span>
              </div>
              <input/>
              <div className='titles'>
              <label>Message</label> <span>*</span>
              </div>
              <textarea/>
              <button className='contributeBtn1'>Submit</button>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus