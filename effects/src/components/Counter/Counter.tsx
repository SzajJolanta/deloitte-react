import { useEffect, useState } from "react";
import { convertTime } from "../../utils/convertTime";

const Counter = () => {
    const [time, setTime] = useState(0);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (time === 10) {
            setMessage('Wow! Minęło już 10 sekund');
        }
        if (time === 20) {
            setMessage('Niesamowite! To jest wynik!');
        }
    }, [time]);

    return <div>
        {convertTime(time)}
        {message && <p>{message}</p>}
    </div>
}

export default Counter;