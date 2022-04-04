import { useState } from "react";

const Counter = () => {
    const [time, setTime] = useState(0);
    

    return <div>
        {time}
    </div>
}

export default Counter;