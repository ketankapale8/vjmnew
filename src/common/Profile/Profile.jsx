import React , {useState , useMemo} from 'react';
import './profile.scss';
import { useContext } from 'react';
import {Context} from '../../index.js';
import logo from '../../assets/logo.png';
import { Link , Navigate} from 'react-router-dom';
import { Country, State, City }  from 'country-state-city';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const url ="http://localhost:4000";
  const {user , setUser , setIsAuthenticated , setloading} = useContext(Context);
    // const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const options = useMemo(() => countryList().getData(), [])
    // const [countryList , setCountryList] = useState([{label : Country.getAllCountries().map(item=>item.name)}]);

    const [values , setValues] = useState({
      name : '',
      email : '',
      address :'',
      state :'',
      city :'',
      pincode : '', 
      // dob:'',
      gender : '',
      profession : '',
      occupation : '',
      dikshit : '', 
      volunteer : ''

    })


    const {  email ,name , address  , state , city , pincode ,
        
        gender , 
        profession,
      occupation ,
      dikshit, 
      volunteer
    } = values;



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          await axios.put(
            `${url}/api/v1/updateprofile`, 
            {
                email,
                 name , address  , state , city , pincode ,
        
                gender , 
                profession,
              occupation ,
              dikshit, 
              volunteer
            },
            {
              // headers : {
              //   "Content-Type" : "application/json",
    
              // }, 
              withCredentials : true
            }
          )
          toast.success("Profile Details Updated Successfully on VJM'S Portal")
          setIsAuthenticated(true)
          setloading(false)
          
    
        }catch(err){
          toast.error("Something Wrong! Please Login back again!")
          setIsAuthenticated(false)
          setloading(false)
    
        }
      }

//   if(isAuthenticated) return <Navigate to={"/"}/>

  console.log(values)
     

    


   
    // console.log(State.getStatesOfCountry("IN"))
  return (
    <>
    
    <div className='signup'>
        <div className="loginContainer">
            <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>

            </div>
                <div className="titles" >
                    <h2>Profile</h2>
                    {/* <p>Login to your VJM Profile</p> */}

                </div>

                <div className="inputBox">
                <h4>Full Name</h4>
                    <input placeholder='Please enter your name' type='email' onChange={(e)=> setValues({...values , name : e.target.value})}/>
                    <h4>Email</h4>
                    <input placeholder='Please enter your name' type='email' onChange={(e)=> setValues({...values , email : e.target.value})}/>
                    <h4>Address</h4>
                    <input placeholder='Please enter your name' type='text' onChange={(e)=> setValues({...values , address : e.target.value})}/>
      
                 
                   
                    <h4 style={{paddingTop:'3px'}}>Enter State</h4>
                    <input placeholder='Please enter your State'  type='text' onChange={(e)=> setValues({...values , state : e.target.value})}/>
                    <h4>Enter City</h4>
                    <input placeholder='Please enter your City' type='text' onChange={(e)=> setValues({...values , city : e.target.value})}/>
                    <h4>Enter Pincode</h4>
                    <input placeholder='Please enter your Pincode' type='text' onChange={(e)=> setValues({...values , pincode : e.target.value})}/>
                    {/* <h4>Select your DOB</h4>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    <h4>Select your Gender</h4>
                    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="male"
        onChange={(e)=> setValues({...values , gender : e.target.value})}
      >
        <FormControlLabel value="female" control={<Radio style={{color: '#b73c1d'}}  />} label="Female" />
        <FormControlLabel value="male" control={<Radio  style={{color: '#b73c1d'}}  />} label="Male" />
        <FormControlLabel value="other" control={<Radio style={{color: '#b73c1d'}}   />} label="Other" />
        
      </RadioGroup>
    </FormControl>
    <h4>Enter your Profession</h4>
    <input placeholder='Please enter your Profession' type='text' onChange={(e)=> setValues({...values , profession : e.target.value})}/>
    <h4>Enter your Occupation</h4>
    <input placeholder='Please enter your Occupation' type='text' onChange={(e)=> setValues({...values , occupation : e.target.value})}/>
    <h4>Are you a Dikshit?</h4>

    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="no"
        onChange={(e)=> setValues({...values , dikshit : e.target.value})}
      >
        <FormControlLabel value="yes" control={<Radio style={{color: '#b73c1d'}}  />} label="yes" />
        <FormControlLabel value="no" control={<Radio  style={{color: '#b73c1d'}}  />} label="no" />
        
      </RadioGroup>
    </FormControl>

    <h4>Are you willing to Volunteer?</h4>

    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="no"
        onChange={(e)=> setValues({...values , volunteer : e.target.value})}
      >
        <FormControlLabel value="yes" control={<Radio style={{color: '#b73c1d'}}  />} label="yes" />
        <FormControlLabel value="no" control={<Radio  style={{color: '#b73c1d'}}  />} label="no" />
        
      </RadioGroup>
    </FormControl>

    {/* <h4>Enter your Profession</h4>
    <input placeholder='Please enter your Profession' type='text'/>
    <h4>Enter your Occupation</h4>
    <input placeholder='Please enter your Occupation' type='text'/>
    <h4>Are you a Dikshit?</h4> */}
    {/* <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="male"
      >
        <FormControlLabel value="yes" control={<Radio style={{color: '#b73c1d'}}  />} label="yes" />
        <FormControlLabel value="no" control={<Radio  style={{color: '#b73c1d'}}  />} label="no" />
        
      </RadioGroup>
    </FormControl> */}
    {/* <h4>I would like to receive regular program updates through -</h4> */}
    {/* <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="male"
      >
        <FormControlLabel value="Email" control={<Radio style={{color: '#b73c1d'}}  />} label="Email" />
        <FormControlLabel value="WhatsApp" control={<Radio  style={{color: '#b73c1d'}}  />} label="WhatsApp" />
        <FormControlLabel value="Both" control={<Radio  style={{color: '#b73c1d'}}  />} label="Both" />
      </RadioGroup>
    </FormControl> */}
    {/* <h4>I would like to Volunteer for different programs-</h4> */}
    {/* <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="male"
      >
        <FormControlLabel value="Yes" control={<Radio style={{color: '#b73c1d'}}  />} label="Yes" />
        <FormControlLabel value="No" control={<Radio  style={{color: '#b73c1d'}}  />} label="No" />
      </RadioGroup>
    </FormControl> */}

                    
                    <div className="loginSignUp" >
                        <button className='loginBtn' onClick={handleSubmit}>Update</button>
                    </div>
                    {/* <div className="signUpContainer">
                        <h4>Already have an account?</h4>
                        <Link to="/login" style={{textDecoration:'none', color:'inherit'}}>
                        <button className='loginBtns' style={{marginLeft:'25px'}}>Login</button>
                        </Link>
                        
                    </div> */}
                </div>

        </div>
    </div>
    </>
  )
}

export default Signup