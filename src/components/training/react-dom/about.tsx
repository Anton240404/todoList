import React from 'react';
import { useLocation } from 'react-router-dom';

export function About() {
    const location = useLocation();
    console.log(location);
    return <div>About</div>;
}
