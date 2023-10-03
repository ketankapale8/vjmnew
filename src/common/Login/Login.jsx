import React from 'react';
import './login.scss';
// import Footer from '../../common/Footer/Footer';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    
    <div className='login'>
        <div className="loginContainer">
            <div className="topTitleBox">
                <img alt='brand' src={logo} className='logo'/>

            </div>
                <div className="titles" >
                    <h2>Login</h2>
                    <p>Login to your VJM Profile</p>

                </div>

                <div className="inputBox">
                    <h4>Email</h4>
                    <input placeholder='please enter your email' type='email'/>
                    <h4>Password</h4>
                    <input placeholder='please enter your password' type='password'/>
                    <div className="loginSignUp">
                        <button className='loginBtn'>Login</button>
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