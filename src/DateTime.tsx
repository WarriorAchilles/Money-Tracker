import React, { useState, useEffect } from 'react';

interface propTypes {
    displayDate: boolean,
    displayTime: boolean,
}

export const DateTime = (props: propTypes) => {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        var clock = setInterval(() => setDate(new Date()), 6000);

        return () => clearInterval(clock);
    }, [date]);

    let elements = [];

    if (props.displayDate) {
        elements.push(<p className="date">{date.toLocaleDateString([], {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'})}</p>)
    }

    if (props.displayTime) {
        elements.push(<p className="time">{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>)
    }

    return (
        <div className="dateTime">
            {elements}
        </div>
    );
}

export default DateTime;