const speakersReducer = (state, action) => {
    const setFavoriteStatus = (status) => {
        return state.map((speaker) => {
            if (speaker.id === action.id) {
                speaker.favorite = status;
                return speaker;
            }
            return speaker;
        });
    };

    switch (action.type) {
        case 'setSpeakerList':
            return action.data;
        case 'fave':
            return setFavoriteStatus(true);
        case 'unfave':
            return setFavoriteStatus(false);
        default:
            return state;
    }
};
export default speakersReducer;
