import React from 'react'
import StartBtn from './imgs/StartBtn.png'

import Popup from 'reactjs-popup';
import Start from '../Start/Start';
import 'reactjs-popup/dist/index.css';

import './Menu.css';


const Menu = (props) => {


  const openTab = () => {
    props.opentab()
  }

  return (
    <div className='Menu-Bar'>

      <Popup trigger={<button className='StartBtn'><img src={StartBtn} alt='Start' /></button>
      }
        position="top left"
        arrowStyle={{display:'none'}}
        contentStyle={{
          backgroundColor: "#0a304d",
          position: "absolute",
          zIndex: 999,
          padding: "20px",
          width: '420px',
          pointerEvents: 'auto',
          left: '6px'
        }}>
        <div>
          <Start opentab={props.openTab} command={props.command} change={props.change}/>
        </div>
      </Popup>

      <input className='Search' type='search' placeholder='🔎 Search' />
      <div className='icons'>
        <button className='File-Explorer' onClick={openTab}><svg width="50px" height="50px" viewBox="-3.2 -3.2 38.40 38.40" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_2691)"> <path d="M31 8V30C31 31 30 31 30 31H5C3 31 3 29 3 29V27C5 27 5 25 5 25V8C5 7 6 7 6 7H30C31 7 31 8 31 8Z" fill="#FFC44D"></path> <path d="M30 7H6C6 7 5 7 5 8V25C5 25 5 27 3 27C1 27 1 25 1 25V2C1 2 1 1 2 1H8L10 3H26C26 3 30 3 30 7Z" fill="#668077"></path> <path d="M3 31H30C30 31 31 31 31 30V8C31 8 31 7 30 7H6C6 7 5 7 5 8V25C5 25 5 27 3 27C1 27 1 25 1 25V2C1 2 1 1 2 1H8L10 3H26" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_2691"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg></button>
        <button className='Internet-Explorer'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"><path fill="#85cbf8" d="M58.42,41.65h-15c-2.17,3.84-5.18,6-10.37,6-6.38,0-10.93-5.53-11.09-11.16h37c.93-18.25-11-29.44-25.21-29.44C17.78,7,9.25,16,7.25,27.24,5,40.5,8.88,59.41,31.92,59.41,44.93,59.41,54.59,52.73,58.42,41.65ZM33,19.06A10.58,10.58,0,0,1,43.83,29H22.11A11,11,0,0,1,33,19.06Z"></path><path fill="#85cbf8" d="M55.43,31.8a22.21,22.21,0,1,0-2.31,9.85H43.41c-2.17,3.84-5.18,6-10.37,6-6.39,0-10.93-5.54-11.09-11.16h33A22,22,0,0,0,55.43,31.8ZM22.11,29A11,11,0,0,1,33,19.06,10.57,10.57,0,0,1,43.83,29Z"></path><path fill="#6fc6f0" d="M58.42,41.65c-3.83,11.08-13.49,17.76-26.5,17.76-9.42,0-15.63-3.16-19.53-7.8l1.95-1.95a4,4,0,0,1,5.23-.37,22.19,22.19,0,0,0,33.55-7.65Z"></path><path fill="#9fddff" d="M57.74,25.33l-1,.33A3,3,0,0,1,53.06,24a21.39,21.39,0,0,0-4.27-6.63,20.5,20.5,0,0,0-15.06-6.29H33.6a33,33,0,0,0-4.23.26A3,3,0,0,1,26,9.19l-.37-1.28a35.5,35.5,0,0,1,8.07-.85C44.74,7.06,54.4,13.8,57.74,25.33Z"></path><path fill="#8d6c9f" d="M33 18.06A12 12 0 0 0 21.11 28.93a1 1 0 0 0 1 1.05H43.83a1 1 0 0 0 1-1A11.64 11.64 0 0 0 33 18.06zM23.24 28A10 10 0 0 1 33 20.06 9.69 9.69 0 0 1 42.73 28zM33 56a1 1 0 0 0 1-1V53a1 1 0 0 0-2 0v2A1 1 0 0 0 33 56zM37.6 54.53A1 1 0 0 0 39.53 54L39 52.08a1 1 0 0 0-1.93.52zM21.75 53a1 1 0 0 0 1.37-.37l1-1.73a1 1 0 0 0-1.73-1l-1 1.73A1 1 0 0 0 21.75 53zM42.88 52.62a1 1 0 1 0 1.73-1l-1-1.73a1 1 0 0 0-1.73 1zM27.18 55.23a1 1 0 0 0 1.22-.71l.52-1.93A1 1 0 1 0 27 52.08L26.47 54A1 1 0 0 0 27.18 55.23zM40.35 13.32a21.1 21.1 0 0 1 2.1.92 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89 22.71 22.71 0 0 0-2.3-1 1 1 0 0 0-.7 1.87zM47.17 14.88a1 1 0 0 0-1.23 1.57 21.13 21.13 0 0 1 5.61 6.68 1 1 0 0 0 1.77-.94 23 23 0 0 0-4-5.46A23.28 23.28 0 0 0 47.17 14.88z"></path><path fill="#8d6c9f" d="M57.45,7c-3.63-3.63-10.18-3.49-17.72-.3a27.67,27.67,0,0,0-6.12-.69c-14.78,0-25,7.85-27.34,21a38.28,38.28,0,0,0-.14,12.37C2.24,47.67,1.81,54.91,5.7,58.8a10.18,10.18,0,0,0,7.47,2.7,25.78,25.78,0,0,0,9.2-2,1,1,0,0,0,.37-.26,33.91,33.91,0,0,0,9.19,1.17c13.19,0,23.45-6.89,27.44-18.43a1,1,0,0,0-.95-1.33h-15a1,1,0,0,0-.87.51c-2.17,3.85-5,5.5-9.5,5.5-5.63,0-9.4-4.58-10-9.16H59a1,1,0,0,0,1-.95,34.22,34.22,0,0,0-1.74-13C61,16.23,60.77,10.37,57.45,7ZM56,8.46c2.39,2.4,2.74,6.81,1,12.3a26,26,0,0,0-4.65-6.86A24.84,24.84,0,0,0,43,7.71C48.66,5.77,53.43,5.85,56,8.46Zm-47.8,19C10.39,15.29,19.87,8.06,33.61,8.06h.13a25.47,25.47,0,0,1,2.85.16A70.16,70.16,0,0,0,19.62,21,72.16,72.16,0,0,0,7.78,36.25,37.41,37.41,0,0,1,8.24,27.42Zm-1.12,30c-2.83-2.83-2.69-8.18-.23-14.47a24.58,24.58,0,0,0,4.76,9.36,21.3,21.3,0,0,0,8.26,6C14.18,60.14,9.58,59.85,7.11,57.38ZM58,35.5h-36a1,1,0,0,0-1,1c.16,5.83,4.83,12.13,12.09,12.13,5,0,8.46-1.91,10.95-6H57c-4,10-13.09,15.76-25.06,15.76-8.29,0-14.6-2.5-18.76-7.42A23.82,23.82,0,0,1,8.23,39.85,66.93,66.93,0,0,1,21,22.38,65.17,65.17,0,0,1,40,8.86,23,23,0,0,1,51,15.28C55.79,20.35,58.2,27.33,58,35.5Z"></path></svg></button>
        <button className='Store'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100"><path fill="#e0decf" d="M68.841,80.693H30.909c-6.922,0-12.534-5.611-12.534-12.534V30.652c0-1.465,1.188-2.653,2.653-2.653	h57.694c1.465,0,2.653,1.188,2.653,2.653V68.16C81.375,75.082,75.764,80.693,68.841,80.693z"></path><path fill="#1f212b" d="M22.5,64.125c-0.276,0-0.5-0.224-0.5-0.5V56c0-0.276,0.224-0.5,0.5-0.5S23,55.724,23,56v7.625	C23,63.901,22.776,64.125,22.5,64.125z"></path><path fill="#1f212b" d="M68.967,77H31.033C26.053,77,22,72.964,22,68.003c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5	C23,72.413,26.604,76,31.033,76h37.934C73.396,76,77,72.413,77,68.003V60.75c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v7.253	C78,72.964,73.947,77,68.967,77z"></path><path fill="#1f212b" d="M77.5,57.125c-0.276,0-0.5-0.224-0.5-0.5v-12.25c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v12.25	C78,56.901,77.776,57.125,77.5,57.125z"></path><path fill="#1f212b" d="M77.5,41.375c-0.276,0-0.5-0.224-0.5-0.5v-4.892c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4.892	C78,41.151,77.776,41.375,77.5,41.375z"></path><polyline fill="#f05b6c" points="48.597,50.375 48.597,52.604 37.494,52.604 37.494,41.5 48.597,41.5 48.597,46.875"></polyline><path fill="#1f212b" d="M48.598,53.104H37.494c-0.276,0-0.5-0.224-0.5-0.5V41.5c0-0.276,0.224-0.5,0.5-0.5h11.104 c0.276,0,0.5,0.224,0.5,0.5v5.375c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V42H37.994v10.104h10.104v-1.729 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2.229C49.098,52.88,48.874,53.104,48.598,53.104z"></path><rect width="11.082" height="11.082" x="51.373" y="41.522" fill="#70b570"></rect><path fill="#1f212b" d="M62.455,53.104H51.373c-0.276,0-0.5-0.224-0.5-0.5V41.521c0-0.276,0.224-0.5,0.5-0.5h11.082 c0.276,0,0.5,0.224,0.5,0.5v11.082C62.955,52.88,62.731,53.104,62.455,53.104z M51.873,52.104h10.082V42.021H51.873V52.104z"></path><polygon fill="#31c4f3" points="48.597,60.75 48.597,66.483 46,66.483 43.75,66.483 37.494,66.483 37.494,55.379 48.597,55.379 48.597,58.5"></polygon><polyline fill="#f9b621" points="55.25,55.448 62.5,55.448 62.5,66.551 51.396,66.551 51.396,55.448"></polyline><path fill="#1f212b" d="M62.5,67.051H51.396c-0.276,0-0.5-0.224-0.5-0.5V55.448c0-0.276,0.224-0.5,0.5-0.5 s0.5,0.224,0.5,0.5v10.604H62V55.948h-6.75c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7.25c0.276,0,0.5,0.224,0.5,0.5v11.104 C63,66.828,62.776,67.051,62.5,67.051z"></path><path fill="#31c4f3" d="M35,32.375c-1.104,0-2-0.896-2-2v-6.059c-0.071-1.231,0.353-2.409,1.2-3.324	c0.865-0.935,2.099-1.492,3.3-1.492h25c2.313,0,4.5,2.187,4.5,4.5v6.25c0,1.104-0.896,2-2,2s-2-0.896-2-2V24	c-0.035-0.141-0.357-0.465-0.536-0.502L37.5,23.5c-0.048,0.001-0.228,0.057-0.372,0.219c-0.133,0.148-0.142,0.28-0.134,0.378	L37,24.25v6.125C37,31.479,36.104,32.375,35,32.375z"></path><rect width="25.75" height="3.875" x="37.125" y="20" fill="#09ace3"></rect><path fill="#1f212b" d="M69.25,82H31.103C23.458,82,17,75.765,17,68.385V30.764C17,28.688,18.626,27,20.625,27H31v-3.125	c0-1.574,0.677-3.188,1.812-4.319C33.818,18.552,35.123,18,36.487,18c0.006,0,0.011,0,0.016,0l26.569,0.008	c1.524-0.067,2.937,0.462,4.054,1.532C68.3,20.664,69,22.284,69,23.875V27h10.152C81.202,27,83,28.759,83,30.764v37.621	C83,75.893,76.832,82,69.25,82z M20.625,29C19.653,29,19,29.912,19,30.764v37.621C19,74.681,24.542,80,31.103,80H69.25	C75.729,80,81,74.79,81,68.385V30.764C81,29.857,80.103,29,79.152,29H68c-0.553,0-1-0.448-1-1v-4.125	c0-1.041-0.481-2.148-1.257-2.89c-0.497-0.477-1.345-1.028-2.627-0.978L36.5,20c-0.004,0-0.007,0-0.011,0	c-1.067,0-1.82,0.528-2.267,0.972C33.469,21.725,33,22.837,33,23.875V28c0,0.552-0.447,1-1,1H20.625z"></path><path fill="#1f212b" d="M62.5,29.001h-25c-0.134,0-0.263-0.054-0.356-0.149c-0.095-0.096-0.146-0.225-0.145-0.359l0.056-4.5	c0.003-0.274,0.227-0.495,0.501-0.495c0.001,0,0.001,0,0.002,0l24.944,0.083c0.276,0.001,0.499,0.225,0.499,0.501V28.5	C63.001,28.777,62.777,29.001,62.5,29.001z M38.008,27.999h23.991v-3.416l-23.948-0.08L38.008,27.999z"></path><g><polyline fill="#31c4f3" points="43.75,66.483 37.494,66.483 37.494,55.379 48.597,55.379 48.597,58.5"></polyline><path fill="#1f212b" d="M43.75,66.983h-6.256c-0.276,0-0.5-0.224-0.5-0.5V55.379c0-0.276,0.224-0.5,0.5-0.5h11.104 c0.276,0,0.5,0.224,0.5,0.5V58.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-2.621H37.994v10.104h5.756 c0.276,0,0.5,0.224,0.5,0.5S44.026,66.983,43.75,66.983z"></path></g><g><polyline fill="#31c4f3" points="48.597,60.75 48.597,66.483 46,66.483"></polyline><path fill="#1f212b" d="M48.598,66.983H46c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2.098V60.75 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.733C49.098,66.759,48.874,66.983,48.598,66.983z"></path></g></svg></button>
        <button className='MS-Word'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#4b7bb2" d="M40.864,39.706H21.401V11.054h19.463c1.105,0,2,0.895,2,2v24.652 C42.864,38.811,41.968,39.706,40.864,39.706z"></path><path fill="#d6e5e5" d="M25.785,30.5c1.405,0,12.81,0,14.215,0l-0.095-1.664l-14.034,0.25L25.785,30.5z"></path><path fill="#d6e5e5" d="M25.785,22.5c1.405,0,12.81,0,14.215,0l-0.095-1.664l-14.034,0.25L25.785,22.5z"></path><path fill="#d6e5e5" d="M26.106,26.24c1.585,0.102,11.809,0.158,13.394,0.26L39.125,25l-13.174-0.12L26.106,26.24z"></path><path fill="#d6e5e5" d="M25.785,34.5c1.405,0,12.81,0,14.215,0l-0.095-1.664l-14.034,0.25L25.785,34.5z"></path><path fill="#d6e5e5" d="M26.106,18.24c1.585,0.102,11.809,0.158,13.394,0.26L39.125,17h-13.25L26.106,18.24z"></path><path fill="#1d1d1b" d="M43.5,31.05c-0.03,1.37-0.08,2.74-0.16,4.12c-0.04,0.72-0.09,1.45-0.15,2.18 c-0.04,0.54-0.01,1.18-0.21,1.69C42.55,40.15,41.33,40,40.35,40c-1.38,0-2.77,0.01-4.15,0.01c-3.45,0.01-6.9,0.02-10.35,0.01 c-0.34,0-0.67,0-1-0.01c-0.01-0.33-0.02-0.67-0.03-1c0.33,0.01,0.67,0.01,1,0c3.73,0.02,7.47,0.01,11.2,0 C38.29,39,39.57,39,40.84,39c0.31,0,0.78,0.09,1.05-0.12c0.24-0.18,0.22-0.51,0.24-0.79c0.06-0.65,0.11-1.31,0.15-1.96 c0.17-2.5,0.24-5,0.24-7.5c0.01-5.01-0.26-10.02-0.45-15.03c-0.02-0.47,0.16-1.47-0.41-1.68c-0.4-0.14-0.97-0.09-1.39-0.11 c-0.99-0.07-1.97-0.12-2.96-0.15c-2.17-0.08-4.35-0.09-6.53-0.07c-1.82,0.02-3.65,0.06-5.47,0.12c-0.33,0.01-0.67,0.02-1,0.03 c-0.01-0.33-0.02-0.67-0.04-1c0.34-0.02,0.67-0.03,1.01-0.03c2.76-0.1,5.51-0.15,8.27-0.13c2.21,0.02,4.42,0.07,6.63,0.22 c0.85,0.06,2.01-0.06,2.56,0.74c0.34,0.47,0.29,1.03,0.31,1.58c0.03,0.64,0.05,1.28,0.08,1.93C43.34,20.38,43.6,25.71,43.5,31.05z"></path><path fill="#1e4384" d="M6.556,13.875c-0.023-0.541-0.04-1.109,0.196-1.596c0.322-0.665,0.996-1.136,1.703-1.35 C16.5,8.5,17.5,8.5,27.5,6.5c0,16,0.284,20.922,0,37c-7.403-1.083-12.295-1.016-19.397-2.619c-0.929-0.21-1.59-1.035-1.573-1.987 C6.607,34.538,6.79,19.451,6.556,13.875z"></path><path fill="#1d1d1b" d="M7.056,13.875c-0.041-1.067,0.192-1.898,1.244-2.356c0.767-0.334,1.637-0.514,2.44-0.749 c1.277-0.374,2.558-0.736,3.847-1.068c2.308-0.594,4.644-1.067,6.982-1.526c2.021-0.397,4.043-0.791,6.063-1.194 C27.422,6.821,27.211,6.661,27,6.5c0.001,9.255,0.171,18.509,0.114,27.764c-0.019,3.079-0.06,6.158-0.114,9.236 c0.211-0.161,0.422-0.321,0.633-0.482c-3.903-0.566-7.831-0.871-11.746-1.332c-1.952-0.23-3.897-0.521-5.826-0.901 c-0.873-0.172-2.214-0.199-2.767-1.007c-0.33-0.482-0.261-1.054-0.253-1.606C7.128,32.837,7.176,27.5,7.171,22.165 C7.168,19.402,7.169,16.635,7.056,13.875c-0.026-0.641-1.027-0.645-1,0c0.23,5.584,0.126,11.191,0.077,16.777 c-0.022,2.477-0.05,4.954-0.089,7.431c-0.008,0.513-0.06,1.048,0.088,1.546c0.215,0.722,0.75,1.314,1.444,1.604 c0.946,0.395,2.094,0.501,3.1,0.685c1.014,0.186,2.032,0.349,3.054,0.492c4.533,0.634,9.107,0.916,13.638,1.574 c0.32,0.046,0.627-0.126,0.633-0.482c0.162-9.27,0.096-18.534,0.032-27.804C28.011,12.63,28,9.565,28,6.5 c0-0.343-0.318-0.545-0.633-0.482c-5.908,1.181-11.788,2.275-17.572,3.987c-0.918,0.272-1.927,0.463-2.69,1.075 c-0.902,0.723-1.092,1.688-1.05,2.794C6.08,14.516,7.08,14.519,7.056,13.875z"></path><path fill="#d6e5e5" d="M8.585,19.496c0.802-0.032,2.791,0.122,3.585,0c0.899,2.837,1.896,4.481,2.439,8.218 c0.045-2.862,0.308-4.356,0.353-7.218c0.002-0.15,2.019-0.013,2.689,0c0.783,3.157,0.967,4.54,1.376,7.767 c0.429-2.948,1.858-5.896,2.287-8.844c1.205-0.282,2.451-0.385,3.686-0.305c-1.117,4.192-2.648,9.632-3.765,13.824 c-0.896,0-2.689,0-3.585,0c-0.102-1.189-0.795-5.98-0.896-7.169c0,2.689-0.896,5.377-0.896,7.169 c-0.988,0.061-2.095-0.38-3.083-0.319c-0.228,0.014-0.475,0.023-0.662-0.107c-0.207-0.143-0.279-0.41-0.337-0.654L8.585,19.496z"></path><path d="M8.585,19.996c1.19-0.034,2.4,0.156,3.585,0c-0.161-0.122-0.321-0.245-0.482-0.367c0.866,2.727,1.709,5.45,2.439,8.218 c0.145,0.551,0.972,0.428,0.982-0.133c0.034-1.886,0.214-3.76,0.303-5.643c0.01-0.214,0.019-0.429,0.026-0.643 c0.005-0.151,0.01-0.303,0.014-0.454c0.07-0.317-0.021-0.329-0.275-0.038c0.022,0.038,0.608-0.008,0.672-0.006 c0.601,0.012,1.201,0.051,1.802,0.067c-0.161-0.122-0.321-0.245-0.482-0.367c0.623,2.525,1.031,5.057,1.358,7.634 c0.066,0.518,0.83,0.727,0.982,0.133c0.754-2.95,1.51-5.9,2.287-8.844c-0.116,0.116-0.233,0.233-0.349,0.349 c1.175-0.264,2.352-0.354,3.553-0.287c-0.161-0.211-0.321-0.422-0.482-0.633c-1.231,4.615-2.534,9.21-3.765,13.824 c0.161-0.122,0.321-0.245,0.482-0.367c-1.195,0-2.39,0-3.585,0c0.167,0.167,0.333,0.333,0.5,0.5 c-0.214-2.399-0.682-4.771-0.896-7.169c-0.056-0.631-0.994-0.654-1,0c-0.023,2.427-0.863,4.755-0.896,7.169 c0.167-0.167,0.333-0.333,0.5-0.5c-0.587,0.017-1.147-0.101-1.722-0.197c-0.25-0.042-0.502-0.083-0.755-0.106 c-0.242-0.022-0.846,0.095-1.027-0.096c-0.089-0.093-0.143-0.499-0.18-0.642c-0.222-0.859-0.444-1.718-0.665-2.577 c-0.651-2.523-1.303-5.047-1.954-7.57c-0.162-0.629-0.325-1.258-0.487-1.887c-0.161-0.623-1.126-0.359-0.964,0.266 c1.047,4.055,2.098,8.11,3.141,12.166c0.119,0.462,0.239,0.942,0.693,1.187c0.523,0.283,1.255,0.116,1.83,0.207 c0.698,0.109,1.382,0.271,2.092,0.25c0.273-0.008,0.496-0.223,0.5-0.5c0.016-1.122,0.272-2.228,0.469-3.328 c0.227-1.271,0.416-2.548,0.428-3.841c-0.333,0-0.667,0-1,0c0.214,2.399,0.682,4.771,0.896,7.169c0.024,0.269,0.21,0.5,0.5,0.5 c1.195,0,2.39,0,3.585,0c0.218,0,0.426-0.155,0.482-0.367c1.231-4.615,2.534-9.21,3.765-13.824 c0.087-0.328-0.159-0.615-0.482-0.633c-1.286-0.072-2.562,0.041-3.819,0.323c-0.166,0.037-0.306,0.187-0.349,0.349 c-0.778,2.944-1.533,5.894-2.287,8.844c0.327,0.044,0.655,0.089,0.982,0.133c-0.338-2.666-0.749-5.289-1.394-7.9 c-0.053-0.217-0.266-0.362-0.482-0.367c-0.706-0.018-1.412-0.074-2.119-0.07c-0.23,0.001-0.511-0.016-0.725,0.082 c-0.403,0.185-0.345,0.577-0.355,0.965c-0.057,2.25-0.302,4.489-0.343,6.74c0.327-0.044,0.655-0.089,0.982-0.133 c-0.73-2.768-1.574-5.49-2.439-8.218c-0.059-0.187-0.263-0.396-0.482-0.367c-1.184,0.156-2.395-0.034-3.585,0 C7.943,19.014,7.94,20.014,8.585,19.996z"></path></svg></button>
      </div>
    </div >
  )
}

export default Menu