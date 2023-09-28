import React from 'react';

const WeekdayWeekendPage = () => {
    // Define your weekdayVsWeekend
    const weekdayVsWeekend = {
        weekdayInHours: 360,
        weekendInHours: 250
    };
    const totalHours = weekdayVsWeekend.weekdayInHours + weekdayVsWeekend.weekendInHours;
    const weekdayPercentage = ((weekdayVsWeekend.weekdayInHours / totalHours) * 100).toFixed(0);
    const weekendPercentage = ((weekdayVsWeekend.weekendInHours / totalHours) * 100).toFixed(0);

    return (
        <div className="wrapper">
            <div className="weekday-weekend">
                <div className='weekday'>
                    <p>{weekdayPercentage}%</p>
                    <p>Weekday Viewing</p>
                </div>
                <div className='weekend'>
                    <p>{weekendPercentage}%</p>
                    <p>Weekend Viewing</p>
                </div>
            </div>
        </div>
    );
}

export default WeekdayWeekendPage;
