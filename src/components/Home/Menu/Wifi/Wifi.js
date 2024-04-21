import React, { useState, useEffect } from 'react';

const InternetConnectionChecker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <p>Connected to the internet</p>
      ) : (
        <p>Not connected to the internet</p>
      )}
    </div>
  );
};

export default InternetConnectionChecker;