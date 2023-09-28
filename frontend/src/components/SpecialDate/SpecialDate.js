import React from 'react';

const SpecialDate = () => {
    // Define your viewMinutesInOneDay
    const viewMinutesInOneDay = {
        "Nov 12": 360,
        "Sep 5": 250,
        "Feb 4": 231,
        "Jan 20": 123,
        "Mar 30": 432,
        "May 28": 234,
        "Dec 24": 135,
        "Dec 23": 312,
        "Oct 2": 123,
        "Aug 11": 412
    };
    let maxMinutesInOneDay = 0;
    let maxMinutesDate = "";

    for (const date in viewMinutesInOneDay) {
        const [month, day] = date.split(" "); // Split the date into month and day

        if (viewMinutesInOneDay[date] > maxMinutesInOneDay) {
            maxMinutesInOneDay = viewMinutesInOneDay[date];
            maxMinutesDate = `${month} ${day}`; // Concatenate month and day
        }
    }

    return (
        <div className="wrapper">
            <div className="form-container">
                <div className="special-date-text">
                    <p>You watched more</p>
                    <p>content on</p>
                </div>
                <div className="page-title">
                    <p>{maxMinutesDate}</p>
                </div>
                <div className="special-date-text">
                    <p>than any other day!</p>
                </div>
                <div className="special-date-text-large">
                    <p>
                        <span className="special-date-mins">{maxMinutesInOneDay}</span> Minutes in One Day!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SpecialDate;
