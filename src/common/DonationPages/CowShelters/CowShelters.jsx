import React , {useState , useMemo} from 'react';
import './cowshelters.scss';
// import Footer from '../../common/Footer/Footer';
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

const CowSheltersDonation = () => {
    const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const options = useMemo(() => countryList().getData(), [])
    // const [countryList , setCountryList] = useState([{label : Country.getAllCountries().map(item=>item.name)}]);
    console.log(countryList)

   
    const countrySelection = (e) =>{
        setCountry(e)
    }

    


   
    // console.log(State.getStatesOfCountry("IN"))
  return (
    <>
    
    <div className='donatecow'>
        <div className="loginContainer">
            <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>

            </div>
                <div className="titles" >
                    <h2>COWSHELTERS DONATION FORM</h2>
                    {/* <p>Login to your VJM Profile</p> */}

                </div>

                <div className="inputBox">
                   
                    <h4>Food for Cow</h4>
                    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="2100"
      >
        <FormControlLabel value="2100" control={<Radio style={{color: '#b73c1d'}}  />} label="2100" />
        <FormControlLabel value="3100" control={<Radio  style={{color: '#b73c1d'}}  />} label="3100" />
        <FormControlLabel value="5100" control={<Radio style={{color: '#b73c1d'}}   />} label="5100" />
        
      </RadioGroup>
    </FormControl>
    <h4> Cow Shelters</h4>
                    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="21000"
      >
        <FormControlLabel value="21000" control={<Radio style={{color: '#b73c1d'}}  />} label="21000" />
        <FormControlLabel value="51000" control={<Radio  style={{color: '#b73c1d'}}  />} label="51000" />
        <FormControlLabel value="75000" control={<Radio style={{color: '#b73c1d'}}   />} label="75000" />
        
      </RadioGroup>
    </FormControl>
    <h4>I would like to donate below in INR to for One Cow</h4>
                    <input placeholder='Please enter your amount' type='Number'/>
                    <h4>Other Specific Amount</h4>
                    <input placeholder='Please enter your amount' type='Number'/>

                    <h4>Full Name</h4>
                    <input placeholder='Please enter your name' type='text'/>
                    <h4>Address</h4>
                    <input placeholder='Please enter your name' type='text'/>
                    <h4>Email</h4>
                    <input placeholder='Please enter your email' type='email'/>
                    <h4>Password</h4>
                    <input placeholder='please enter your password' type='password'/>
                    <h4>Select Country</h4>
                    <Select className='select' options={options} value={country} onChange={countrySelection} placeholder="Country" />
                    <h4 style={{paddingTop:'3px'}}>Enter State</h4>
                    <input placeholder='Please enter your State' type='text'/>
                    <h4>Enter City</h4>
                    <input placeholder='Please enter your City' type='text'/>
                    <h4>Enter Pincode</h4>
                    <input placeholder='Please enter your Pincode' type='text'/>
                    <h4>Select your DOB</h4>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h4>Select your Gender</h4>
                    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="male"
      >
        <FormControlLabel value="female" control={<Radio style={{color: '#b73c1d'}}  />} label="Female" />
        <FormControlLabel value="male" control={<Radio  style={{color: '#b73c1d'}}  />} label="Male" />
        <FormControlLabel value="other" control={<Radio style={{color: '#b73c1d'}}   />} label="Other" />
        
      </RadioGroup>
    </FormControl>
    <h4>Enter your Profession</h4>
    <input placeholder='Please enter your Profession' type='text'/>
    <h4>Enter your Occupation</h4>
    <input placeholder='Please enter your Occupation' type='text'/>
    <h4>Are you a Dikshit?</h4>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="male"
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
        defaultValue="male"
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
        defaultValue="male"
      >
        <FormControlLabel value="Yes" control={<Radio style={{color: '#b73c1d'}}  />} label="Yes" />
        <FormControlLabel value="No" control={<Radio  style={{color: '#b73c1d'}}  />} label="No" />
      </RadioGroup>
    </FormControl>

                    
                    <div className="loginSignUp">
                        <button className='loginBtn'>Submit</button>
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

export default CowSheltersDonation