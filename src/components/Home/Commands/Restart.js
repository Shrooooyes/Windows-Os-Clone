import React, { useEffect, useState } from 'react';
import Loading from 'react-simple-loading'

import './Commands.css'

function Commands() {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setClosed(true);
        
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } catch (error) {
        console.log(error);
        setClosed(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='txt'>
      <Loading
        color={'#058fff'}
        stroke={'5px'}
        size={'100px'} />
      <div className='moreTxt'>
        {closed ? (
          <p>Shutting Down</p>
        ) : (
          <p>Failed to close window. Please close manually.</p>
        )}
      </div>
    </div>
  );
}

export default Commands;