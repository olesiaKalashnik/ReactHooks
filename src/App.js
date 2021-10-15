import React from 'react';
import Home from './Home.js';
import Speakers from './Speakers.js';
import { GlobalProvider } from './GlobalState'

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

const App = ({ pageName }) => {
    return (
        <ConfigContext.Provider value={configValue}>
            <GlobalProvider>
                <div>{pageToShow(pageName)}</div>
            </GlobalProvider>
        </ConfigContext.Provider>
    );
}

export default App;