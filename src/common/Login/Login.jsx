import React ,{useState} from 'react';
import { useContext } from 'react';
import {Context} from '../../index.js';
import {Navigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss';
// import Footer from '../../common/Footer/Footer';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const url ="http://localhost:4000";
    const {isAuthenticated, setIsAuthenticated , loading , setloading , setUser} = useContext(Context)
    const [values, setValues] = useState({
        email: "",
        password: "",
        // confirmPassword: "",
      });
      const { email , password } = values;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try{
          const {data} = await axios.post(
            `${url}/api/v1/login`, 
            {
             
              email,
              password
            },
            {
              headers : {
                "Content-Type" : "application/json",
                // "Content-Type": "multipart/form-data",
                
                
              }, 
              // withCredentials : true
            }
          )
         
          toast.success("Logged In Successfully!")
          setUser(data.user)
          setIsAuthenticated(true)
          setloading(false)
          

        }catch(err){
          toast.error("Check your Credentials!")
          setIsAuthenticated(false)
          setloading(false)

        }

        // dispatch(login(values.email , values.password , values.name))
        // localStorage.setItem("currentUser", JSON.stringify({values}))
        // dispatch(login(values.email , values.password));
      };

      if(isAuthenticated) return <Navigate to={"/"}/>


  return (
    <>
    
    <div className='login'>
        <div className="loginContainer">
            <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>

            </div>
                <div className="titles" >
                    <h2>Login</h2>
                    {/* <p>Login to your VJM Profile</p> */}

                </div>

                <div className="inputBox">
                    <h4>Email</h4>
                    <input placeholder='please enter your email' type='email' onChange={(e)=> setValues({...values , email : e.target.value})}/>
                    <h4>Password</h4>
                    <input placeholder='please enter your password' type='password' onChange={(e)=> setValues({...values , password : e.target.value})}/>
                    <div className="loginSignUp">
                        <button className='loginBtn' onClick={handleSubmit}>Login</button>
                        <p className='forgetPassword'>Forgot your password?</p>
                    </div>
                    <div className="signUpContainer">
                        <h4>Don't have an account?</h4>
                        <Link to="/signup" style={{textDecoration:'none', color:'inherit'}}>
                            <button className='loginBtns'>Sign Up</button>
                        
                        </Link>
                        
                    </div>
                </div>

        </div>
    </div>
    </>
  )
}

export default Login