import { useReducer, useEffect } from 'react';
import axios from 'axios';
import speakersReducer from './reducers/SpeakersReducer';

const useSpeakerDataManager = () => {
    const [{ speakerList, isLoading }, dispatch] = useReducer(speakersReducer, {
        speakerList: [],
        isLoading: true,
    });

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

    const toggleSpeakerFavorite = (speakerRec) => {
        editSpeakerAsync(speakerRec);
    };

    const fetchSpeakersAsync = async () => {
        await axios
            .get('/api/speakers')
            .then((res) =>
                dispatch({ type: 'setSpeakerList', data: res.data })
            );
    };

    useEffect(() => {
        fetchSpeakersAsync();
        return () => console.log('cleanup');
    }, []);
    return { speakerList, isLoading, toggleSpeakerFavorite };
};

export default useSpeakerDataManager;
