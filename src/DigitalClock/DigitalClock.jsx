import { useEffect, useState } from "react";

function DigitalClock()
{
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(
        () => {
            const intervalID = setInterval(()=>{setTime(new Date().toLocaleTimeString())}, 1000);
            return () => {clearInterval(intervalID)};
        },[]
    );

    return (
        <>
            <h1>Digital Clock</h1>
            <div>
                <p>{time}</p>
            </div>
        </>
    );
}
export default DigitalClock;