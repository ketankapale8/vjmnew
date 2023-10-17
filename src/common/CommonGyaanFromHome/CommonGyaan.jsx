import React from 'react';
import './commongyaan.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png';
// import img1 from '../../../assets/articles/one.png'
// import img2 from '../../../assets/articles/two.png'
// import img3 from '../../../assets/articles/three.png'
// import share from '../../../assets/articles/share.png'



const CommonGyaan = ({ArticleArray , commongyaantitle , commongyaandesc}) => {
   
  return (
    <div className='commongyaan'>
        <div className="gyaanContainer">
            <div className="gyaanTitle">
            {commongyaantitle}
            </div>
            <div className='gyaanDesc1'>
            {commongyaandesc}
            </div>
            <img className='gyaanImg' src={vectorDesign} alt="design"/>

            <div className="boxesContainer2">
            {ArticleArray.map(item=>{
                    return (
                        <>
                        
                            <div className="boxContainer2" 
                    >
                    <div className="top">
                        <img className='postImg' alt='post' src={item.img}/>  
                    </div>
                    <div className="bottom">

                        <h4>{item.title}</h4>
                        {/* <p className='date'>{item.date}</p> */}
                        <p>{item.desc}</p>

                        <p className='descBold'>{item?.desc1}</p>
                        {/* <div className="tags">
                            <button style={{width: '86px' , height:'38px', borderRadius:'60px', backgroundColor:'#960808', color:'white', border:'none',fontSize: '0.8rem', marginLeft:'10px', marginTop:'6px'}}>अन्वेषण करें {'>'} </button>
                            <div className='shareBtn'>
                                <img className='share' src={item.share}/>

                            </div>
                        </div> */}
                 
                    </div>
                        </div>
                        
                        </>
                    )
                })}


            </div>
            
        </div>
    </div>
  )
}

export default CommonGyaan