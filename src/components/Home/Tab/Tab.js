
import React, { useState } from 'react'
import Draggable from 'react-draggable';



import files from './Files'
import minimize from './imgs/minimize-sign.png'
import resize from './imgs/restore-down.png'
import close from './imgs/close.png'

import './Temp.css'
import Folder from './Folder'

const App = (props) => {
  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  const [file, setFile] = useState(files)
  const [path, setPath] = useState("C:\\shreyash\\")

  const updateFile = (childOP) => {
    setFile(childOP);
  }

  const goBack = () => {
    setFile(files)
    setPath("C:\\shreyash\\")
    setFileInfo({
      name: 'Home',
      size: 800,
      date: "04/03/2024"
    })
  }

  const pathUpdate = (childPath) => {
    setPath(prevPath => prevPath + childPath + "\\")
  }

  const [fileInfo, setFileInfo] = useState({
    name: 'Home',
    size: 800,
    date: "04/03/2024"
  })

  const displayInfo = (childInfo) => {
    setFileInfo({
      name: childInfo.name,
      size: childInfo.size,
      date: "04/03/2024"
    })
  }

  const closeTab = () => {
    props.closetab()
  }

  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={eventLogger}
      onDrag={eventLogger}
      onStop={eventLogger}
    >
      <div className='tab'>
        <div className='header'>
          <div className='title'>
            <button className='handle'>File Explorer</button>
          </div>
          <div className='mrc'>
            <button><img src={minimize} alt='minimize' /></button>
            <button><img src={resize} alt='resize' /></button>
            <button><img onClick={closeTab} src={close} alt='close' /></button>
          </div>
        </div>
        <div className='header2'>
          <button className='backBtn handle' onho onClick={goBack}><img width="48" height="48" src="https://img.icons8.com/color/48/circled-left-2--v1.png" alt="circled-left-2--v1" /></button>
          {path}
        </div>
        <div className='content'>
          <div className='folders'>
            <Folder files={file} changeFile={updateFile} changePath={pathUpdate} changeInfo={displayInfo} />
          </div>
          <div className='footer'>
            Folder Name: {fileInfo.name}<br />
            Size: {fileInfo.size}MB <br />
            Modified: {fileInfo.date}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default App;
