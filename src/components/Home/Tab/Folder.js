import React, { Component } from 'react'
import files from './Files';

export default class Folder extends Component {


  handleClick = (val) => {
    this.props.changeFile(files[val].more)
    this.props.changePath(files[val].name)
    this.props.changeInfo({
      name: files[val].name,
      size: files[val].size
    })
  }


  render() {
    let files = this.props.files
    return (
      <>
        {files.length === 0 ? (
          <>Folder is Empty</>
        ) : (
          <>
            {
              files.map((folder, index) => {
                return (
                  <div className='folder' key={index}>
                    <button onClick={() => { this.handleClick(index) }}>
                      {folder.icon}
                      <div>{folder.name}</div>
                    </button>
                  </div>
                );
              })
            }
          </>
        )}
      </>
    );
  }
}
