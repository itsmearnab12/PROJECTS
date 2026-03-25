import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Loginpage.css"
const LoginPage = () => {

  const [state, setState] = useState('Sign up');

  return (
    <div className='form'>
      <div className='form-box'>
        <div>
          <h2>{state === 'Sign up' ? 'Welcome to Fintech' : 'Create Your Account'}</h2>
          <h2>{state === 'Sign up' ? 'Welcome to Fintech' : 'Login To Your Account'}</h2>
        </div>
        <form>
          {state === 'Sign up' && (
            <div className='fromdetails'>
              <FaUser />
              <input type="text" placeholder='Full Name' required />
            </div>
          )}
          <div className='fromdetails'>
            <MdOutlineMailOutline />
            <input type="Email" placeholder='Email Id' required />
          </div>
          <div className='fromdetails'>
            <RiLockPasswordLine />
            <input type="Password" placeholder='Password' required />
          </div>
          <button>{state}</button>
        </form>
        {state === 'Sign up' ? (
          <p>Already have an account?{' '}
            <span onClick={() => setState('Login')}>Login here</span>
          </p>
        ) : (
          <p>Don't have an account?{' '}
            <span onClick={() => setState('Sign up')}>Signup here</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default LoginPage;