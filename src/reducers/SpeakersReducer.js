const speakersReducer = (state, action) => {
    const setFavoriteStatus = (status) => {
        return state.speakerList.map((speaker) => {
            if (speaker.id === action.id) {
                return {...speaker, favorite: status}
            }
            return speaker;
        });
    };

    switch (action.type) {
        case 'setSpeakerList':
            return { ...state, speakerList: action.data, isLoading: false };
        case 'fave':
            return { ...state, speakerList: setFavoriteStatus(true) };
        case 'unfave':
            return { ...state, speakerList: setFavoriteStatus(false) };
        case 'incrementFavoriteClickCount':
            return {
                ...state,
                favoriteClickCount: state.favoriteClickCount + 1,
            };

        default:
            return state;
    }
};
export default speakersReducer;
