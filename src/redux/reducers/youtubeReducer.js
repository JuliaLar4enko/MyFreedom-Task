const initialState = {
    videos: [],
    id:''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_VIDEOS_SUCCESS":
            console.log('!!!!!!!!!!!!!!!!youtubeReducer ',action.payload.items);
            return {
                ...state,
                videos: action.payload.items
            };

        case "CREATE_FRAME":
            console.log('!!!!!!!!!frame id',action.payload);
            return {
                ...state,
                id: action.payload
            };

        default:
            return state;
    }
}