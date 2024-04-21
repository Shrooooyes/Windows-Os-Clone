import React, { useEffect, useState } from 'react';
import './Time.css';

const Time = () => {
    const [time, setTime] = useState(getCurrentTime());
    const [date, setDate] = useState(getCurrentDate());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(getCurrentTime());
        }, 10000);

        const dateInterval = setInterval(() => {
            setDate(getCurrentDate());
        }, 5000);

        // Clean up intervals
        return () => {
            clearInterval(timeInterval);
            clearInterval(dateInterval);
        };
    }, []); // Empty dependency array to run effect only once on mount

    function getCurrentTime() {
        const tempDate = new Date();
        return {
            hour: tempDate.getHours(),
            minutes: tempDate.getMinutes(),
            period: getPeriod(tempDate.getHours())
        };
    }

    function getCurrentDate() {
        const tempDate = new Date();
        const MM = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const Day = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        return {
            day: Day[tempDate.getDay()],
            da_te: tempDate.getDate(),
            month: MM[tempDate.getMonth()]
        };
    }

    function getPeriod(hour) {
        return hour >= 12 ? 'PM' : 'AM';
    }

    return (
        <div className='date-time'>
            <div className='Time'>{time.hour}:{time.minutes} {time.period}</div>
            <div className='Date'>{date.day}, {date.da_te} {date.month}</div>
        </div>
    );
};

export default Time;
