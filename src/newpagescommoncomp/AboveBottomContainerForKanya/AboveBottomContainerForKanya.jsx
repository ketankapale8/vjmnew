import React from 'react';
import './abovebottom.scss';
// import four from '../../../assets/balkalyaan/four.png'


const AboveBottomContainerForKanya = ({ ServicesArray1 , ServicesArray2}) => {
   
  return (
    <div className='abovebottomforkanya'>
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

                        <div className="progressBarContainer">
                                <div className="parent">
                                    <div className="child" style={{width : `${item.percentage}%`}}>
                                        <h4 className='progressText'>{Math.round(item.percentage)}%</h4>
                                    </div>
                                </div>

                                
                        </div>

                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <p style={{fontWeight:'bold'}}>Raised ₹ {item.raised}</p>
                            <p style={{fontWeight:'bold'}}>Goal ₹ {item.goal}</p>

                        </div>

                                <div style={{display:'flex' , flexDirection:'row',gap:'10px', alignItems:'center'}}>
                                    <button>Donate</button>
                                    <button className='button-knowmore'>Know More</button>


                                </div>
                         


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

                        <div className="progressBarContainer">
                                <div className="parent">
                                    <div className="child" style={{width : `${item.percentage}%`}}>
                                        <h4 className='progressText'>{Math.round(item.percentage)}%</h4>
                                    </div>
                                </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <p style={{fontWeight:'bold'}}>Raised ₹ {item.raised}</p>
                            <p style={{fontWeight:'bold'}}>Goal ₹ {item.goal}</p>

                        </div>

                        <div style={{display:'flex' , flexDirection:'row',gap:'10px', alignItems:'center'}}>
                                    <button>Donate</button>
                                    <button className='button-knowmore'>Know More</button>


                                </div>

                 
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

export default AboveBottomContainerForKanya