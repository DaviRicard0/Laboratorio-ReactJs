import { useEffect, useState } from "react";

export function DateCurrent(){
    const [date,SetDate] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            SetDate(new Date());
        }, 1000);
    }, [date]);

    return (
        <>{date.toLocaleDateString()} {date.toLocaleTimeString()}</>
    );
}