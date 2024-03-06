import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './girlstories.scss';
import axios from 'axios';




const GirlStories = () => {

    const [allStories , setallStories] = useState([])

    useEffect(()=> {
      // getUsers();
      // getVolunteers();
      // getBlogPosts();
      // getPaymentsMade();
      // getQuotes();
      getStories()
    },[])
  
    const getStories = async () =>{
      await axios.get(`https://vjmnewbackend.vercel.app/api/v1/stories/allstories`)
        .then(resp => setallStories(resp?.data.allStories))
        .catch(err=>console.log(err))
    }

    console.log(allStories.map(item => item))
  return (
    <div className='girlContainer'>
            <h3>Stories</h3>
        <div className="girlMainContainer">
            {allStories.map(item=>{
                return (
                    <>
                    <div className="girlImageContainer">
                        <Link to="/storiesmore" state={{
                            title: item.title,
                            desc : item.desc,
                            date: item.date,
                            heading1: item.heading1,
                            heading2: item.heading2,
                            heading3: item.heading3,
                            desc1 : item.desc1,
                            desc2 : item.desc2,
                            desc3 : item.desc3,


                        }}>
                            <img className='imageContainer' src={item.image}/>
                        
                        </Link>
                    </div>
                    
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default GirlStories