import { useEffect, useState } from 'react';
import './style.css'

const Clock = () => {
    const [date, setDate] = useState(new Date());
    function refresh() {
        setDate(new Date());
    }

    useEffect(() => {
        const timer = setInterval(refresh, 1000);
        return function cleanUp() {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="clock">
            <span>{ date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }) }</span>
        </div>
    )
}

export default Clock;