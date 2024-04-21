import React from 'react';
import './Calendar.css';

const Temp = () => {
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  // Rendering days of the month
  const spaces = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  let tempCal = [];

  // Rendering days of the week
  tempCal = daysOfWeek.map(day => <button key={day} className={`${day}day`}>{day}</button>);

  for (let index = 0; index < spaces; index++) {
    tempCal.push(<button key={`empty-${index}`}> </button>);
  }

  for (let index = 1; index <= lastDate; index++) {
    let myClass = new Date(currentYear, currentMonth, index).getDay();
    let className = index === currentDay ? 'Today' : '';
    if (myClass === 0) {
      className += ' Sunday';
    }
    tempCal.push(
      <button key={`day-${index}`} className={className}>
        {index}
      </button>
    );
  }

  const finalCal = [];
  let count = 0;
  for (let index = 0; index < tempCal.length; index++) {
    if (count === 7) {
      finalCal.push(<br key={`break-${index}`} />);
      count = 1;
    } else {
      count++;
    }
    finalCal.push(tempCal[index]);
  }

  return (
    <div className='hey'>
      <div>{daysOfWeek[date.getDay()]+"day"}, {Months[currentMonth]} {currentDay}</div>
      <hr/>
      <div>{Months[currentMonth]} {currentYear}</div>
      {finalCal}
    </div>
  );
};

export default Temp;
