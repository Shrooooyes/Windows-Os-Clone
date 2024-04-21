import React, { useState } from 'react'

import profile from './imgs/profile.jpeg'

import Typography from '@mui/material/Typography';


import './Start.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Start = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [command, setCommand] = useState("Shut Down")

  const handleCommand = (value) => {
    setCommand(value)
  }

  const doCommand = (e) => {
    e.preventDefault()
    handleClose()
    props.change(command)
    props.command()
  }

  return (
    <div className='Start-menu'>
      <div>
        <div className={open ? 'modal-open' : 'modal-closed'}>
          <div className='Modal'>
            <div className='Box' style={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Do you want to {command}
              </Typography>
              <div className='OK'>
                <button className='doCommand' onClick={doCommand}>
                  <img width="48" height="48" src="https://img.icons8.com/color/48/shutdown--v1.png" alt="shutdown--v1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='white-part'>
          <div className='Recent-apps'>
            <div className='Chrome'>
              <button><img width="50" height="50" src="https://img.icons8.com/bubbles/50/chrome.png" alt="chrome" /></button>
              <p>Chrome</p>
            </div>
            <div className='Files'>
              <button onClick={props.opentab}><svg width="50px" height="50px" viewBox="-3.2 -3.2 38.40 38.40" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_2691)"> <path d="M31 8V30C31 31 30 31 30 31H5C3 31 3 29 3 29V27C5 27 5 25 5 25V8C5 7 6 7 6 7H30C31 7 31 8 31 8Z" fill="#FFC44D"></path> <path d="M30 7H6C6 7 5 7 5 8V25C5 25 5 27 3 27C1 27 1 25 1 25V2C1 2 1 1 2 1H8L10 3H26C26 3 30 3 30 7Z" fill="#668077"></path> <path d="M3 31H30C30 31 31 31 31 30V8C31 8 31 7 30 7H6C6 7 5 7 5 8V25C5 25 5 27 3 27C1 27 1 25 1 25V2C1 2 1 1 2 1H8L10 3H26" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_2691"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg></button>
              <p>File Explorer</p>
            </div>
            <div className='Settings'>
              <button><img width="50" height="50" src="https://img.icons8.com/bubbles/50/apple-settings--v1.png" alt="apple-settings--v1" /></button>
              <p>Settings</p>
            </div>
            <div className='Powerpoint'>
              <button><img width="50" height="50" src="https://img.icons8.com/bubbles/50/ms-powerpoint.png" alt="ms-powerpoint" /></button>
              <p>Powerpoint 2007</p>
            </div>
            <div className='Internet'>
              <button className='Internet-Explorer'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"><path fill="#85cbf8" d="M58.42,41.65h-15c-2.17,3.84-5.18,6-10.37,6-6.38,0-10.93-5.53-11.09-11.16h37c.93-18.25-11-29.44-25.21-29.44C17.78,7,9.25,16,7.25,27.24,5,40.5,8.88,59.41,31.92,59.41,44.93,59.41,54.59,52.73,58.42,41.65ZM33,19.06A10.58,10.58,0,0,1,43.83,29H22.11A11,11,0,0,1,33,19.06Z"></path><path fill="#85cbf8" d="M55.43,31.8a22.21,22.21,0,1,0-2.31,9.85H43.41c-2.17,3.84-5.18,6-10.37,6-6.39,0-10.93-5.54-11.09-11.16h33A22,22,0,0,0,55.43,31.8ZM22.11,29A11,11,0,0,1,33,19.06,10.57,10.57,0,0,1,43.83,29Z"></path><path fill="#6fc6f0" d="M58.42,41.65c-3.83,11.08-13.49,17.76-26.5,17.76-9.42,0-15.63-3.16-19.53-7.8l1.95-1.95a4,4,0,0,1,5.23-.37,22.19,22.19,0,0,0,33.55-7.65Z"></path><path fill="#9fddff" d="M57.74,25.33l-1,.33A3,3,0,0,1,53.06,24a21.39,21.39,0,0,0-4.27-6.63,20.5,20.5,0,0,0-15.06-6.29H33.6a33,33,0,0,0-4.23.26A3,3,0,0,1,26,9.19l-.37-1.28a35.5,35.5,0,0,1,8.07-.85C44.74,7.06,54.4,13.8,57.74,25.33Z"></path><path fill="#8d6c9f" d="M33 18.06A12 12 0 0 0 21.11 28.93a1 1 0 0 0 1 1.05H43.83a1 1 0 0 0 1-1A11.64 11.64 0 0 0 33 18.06zM23.24 28A10 10 0 0 1 33 20.06 9.69 9.69 0 0 1 42.73 28zM33 56a1 1 0 0 0 1-1V53a1 1 0 0 0-2 0v2A1 1 0 0 0 33 56zM37.6 54.53A1 1 0 0 0 39.53 54L39 52.08a1 1 0 0 0-1.93.52zM21.75 53a1 1 0 0 0 1.37-.37l1-1.73a1 1 0 0 0-1.73-1l-1 1.73A1 1 0 0 0 21.75 53zM42.88 52.62a1 1 0 1 0 1.73-1l-1-1.73a1 1 0 0 0-1.73 1zM27.18 55.23a1 1 0 0 0 1.22-.71l.52-1.93A1 1 0 1 0 27 52.08L26.47 54A1 1 0 0 0 27.18 55.23zM40.35 13.32a21.1 21.1 0 0 1 2.1.92 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89 22.71 22.71 0 0 0-2.3-1 1 1 0 0 0-.7 1.87zM47.17 14.88a1 1 0 0 0-1.23 1.57 21.13 21.13 0 0 1 5.61 6.68 1 1 0 0 0 1.77-.94 23 23 0 0 0-4-5.46A23.28 23.28 0 0 0 47.17 14.88z"></path><path fill="#8d6c9f" d="M57.45,7c-3.63-3.63-10.18-3.49-17.72-.3a27.67,27.67,0,0,0-6.12-.69c-14.78,0-25,7.85-27.34,21a38.28,38.28,0,0,0-.14,12.37C2.24,47.67,1.81,54.91,5.7,58.8a10.18,10.18,0,0,0,7.47,2.7,25.78,25.78,0,0,0,9.2-2,1,1,0,0,0,.37-.26,33.91,33.91,0,0,0,9.19,1.17c13.19,0,23.45-6.89,27.44-18.43a1,1,0,0,0-.95-1.33h-15a1,1,0,0,0-.87.51c-2.17,3.85-5,5.5-9.5,5.5-5.63,0-9.4-4.58-10-9.16H59a1,1,0,0,0,1-.95,34.22,34.22,0,0,0-1.74-13C61,16.23,60.77,10.37,57.45,7ZM56,8.46c2.39,2.4,2.74,6.81,1,12.3a26,26,0,0,0-4.65-6.86A24.84,24.84,0,0,0,43,7.71C48.66,5.77,53.43,5.85,56,8.46Zm-47.8,19C10.39,15.29,19.87,8.06,33.61,8.06h.13a25.47,25.47,0,0,1,2.85.16A70.16,70.16,0,0,0,19.62,21,72.16,72.16,0,0,0,7.78,36.25,37.41,37.41,0,0,1,8.24,27.42Zm-1.12,30c-2.83-2.83-2.69-8.18-.23-14.47a24.58,24.58,0,0,0,4.76,9.36,21.3,21.3,0,0,0,8.26,6C14.18,60.14,9.58,59.85,7.11,57.38ZM58,35.5h-36a1,1,0,0,0-1,1c.16,5.83,4.83,12.13,12.09,12.13,5,0,8.46-1.91,10.95-6H57c-4,10-13.09,15.76-25.06,15.76-8.29,0-14.6-2.5-18.76-7.42A23.82,23.82,0,0,1,8.23,39.85,66.93,66.93,0,0,1,21,22.38,65.17,65.17,0,0,1,40,8.86,23,23,0,0,1,51,15.28C55.79,20.35,58.2,27.33,58,35.5Z"></path></svg></button>
              <p>Internet Explorer</p>
            </div>
          </div>
          <div className='more-apps'>
            <div className='Chrome'>
              <button><img width="64" height="64" src="https://img.icons8.com/dusk/64/microsoft-paint.png" alt="microsoft-paint" /></button>
              <p>Paint</p>
            </div>
            <div className='Files'>
              <button><img width="100" height="100" src="https://img.icons8.com/plasticine/100/microsoft-solitaire-collection.png" alt="microsoft-solitaire-collection" /></button>
              <p>Solitaire</p>
            </div>
            <div className='Settings'>
              <button><img width="48" height="48" src="https://img.icons8.com/fluency/48/windows-snipping-tool.png" alt="windows-snipping-tool" /></button>
              <p>Snipping Tool</p>
            </div>
            <div className='Powerpoint'>
              <button><img width="48" height="48" src="https://img.icons8.com/color/48/task--v1.png" alt="task--v1" /></button>
              <p>Notepad</p>
            </div>
            <div className='Internet'>
              <button><img width="64" height="64" src="https://img.icons8.com/dusk/64/apple-calculator.png" alt="apple-calculator" /></button>
              <p>Calculator</p>
            </div>
          </div>
        </div>
        <div className='All-programs'>
          <button><div className='AllP-arow'>=&gt;</div> All Programs</button>
        </div>
      </div>
      <div className='Acc'>
        <button><img src={profile} alt='myprofile' title='Shreyash Sawant' /></button>
      </div>
      <div className='moreoptions'>
        <div className='options'>
          <div><button>Shreyash</button></div>
          <div><button>Documents</button></div>
          <div><button>Pictures</button></div>
          <div><button>Music</button></div>
          <div><button>Games</button></div>
          <div><button>Computer</button></div>
          <div><button>Control Panel</button></div>
          <div><button>Devices and Printers</button></div>
          <div><button>Default Programs</button></div>
          <div><button>Help and Support</button></div>
        </div>
        <div className='command'>
          <button onClick={() => {console.log("done");handleOpen()}}>{command}</button>
          <select onChange={(e) => { handleCommand(e.target.value) }}>
            <option>Shut Down</option>
            <option>Restart</option>
            <option>Sleep</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Start