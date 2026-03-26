import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Loginpage.css"
const LoginPage = () => {

  const [state, setState] = useState('Sign up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    try {
      const url =
        state === "Sign up"
          ? "http://localhost:4000/api/auth/signup"
          : "http://localhost:4000/api/auth/login"

      const payload =
        state === "Sign up"
          ? { name, email, password }
          : { email, password };

      const res = await axios.post(url, payload, {
        withCredentials: true
      });

      if (res.data.success) {
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form'>
      <div className='form-box'>
        <div>
          <h2>Welcome to Fintech</h2>
          <h2>{state === 'Sign up' ? 'Create Your Account' : 'Login to Your Account'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {state === 'Sign up' && (
            <div className='form-details'>
              <FaUser />
              <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          <div className='form-details'>
            <MdOutlineMailOutline />
            <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='form-details'>
            <RiLockPasswordLine />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">{state}</button>
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