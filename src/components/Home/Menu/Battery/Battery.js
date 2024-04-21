import React, { useState, useEffect } from 'react';

const BatteryStatus = () => {
  const [charging, setCharging] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    const batteryHandler = () => {
      const battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;
      if (battery) {
        setCharging(battery.charging);
        setBatteryLevel(Math.round(battery.level * 100));
      }
    };

    batteryHandler(); // Initial check

    if (navigator.battery || navigator.webkitBattery || navigator.mozBattery) {
      window.addEventListener('batterychange', batteryHandler);
    }

    return () => {
      window.removeEventListener('batterychange', batteryHandler);
    };
  }, []);

  return (
    <div style={{
      
    }}>
      {charging ? (
        <p>The PC is currently charging.</p>
      ) : (
        <p>The PC is not charging.</p>
      )}
      <p>Battery level: {batteryLevel}%</p>
    </div>
  );
};

export default BatteryStatus;