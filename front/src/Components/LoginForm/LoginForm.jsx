/* eslint-disable no-unused-vars */
import React from 'react';
import "./LoginForm.css";
import { FaUserAlt } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";



export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required />
                <FaUserAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Password' required/>
                <FaUnlock className='icon'/>
            </div>
            <div className='forgot-password'>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>You hungry? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm