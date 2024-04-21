import React, { useState } from 'react'
import profile from './imgs/profile.jpeg';
import backdrop from './imgs/backdrop.jpg'
import Home from '../Home/Home';

import './Login.css'

const Login = () => {
  const [isLogged, setLogged] = useState(null);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  }

  const checkPassword = (e) => {
    e.preventDefault();

    if (password === "happy@123") {
      setLogged(true);
    }
    else {
      setLogged(false);
    }
  }

  const values = ["password", "text"];

  const [passType, setPassType] = useState(values[0])

  const showPass = (e) => {
    e.preventDefault()
    if (passType === values[0]) {
      setPassType(values[1]);
    }
    else {
      setPassType(values[0])
    }
  }

  const goHome = () => {
    if (isLogged === true) {
      return (<Home />);
    }
    else {
      return (
        <div className='Login'>
          <a><img id='Login-Back' src={backdrop} className='backdrop' alt='Backdrop' /></a>
          <button className='Account'>
            <div className='profile'>
              <img className='profile-pic' src={profile} alt='profile' />
            </div>
            <form className='details'>
              <div className='name'>Shreyash</div>
              <div class="form-inline">
                <input onChange={handleChange} type={passType} class="inpform form-control mr-1" />
                <button className='showPass' onClick={(e) => (showPass(e))}>{passType === values[0]?(<img width="24" height="24" src="https://img.icons8.com/material-rounded/24/hide.png" alt="hide"/>):(<img width="24" height="24" src="https://img.icons8.com/material-rounded/24/visible.png" alt="visible"/>)}</button>
                <button onClick={checkPassword} class="btn btn-primary">-&gt;</button>
              </div>
              <>{displayErr()}</>
            </form>
          </button>
        </div>
      );
    }
  }

  const displayErr = () => {
    if (isLogged === false) {
      return (<div style={{ color: "red" }}>Enter Correct Password</div>);
    }
    else if (isLogged === true) {
      goHome();
    }
  }

  return (
    <>{goHome()}</>
  )
}

export default Login
