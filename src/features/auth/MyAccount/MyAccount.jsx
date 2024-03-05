import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './myaccount.scss';
import logo from '../../../assets/logo.png';
import { useContext } from 'react';
import {Context} from '../../../index.js';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import toast from 'react-hot-toast';

const MyAccount = () => {
    const user = useSelector((state)=> state?.auth?.user);
    // console.log(user)
    
    const [nameChange , setNameChange] = useState('');
    const [userProfile , setUserProfile] =useState({})
    // const [values1 , setValues1] = useState({
    //     name : '',
    //     email :'',
    //     password :'',
    //     address :'',
    //     country : '', 
    //     state :'',
    //     city :'',
    //     pincode : '', 
    //     gender : '',
    //     profession : '',
    //     occupation : '',
    //     dikshit : '', 
    //     volunteer : ''

  
    //   })
    //   const {user , setUser , setIsAuthenticated , setloading} = useContext(Context);
      const [current , setCurrent] = useState('Account')
      const url ="http://localhost:4000";

      useEffect(()=>{
        // axios.get(`${url}/api/v1/allusers`)
        // .then(resp=>
        //     setUserProfile(resp.data)
        //     // setUserProfile(resp.data?.user?.filter((item=>item?._id == user._id)))
        // )
      },[])

    //   const userValues = userProfile?.users?.filter(item=>item?._id == user._id)

  
  
    //   const { email ,  name , address  , state , city , pincode , country, gender , profession ,occupation , dikshit ,volunteer} = values1;
    //   const updateProfile = async (e) => {
    //     e.preventDefault();
    //     try{
    //       const {data} = await axios.put(
    //         `${url}/api/v1/updateprofile`, 
    //         {
           
    //             name  , 
    //             email ,
    //             address  , state , city , pincode, gender,
    //             occupation , profession , dikshit , volunteer,
    //             country,
    //         },
    //         {
    //           // headers : {
    //           //   "Content-Type" : "application/json",
    
    //           // }, 
    //           withCredentials : true
    //         }
    //       )
    //       toast.success("Profile Details Updated Successfully")
    //       setIsAuthenticated(true)
    //       setloading(false)
          
    
    //     }catch(err){
    //       toast.error("Something Wrong! Please Login back again!")
    //       setIsAuthenticated(false)
    //       setloading(false)
    
    //     }
    //   }

 

    const AccountDetails = () => {
        return(
            <>
            <div className="inputBox1">
                    <>
                    <h4>Name</h4>
                    <input disabled type='text' value={user?.name}/>
                    <h4>Email</h4>
                    <input disabled type='text'  value={user?.email}/>
                    <h4 style={{paddingTop:'3px'}}>Enter State</h4>
                    <input  disabled  value={user?.state} />
                    <h4>Enter City</h4>
                    <input disabled type='text'  value={user?.city}  />
                    <h4>Enter Pincode</h4>
                    <input disabled type='text'  value={user?.pincode}/>
                   
                    <h4>Select your Gender</h4>
                    <input disabled type='text'  value={user?.gender !== '' ? user?.gender : 'not updated' }/>
                    {/* <h4>Select your Occupation</h4>
                    <input disabled type='text'  value={user?.occupation !== '' ? user?.occupation: 'not updated' }/>
                    <h4>Dikshit </h4>
                    <input disabled type='text'  value={user?.dikshit !== '' ? user?.dikshit : 'not updated' }/>

                    <h4>Willing to Volunteer </h4>
                    <input disabled type='text'  value={user?.volunteer !== '' ? user?.volunteer : 'not updated'  }/> */}
                    
                    </>
                    
            </div>
            </>
        )
    }

    const PaymentSection = () =>{
        return (
            <>
                <h4>Pay Options</h4>
            </>
        )
    }




    // function handleChange(e) {
    //     e.preventDefault();
    //     setValues1({name : e.target.value})

    // }
    // console.log(nameChange)

    // const ProfileUpdate = () => {
    //     return(
    //         <>
    //         <div className="inputBox1">
    //                 <h4>Full Name</h4>
    //                 <input  placeholder='Please enter your name' type='text' value={nameChange} onChange={(e)=>setNameChange(e.target.value)}  />
    //                 {/* <h4>Address</h4>
    //                 <input placeholder='Please enter your address' type='text' onChange={(e)=> setValues1({...values1 , address : e.target.value})}/>
    //                 <h4>Email</h4>
    //                 <input placeholder='Please enter your email' type='email' onChange={(e)=> setValues1({...values1 , email : e.target.value})}/>                    
    //                 <h4 style={{paddingTop:'3px'}}>Enter State</h4>
    //                 <input placeholder='Please enter your State'  type='text' onChange={(e)=> setValues1({...values1 , state : e.target.value})}/>
    //                 <h4>Enter City</h4>
    //                 <input placeholder='Please enter your City' type='text' onChange={(e)=> setValues1({...values1 , city : e.target.value})}/>
    //                 <h4>Enter Pincode</h4>
    //                 <input placeholder='Please enter your Pincode' type='text' onChange={(e)=> setValues1({...values1 , pincode : e.target.value})}/>
                 
    //                 <h4>Select your Gender</h4> */}
    //                 {/* <FormControl>
    //   <RadioGroup
    //     row
    //     aria-labelledby="demo-row-radio-buttons-group-label"
    //     name="row-radio-buttons-group"
    //     defaultValue="male"
    //     onChange={(e)=> setValues1({...values1 , gender : e.target.value})}
    //   >
    //     <FormControlLabel value="female" control={<Radio style={{color: '#b73c1d'}}  />} label="Female" />
    //     <FormControlLabel value="male" control={<Radio  style={{color: '#b73c1d'}}  />} label="Male" />
    //     <FormControlLabel value="other" control={<Radio style={{color: '#b73c1d'}}   />} label="Other" />
        
    //   </RadioGroup>
    // </FormControl> */}
    // <h4>Enter your Profession</h4>
    // <input placeholder='Please enter your Profession' type='text' onChange={(e)=> setValues1({...values1 , profession : e.target.value})}/>
    // <h4>Enter your Occupation</h4>
    // <input placeholder='Please enter your Occupation' type='text' onChange={(e)=> setValues1({...values1 , occupation : e.target.value})}/>
    // <h4>Are you a Dikshit?</h4>

    // <FormControl>
    //   <RadioGroup
    //     row
    //     aria-labelledby="demo-row-radio-buttons-group-label"
    //     name="row-radio-buttons-group"
    //     defaultValue="no"
    //     onChange={(e)=> setValues1({...values1 , dikshit : e.target.value})}
    //   >
    //     <FormControlLabel value="yes" control={<Radio style={{color: '#b73c1d'}}  />} label="yes" />
    //     <FormControlLabel value="no" control={<Radio  style={{color: '#b73c1d'}}  />} label="no" />
        
    //   </RadioGroup>
    // </FormControl>

    // <h4>Are you willing to Volunteer?</h4>

    // <FormControl>
    //   <RadioGroup
    //     row
    //     aria-labelledby="demo-row-radio-buttons-group-label"
    //     name="row-radio-buttons-group"
    //     defaultValue="no"
    //     onChange={(e)=> setValues1({...values1 , volunteer : e.target.value})}
    //   >
    //     <FormControlLabel value="yes" control={<Radio style={{color: '#b73c1d'}}  />} label="yes" />
    //     <FormControlLabel value="no" control={<Radio  style={{color: '#b73c1d'}}  />} label="no" />
        
    //   </RadioGroup>
    // </FormControl>

    // <div className="loginSignUp" >
    //                     <button className='loginBtn' >Update Profile</button>
    //                 </div>

    

    
    //             </div>
    //         </>
    //     )
    // }

  
  return (
    <div className='myaccount'>
        <div className="myaccountContainer">
        <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>
                <div className="titles" >
                    <p>Namaste <strong>
                    {/* {user?.name} */}
                        </strong> {user?.name} Ji </p>
                    {/* <p>Login to your VJM Profile</p> */}

                </div>

        </div>
        <div className="myaccountSections">
            <div className="accountDividers">
            <div className="buttons">
                  <button className='exploremore1' onClick={()=>setCurrent('Account')}>Account Details </button>
                  {/* <button className='exploremore1' onClick={()=>setCurrent('Profile_Update')}>Profile Update </button> */}

            </div>

            {current == 'Account' &&
                <AccountDetails/>
            }



            </div>
        </div>
        </div>

    </div>
  )
}

export default MyAccount