import React from 'react';
import { useEffect, useState } from 'react';

export function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {time.toLocaleTimeString()}
        </div>
    );
}
