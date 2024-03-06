import React , {useState , useMemo} from 'react';
import './volunteer.scss';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

const Volunteer = () => {
  const user = useSelector((state)=> state?.auth?.user);
  console.log(user)
    const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const options = useMemo(() => countryList().getData(), [])
    // const [countryList , setCountryList] = useState([{label : Country.getAllCountries().map(item=>item.name)}]);
    console.log(countryList)

   
    const countrySelection = (e) =>{
        setCountry(e)
    }
    // console.log(State.getStatesOfCountry("IN"))

    const [values , setValues] = useState({
      volunteerId : user?._id,
      name : user?.name,
      email : user?.email,
      address: user?.address,
      state :user?.state,
      city :user?.city,
      pincode : user?.pincode, 
      dob: startDate,
      gender : user?.gender,
      profession : user?.profession,
      occupation : user?.occupation,
      dikshit : '', 

    })

    const {volunteerId,  email ,name , address  , state , city , pincode ,
        dob,
      gender , 
      profession,
    occupation ,
    dikshit, 
  } = values;

  let baseUrl = 'https://vjmnewbackend.vercel.app/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post(
        `${baseUrl}/addvolunteer/createvolunteer `, 
        {
          volunteerId ,  //
            address,//
            state,  //
            name,//
            email, //
            city,//
            pincode,//
            gender,//
            occupation,//
            profession,//
            dikshit,//
            dob //
         
        },
        {
          headers : {
            "Content-Type" : "application/json",

          }, 
          withCredentials : true
        }
      )
      toast.success("Volunteer Details Updated Successfully on VJM'S Portal")
      

    }catch(err){
      // console.log(err.response.data.message)
      toast.error(err.response.data.message)

    }


  }

  return (
    <>
    
    <div className='membership1'>
        <div className="loginContainer">
            <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>

            </div>
                <div className="titles" >
                    <h2>VOLUNTEER FORM</h2>
                    {/* <p>Login to your VJM Profile</p> */}

                </div>

                <div className="inputBox">
                    {/* <h4>I would like to donate INR</h4>
                    <input placeholder='Please enter your amount' type='Number'/> */}
                    <h4>Full Name</h4>
                    <input placeholder='Please enter your name' type='text' disabled value={name}/>
                    <h4>Address</h4>
                    <input placeholder='Please enter your name' type='text' disabled value={address}/>
                    <h4>Email</h4>
                    <input placeholder='Please enter your email' type='email' disabled value={email}/>
                
                
                    <h4 style={{paddingTop:'3px'}}>Enter State</h4>
                    <input placeholder='Please enter your State' type='text' disabled value={state}  />
                    <h4>Enter City</h4>
                    <input placeholder='Please enter your City' type='text' disabled value={city}/>
                    <h4>Enter Pincode</h4>
                    <input placeholder='Please enter your Pincode' type='text' disabled value={pincode}/>
                    <h4>Select your DOB</h4>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h4>Select your Gender</h4>
                    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={user?.gender}
        disabled
      >
        <FormControlLabel value="female" control={<Radio style={{color: '#b73c1d'}} disabled />} label="Female" />
        <FormControlLabel value="male" control={<Radio  style={{color: '#b73c1d'}} disabled />} label="Male" />
        <FormControlLabel value="other" control={<Radio style={{color: '#b73c1d'}}  disabled />} label="Other" />
        
      </RadioGroup>
    </FormControl>
    <h4>Enter your Profession</h4>
    <input placeholder='Please enter your Profession' type='text' disabled value={profession}/>
    <h4>Enter your Occupation</h4>
    <input placeholder='Please enter your Occupation' type='text' disabled value={occupation}/>
    <h4>Are you a Dikshit?</h4>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="no"
      >
        <FormControlLabel value="yes" control={<Radio style={{color: '#b73c1d'}}  />} label="yes" />
        <FormControlLabel value="no" control={<Radio  style={{color: '#b73c1d'}}  />} label="no" />
        
      </RadioGroup>
    </FormControl>
    <h4>I would like to receive regular program updates through -</h4>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Email"
      >
        <FormControlLabel value="Email" control={<Radio style={{color: '#b73c1d'}}  />} label="Email" />
        <FormControlLabel value="WhatsApp" control={<Radio  style={{color: '#b73c1d'}}  />} label="WhatsApp" />
        <FormControlLabel value="Both" control={<Radio  style={{color: '#b73c1d'}}  />} label="Both" />
      </RadioGroup>
    </FormControl>
    <h4>I would like to Volunteer for different programs-</h4>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Yes"
      >
        <FormControlLabel value="Yes" control={<Radio style={{color: '#b73c1d'}}  />} label="Yes" />
        <FormControlLabel value="No" control={<Radio  style={{color: '#b73c1d'}}  />} label="No" />
      </RadioGroup>
    </FormControl>

                    
                    <div className="loginSignUp">
                        <button className='loginBtn' type='button' onClick={handleSubmit}>Submit</button>
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

export default Volunteer