import { useEffect, useState } from "react";

const text = 'Venha estudar na Fatec.';

function DateCurrent(){
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

function Sign(){
    const [displayedText, setDisplayedText] = useState("");

    const showText = (phrase, time) => setTimeout(() => {
        setDisplayedText(phrase);
    }, time);

    useEffect(() => {
        let phrase = '';
        for (let i = 0; i < text.length; i++) {
            phrase += text[i];
            showText(phrase, i * 500);
        }
    }, []);

    return <h1>{displayedText}</h1>;
}

export default function SignDateCurrent(){
    return (
        <>
            <DateCurrent/>
            <Sign/>
        </>
    );
}