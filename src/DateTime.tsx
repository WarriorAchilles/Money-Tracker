import React, { useState, useEffect } from 'react';

interface propTypes {
    displayDate: boolean,
    displayTime: boolean,
}

export const DateTime = (props: propTypes) => {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        var clock = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(clock);
    }, [date]);

    let elements = [];

    if (props.displayDate) {
        elements.push(<div className="date"><p>{date.toLocaleDateString([], {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'})}</p></div>)
    }

    if (props.displayTime) {
        elements.push(<div className="time"><p>{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p></div>)
    }

    return (
        <div className="dateTime">
            {elements}
        </div>
    );
}

export default DateTime;