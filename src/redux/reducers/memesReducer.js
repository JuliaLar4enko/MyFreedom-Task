const initialState = {
    memes: [],
    generated: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_CERTAIN_MEMES":
            return {
                ...state,
                memes: action.payload
            };

        case "FETCH_GENERATED_MEME_SUCCESS":
            return {
                ...state,
                generated: action.payload
            };

        default:
            return state;
    }
}