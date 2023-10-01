import React from 'react';
import './titlepage.scss';
import vectorDesign from '../../../assets/commonAssets/Vector.png'

const TitlePage = ({title , desc}) => {
  return (
    <div className='titlepage'>
        <div className="titlePageContainer">

         <div className="Title">{title}</div>
            <div className="Desc">{desc}</div>
            <img className="Image" src={vectorDesign} alt="design"/>
    </div>
        </div>
  )
}

export default TitlePage