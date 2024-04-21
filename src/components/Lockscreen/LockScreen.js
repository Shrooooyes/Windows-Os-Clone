import React, { useState } from 'react'
import Time from './Time/Time'
import backdrop from './imgs/backdrop.jpg'
import Login from '../Login/Login';

import './Lockscreen.css'

const LockScreen = () => {

  const [displayLock, setDisplay] = useState(false);

  const setMyLock = () => {
    if(!displayLock){
      return (
        <div className='Lockscreen'>
          <div className='time-container'>
            <Time className='time' />
          </div>
          <button className='DisplayLock' onClick={DisplayLock}><img src={backdrop} className='backdrop' alt='Backdrop' /></button>
        </div>
      );
    }else{
      return(<Login/>);
    }
  }

  const DisplayLock = () => {
    setDisplay(true);
  }

  return (
    <>
      {setMyLock()}
    </>
  )
}

export default LockScreen;
