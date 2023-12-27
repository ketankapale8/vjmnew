import React from 'react';
import './aurjaane.scss';
import { useLocation } from 'react-router-dom';

const AurJaane = () => {
    const location = useLocation();
    const {aurJaanetitle1 , aurJaaneDesc , aurJaaneDesc1 , aurJaaneDesc2 , 
      aurJaaneDesc3 , aurJaaneDesc4,
      aurJaaneDesc5,aurJaaneDesc6,aurJaaneDesc7,
      
      aurJaaneHeadings} = location?.state;
    // console.log(aurJaaneDesc)

  return (
    <div className='aurjaane'>
      <div className="aurjaaneContainer">

        <div className="aurjaaneDataContainer">
        <h2>{aurJaanetitle1}</h2>
            <p>{aurJaaneDesc}</p>
            <p>{aurJaaneDesc1}</p>
            <p>{aurJaaneDesc2}</p>
            <p>{aurJaaneDesc3}</p>
            <p>{aurJaaneDesc4}</p>
            <p>{aurJaaneDesc5}</p>
            <p>{aurJaaneDesc6}</p>
            <p>{aurJaaneDesc7}</p>



        <div>
          {aurJaaneHeadings?.map((item,idx)=>{
            return (
              <div key={idx}>
                <h2>{item.title}</h2>
                {item?.desc?.map(i=>{
                  return (
                  // <ul>
                  <>
                  <p>{i.one}</p>
                  <p>{i.two}</p>
                  <p>{i.three}</p>
                  <p>{i.four}</p>
                  <p>{i.five}</p>
                  <p>{i.six}</p>
                  <p>{i.seven}</p>
                  <p>{i.eight}</p>




                  
                  {/* <li>{i?.one}</li>
                  <li>{i?.two}</li>
                  <li>{i?.three}</li>
                  <li>{i?.four}</li>
                  <li>{i.five = null ? null : i.five}</li>
                  <li>{i?.six}</li>
                  <li>{i.seven}</li>
                  <li>{i.eight}</li> */}
                  </>
                  // </ul>

                  )
                })}
              </div>
            )
          })}

        </div>
        </div>
     

      </div>

    </div>
  )
}

export default AurJaane