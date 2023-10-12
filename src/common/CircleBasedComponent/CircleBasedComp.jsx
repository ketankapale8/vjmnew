import React from 'react';
import './circlebasedcomp.scss';

import share from '../../assets/articles/share.png'

import vectorDesign from '../../assets/commonAssets/Vector.png'

const CircleBasedComp = ({title , desc , Array1 ,Array2 , Array3 ,Array4}) => {
   
      
  return (
    <div className='circlebasedcomp' >
        <div className="circlebasedContainer">
        <div className="titlePageonCircleContainer">

<div className="Title">{title}</div>
   <div className="Desc">{desc}</div>
   <img className="Image" src={vectorDesign} alt="design"/>
        </div>

        <div className="boxesContainer5">
                {Array1.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer1" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        {/* <p>{item.desc}</p> */}
                 
                        <div className="tags">
                            <button style={{width: '126px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अभी दान कीजिए {'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={share}/>

                            </div>
                        </div>

                    </div>

                        </div>
                        
                        </>
                    )
                })}


        </div>

        <div className="boxesContainer5">
            {Array2 !== null &&
                Array2.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer1" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        {/* <p>{item.desc}</p> */}
                 
                        <div className="tags">
                            <button style={{width: '126px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अभी दान कीजिए {'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={share}/>

                            </div>
                        </div>

                    </div>

                        </div>
                        
                        </>
                    )
                })
                
            }


        </div>


        <div className="boxesContainer5">
                {
                    Array3 !== null && (
                Array3.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer1" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        {/* <p>{item.desc}</p> */}
                 
                        <div className="tags">
                            <button style={{width: '126px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अभी दान कीजिए {'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={share}/>

                            </div>
                        </div>

                    </div>

                        </div>
                        
                        </>
                    )
                })
                    )
            
            }


        </div>

        <div className="boxesContainer5">
                {
                Array4 !== null && (
                Array4.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer1" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        {/* <p>{item.desc}</p> */}
                 
                        <div className="tags">
                            <button style={{width: '126px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अभी दान कीजिए {'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={share}/>

                            </div>
                        </div>

                    </div>

                        </div>
                        
                        </>
                    )
                })
                )
            }


        </div>



        </div>
    </div>
  )
}

export default CircleBasedComp