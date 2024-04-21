import React, { useState } from 'react'
import HomeScreen from './imgs/Home-screen.jpg'
import Menu from './Menu/Menu';

import DateTime from './Menu/DateTime/DateTime';
import BatteryStatus from './Menu/Battery/Battery';
import Calendar from './Menu/Calendar/Calendar'
import Wifi from './Menu/Wifi/Wifi'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Shutdown from './Commands/Shutdown';
import Restart from './Commands/Restart'

import Tab from './Tab/Tab';

import './Home.css'

const Home = () => {

  const [displayTab, setDisplayTab] = useState(false);

  const openTab = () => {
    setDisplayTab(true);
  }

  const closeTab = () => {
    setDisplayTab(false);
  }

  const [command, setCommand] = useState("Shut Down")
  
  const setMYCommand = (childOP) => {
    setCommand(childOP)
  }

  const [commandVisible, setCommandVisible] = useState(false);

  const handleVisble = () => {
    setCommandVisible(true);
  }

  return (
    <div>
      <div className='Commands'>
        {
          commandVisible?<Shutdown/>:(<></>)
        }
      </div>
      <img className='HomeScreen' src={HomeScreen} alt='home' />
      <div className='myApps'>
        <div className='myComputer'><button onClick={openTab}><img width="50" height="50" src="https://img.icons8.com/isometric/50/monitor.png" alt="monitor" /><div>Computer</div></button></div>
        <div className='recycleBin'><button><img width="48" height="48" src="https://img.icons8.com/fluency/48/bin-windows.png" alt="bin-windows" /><div>Recycle Bin</div></button></div>
      </div>

      <div className='Tabs'>
        {displayTab ? (<Tab closetab={closeTab} />) : (<></>)}
      </div>

      <div className='end-icons'>
        <Popup trigger={<button className='caret'><img src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-chevron-down.png" alt="circled-chevron-down" /></button>}
          position="top center"
          contentStyle={{
            textAlign: "center",
            padding: "0px",
            width: "102px"
          }}>
          <div className='tray'>
            <button className='bluetooth'><img src="https://img.icons8.com/parakeet/48/bluetooth.png" alt="bluetooth" /></button>
            <button className='firewall'><img src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Network-Security-energy-security-filled-color-icons-papa-vector.png" alt="external-Network-Security-energy-security-filled-color-icons-papa-vector" /></button>
            <br />
            <button className='usb'><img src="https://img.icons8.com/color/48/usb-connected.png" alt="usb-connected" /></button>
            <button className='sound'><img src="https://img.icons8.com/fluency/48/speaker.png" alt="speaker" /></button>
          </div>
        </Popup>

        <Popup trigger={<button className='charge'><img src="https://img.icons8.com/ios/50/FFFFFF/battery-unknown.png" alt="battery-unknown" /></button>}
          position="top center"
          contentStyle={{
            textAlign: "center",
            padding: "20px",
            width: "240px",
          }}>
          <div>
            <BatteryStatus />
          </div>
        </Popup>

        <Popup trigger={<button className='Wifi'><img width="26" height="26" src="https://img.icons8.com/metro/26/FFFFFF/wifi.png" alt="wifi" /></button>}
          position="top center"
          contentStyle={{
            textAlign: "center",
            padding: "20px",
            width: "240px",
          }}>
          <div>
            <Wifi />
          </div>
        </Popup>

        <Popup trigger={<button className='TimeDate'
          style={{
            borderRadius: "5px",
            marginTop: "0px",
            position: "absolute",
            width: "80px"
          }}>
          <DateTime />
        </button>}
          position="top right"
          contentStyle={{
            padding: "20px",
            width: "390px",
            backgroundColor: "#0a304d"
          }}>
          <div>
            <Calendar />
          </div>
        </Popup>


        <button className='messages'
          style={{
            position: "absolute",
            left: "205px"
          }}><img src="https://img.icons8.com/windows/32/FFFFFF/chat-message.png" alt="chat-message" /></button>
      </div>

      <div className='MenuBar'><Menu opentab={openTab} command={handleVisble} change={setMYCommand}/></div>
    </div>
  )
}

export default Home