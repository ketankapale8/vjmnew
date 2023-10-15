import React from 'react';
import './headervideo.scss'

const HeaderVideoComp = ({title , desc, video}) => {
  return (
    <>
        <div className="headervideoc">
            <div className="headerVideoComp">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                <video src={video}  controls="controls" autoplay="true" className='video' />
            </div>
        </div>
    </>
  )
}

export default HeaderVideoComp