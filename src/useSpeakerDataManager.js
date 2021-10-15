import { useReducer, useEffect } from 'react';
import axios from 'axios';
import speakersReducer from './reducers/SpeakersReducer';

const useSpeakerDataManager = () => {
    const [
        { speakerList, isLoading, favoriteClickCount, hasErrored, error },
        dispatch,
    ] = useReducer(speakersReducer, {
        speakerList: [],
        isLoading: true,
        favoriteClickCount: 0,
        hasErrored: false,
        error: null,
    });

    const incrementFavoriteClickCount = () => {
        dispatch({ type: 'incrementFavoriteClickCount' });
    };

    const toggleSpeakerFavorite = (speakerRec) => {
        const editSpeakerAsync = async (speakerRec) => {
            const updatedSpeakerRec = {
                ...speakerRec,
                favorite: !speakerRec.favorite,
            };
            const res = await axios.put(
                `/api/speakers/${speakerRec.id}`,
                updatedSpeakerRec
            );
            if (res.status === 200) {
                speakerRec.favorite === true
                    ? dispatch({ type: 'unfave', id: speakerRec.id })
                    : dispatch({ type: 'fave', id: speakerRec.id });
            }
        };

        editSpeakerAsync(speakerRec);
    };

    useEffect(() => {
        const fetchSpeakersAsync = async () => {
            try {
                await axios
                    .get('/api/speakers')
                    .then((res) =>
                        dispatch({ type: 'setSpeakerList', data: res.data })
                    );
            } catch (ex) {
                dispatch({ type: 'error', error: ex });
            }
        };
        console.log('Use effect is called');
        fetchSpeakersAsync();
        return () => console.log('cleanup');
    }, []);

    return {
        speakerList,
        isLoading,
        favoriteClickCount,
        incrementFavoriteClickCount,
        toggleSpeakerFavorite,
        hasErrored, error
    };
};

export default useSpeakerDataManager;
