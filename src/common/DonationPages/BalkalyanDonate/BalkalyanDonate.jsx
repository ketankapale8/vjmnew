import React , {useState , useMemo} from 'react';
import './donatebal.scss';
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
import axios from 'axios';
import { useContext } from 'react';
import {Context} from '../../../index.js';

const BalkalyanDonate = () => {
    const [country, setCountry] = useState('');
    const [val , setVal] = useState();
    const [val1 , setVal1] = useState();
    const {user , setUser , setIsAuthenticated , setloading} = useContext(Context);

    const [startDate, setStartDate] = useState(new Date());
    const options = useMemo(() => countryList().getData(), [])
    const [total , setTotal] = useState(0)
    // const [countryList , setCountryList] = useState([{label : Country.getAllCountries().map(item=>item.name)}]);
    console.log(countryList);
    const url ="http://localhost:4000";

   
    const countrySelection = (e) =>{
        setCountry(e)
    }
    const totalVal = Number(val) + Number(val1);

    const checkoutHandler = async (amount) =>{
      const {data:{key}} = await axios.get(`${url}/api/v1/getkey`)
      const {data :{order}} = await axios.post(`${url}/api/v1/checkout`,{
        amount
      })


      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Balkalyan Yojana Donation",
        description: "Payment Gateway",
        image: "https://vjmmeditation.com/assets/new_theme/new_logo.png",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/v1/paymentverification",
        prefill: {
            name: user?.name,
            email: user?.email,
            contact: "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#6F2323"
        }
    };


    const razor = new window.Razorpay(options);
    razor.open();
    }

      // console.log(window)


    
  


    


   
    // console.log(State.getStatesOfCountry("IN"))
  return (
    <>
    
    <div className='donatebal'>
        <div className="donateContainer">
            <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>

            </div>
                <div className="titles" >
                    <h2>BALKALYAN DONATION FORM</h2>
                    {/* <p>Login to your VJM Profile</p> */}

                </div>

                <div className="inputBox">
                   
                    <h4>Options for Educating a child</h4>
                    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="skilldev"
      >
        <FormControlLabel value="edufor1child" control={<Radio style={{color: '#b73c1d'}}  />} label="Education for 1 child for 1 year" />
        <FormControlLabel value="middaymeal" control={<Radio  style={{color: '#b73c1d'}}  />} label="Mid day meal for 1 child for 1 year" />
        <FormControlLabel value="uniform" control={<Radio style={{color: '#b73c1d'}}   />} label="Uniforms & Stationary for 1 child for 1 year" />
        <FormControlLabel value="medical" control={<Radio style={{color: '#b73c1d'}}   />} label="Medical Facilities for 1 child for 1 year" />
        <FormControlLabel value="skilldev" control={<Radio style={{color: '#b73c1d'}}   />} label="Complete skill development course for 1 child" />
      </RadioGroup>
    </FormControl>
    <h4>I would like to donate below in INR to educate a child</h4>
                    <input placeholder='Please enter your amount' type="Number"  onChange={(e)=> setVal(e.target.value)}/>
                    <h4>Other Specific Amount</h4>
                    <input placeholder='Please enter your amount' type="Number"  onChange={(e)=> setVal1(e.target.value)}/>

                    
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
    <h4>Total Amount</h4>
    <input placeholder='total Amount' disabled type='Number' value={totalVal} />


                    
                    <div className="loginSignUp1">
                        {/* <button className='loginBtn'>Submit</button> */}
                        <button className='loginBtn' onClick={()=>checkoutHandler(totalVal)}>Donate</button>

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

export default BalkalyanDonate