import React, { useEffect, useState } from 'react';

const DateTime = () => {

  const getPeriod = (hrs) => {
    if (hrs >= 12) {
      return "PM";
    } else {
      return "AM";
    }
  };

  const getCurrentTime = () => {
    const tObj = new Date();
    return {
      hour: tObj.getHours(),
      minutes: tObj.getMinutes(),
      period: getPeriod(tObj.getHours())
    };
  };

  const getCurrentDate = () => {
    const tObj = new Date();
    return {
      day: tObj.getDate(),
      month: tObj.getMonth() + 1, // Months are zero-based
      year: tObj.getFullYear()
    };
  };

  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 10000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      fontSize: "12px",
      position: "absolute",
      top: "8px",
      left: "10px",
      right: "10px"
    }}>
      <div>{time.hour}:{time.minutes} {time.period}</div>
      <div>{date.day}/{date.month}/{date.year}</div>
    </div>
  );
};

export default DateTime;
