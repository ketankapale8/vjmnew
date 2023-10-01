import React from 'react';
import './bottomcomp.scss';
import vectorDesign from '../../../assets/commonAssets/Vector.png';
import {BsCalendarDate} from 'react-icons/bs';
import img1 from '../../../assets/EventsPage/Bhakti.jpg';
import img2 from '../../../assets/EventsPage/poornima.jpg';
import img3 from '../../../assets/EventsPage/Yagya.jpg';
import share from '../../../assets/articles/share.png'



const BottomComponent = ({title , desc , EventsArray1 , EventsArray2}) => {

    
    
  return (
    <div className='bottomComponent'>
        <div className="bottomContainer">
        <div className="BottomTitle">{title}</div>
        <div className="BottomDesc">{desc}</div>
        <img className="BottomImg" src={vectorDesign} alt="design"/>

        <div className="box">
        {EventsArray1.map(item=>{
  return (
    <>
    <div className="boxContainer3" 
    >
      <div className="top">
        <img className='postImg' alt='post' src={item.img}/>  
      </div>
      <div className="bottom">

          <h4>{item.title}</h4>
            {/* <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', padding: '6px 12px 12px 12px'}}>{item.tag}</button> */}
          <p>{item.desc}</p>
          <div className="tags">
                            <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>शामिल हों{'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={share}/>

                            </div>
                        </div>
      </div>
          {/* <div className="tags">
            <BsCalendarDate style={{ paddingLeft:'4px'}}/>
            <p>{item.date}</p>
            <img style={{ paddingLeft:'4px'}} src={location}/>
            <p>{item.city}</p>
          </div> */}
    </div>
    
    </>
  )
})}

        </div>
        <div className="box">
        {EventsArray2.map(item=>{
  return (
    <>
    <div className="boxContainer3" 
    >
      <div className="top">
        <img className='postImg' alt='post' src={item.img}/>  
      </div>
      <div className="bottom">

          <h4>{item.title}</h4>
            {/* <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', padding: '6px 12px 12px 12px'}}>{item.tag}</button> */}
          <p>{item.desc}</p>
          <div className="tags">
                            <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>शामिल हों{'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={share}/>

                            </div>
                        </div>
      </div>
          {/* <div className="tags">
            <BsCalendarDate style={{ paddingLeft:'4px'}}/>
            <p>{item.date}</p>
            <img style={{ paddingLeft:'4px'}} src={location}/>
            <p>{item.city}</p>
          </div> */}
    </div>
    
    </>
  )
})}

        </div>
        </div>

    </div>
  )
}

export default BottomComponent