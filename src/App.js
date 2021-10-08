import React from 'react';
import Home from './Home.js';
import Speakers from './Speakers.js';

export const ConfigContext = React.createContext();

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true,
};

const pageToShow = (pageName) => {
    if (pageName === 'Home') return <Home />;
    if (pageName === 'Speakers') return <Speakers />;
    return <div>Not Found</div>;
};

export default function App({ pageName }) {
    return (
        <ConfigContext.Provider value={configValue}>
            <div>{pageToShow(pageName)}</div>;
        </ConfigContext.Provider>
    );
}
