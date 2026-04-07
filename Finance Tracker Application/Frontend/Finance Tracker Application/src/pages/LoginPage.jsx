import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/loginpage.png";
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
        console.log(res.data);
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
          <h1>{state === 'Sign up' ? 'Welcome to FinSet!' : 'Sign in'}</h1>
          <h5>{state === 'Sign up' ? 'Sign up and start managing your finances now' : 'Welcome there! Sign in to continue with FinSet'}</h5>
        </div>
        <form onSubmit={handleSubmit}>
          {state === 'Sign up' && (
            <div className='form-details'>
              <input type="text" placeholder='Enter your full name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          <div className='form-details'>
            <input type="email" placeholder='Enter your Email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='form-details'>
            <input type="password" placeholder='Create password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">{state}</button>
        </form>
        {state === 'Sign up' ? (
          <p>Already have an account?{' '}
            <span onClick={() => setState('Sign in')}>Login here</span>
          </p>
        ) : (
          <p>Don't have an account?{' '}
            <span onClick={() => setState('Sign up')}>Signup here</span>
          </p>
        )}
      </div>
      <div className="image-box">
        <img src={loginimg} alt="" />
      </div>
    </div>
  )
}

export default LoginPage;