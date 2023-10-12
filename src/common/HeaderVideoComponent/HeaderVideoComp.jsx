import React from 'react';
import './headervideo.scss'

const HeaderVideoComp = ({title , desc, video}) => {
  return (
    <>
        <div className="headervideoc">
            <div className="headerVideoComp">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                <video src={video} width="900" height="700" controls="controls" autoplay="true" />
            </div>
        </div>
    </>
  )
}

export default HeaderVideoComp