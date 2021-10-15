import React from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }) => {
    const {
        speakerList,
        isLoading,
        toggleSpeakerFavorite,
        favoriteClickCount,
        incrementFavoriteClickCount,
        hasErrored, error
    } = useSpeakerDataManager();

    const provider = {
        speakerList,
        isLoading,
        toggleSpeakerFavorite,
        favoriteClickCount,
        incrementFavoriteClickCount,
        hasErrored, error
    };

    return (
        <GlobalContext.Provider value={provider}>
            {children}
        </GlobalContext.Provider>
    );
};
