import React from 'react';
import './storiesmore.scss';
import { useLocation } from 'react-router-dom';

const StoriesMore = () => {
    const location = useLocation();
    const {title , desc , date , heading1 , 
        heading2 , heading3,
        desc1,desc2,desc3,
      
      } = location?.state;
    // console.log(aurJaaneDesc)

  return (
    <div className='aurjaane1'>
      <div className="aurjaaneContainer1">
        <h3>
            {title}
            
        </h3>

        <div className="aurjaaneDataContainer1">

            <p>
            {desc}
            </p>

            <h3>{heading1}</h3>
            <p>{desc1}</p>

            
            <h3>{heading2}</h3>
            <p>{desc2}</p>

            
            <h3>{heading3}</h3>
            <p>{desc3}</p>


            <h4 style={{paddingLeft:'70%'}}>- {date}</h4>
                


        <div>
    

        </div>
        </div>
     

      </div>

    </div>
  )
}

export default StoriesMore