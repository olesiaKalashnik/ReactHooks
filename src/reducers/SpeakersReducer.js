import axios from 'axios';

const speakersReducer = (state, action) => {
    const setFavoriteStatus = (status) => {
        return state.speakerList.map((speaker) => {
            if (speaker.id === action.id) {
                speaker.favorite = status;
                return speaker;
            }
            return speaker;
        });
    };

    // async function getSpeakers() {
    //     return await axios.get('/api/speakers').then((resp) => resp.data);
    // }

    switch (action.type) {
        case 'setSpeakerList':
            return { ...state, speakerList: action.data, isLoading: false };
        case 'fave':
            return { ...state, speakerList: setFavoriteStatus(true) };
        case 'unfave':
            return { ...state, speakerList: setFavoriteStatus(false) };
        default:
            return state;
    }
};
export default speakersReducer;
