import React from 'react';
import './abovebottom.scss';
import four from '../../../assets/balkalyaan/four.png'


const AboveBottomContainer = ({ ServicesArray1 , ServicesArray2}) => {
   
  return (
    <div className='abovebottom'>
        <div className="boxesContainer5">
        {ServicesArray1.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer5" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                 
                    </div>
                        {/* <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'16px'}}>अन्वेषण करें {'>'} </button> */}
                        </div>
                        
                        </>
                    )
                })}


        </div>
        <div className="boxesContainer5">
        {ServicesArray2.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer5" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                 
                    </div>
                        {/* <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'16px'}}>अन्वेषण करें {'>'} </button> */}
                        </div>
                        
                        </>
                    )
                })}


        </div>
    </div>
  )
}

export default AboveBottomContainer