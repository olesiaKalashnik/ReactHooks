import React from 'react';
import Home from './Home.js';
import Speakers from './Speakers.js';

export default function App({ pageName }) {
    if (pageName === 'Home') return <Home />;
    if (pageName === 'Speakers') return <Speakers />;
    return <div>Not Found</div>;
}
