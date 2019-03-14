const initialState = {
    weather: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_FIVE_DAYS_WEATHER":
            console.log('Reducer FETCH_FIVE_DAYS_WEATHER',action.payload);
            return {
                ...state,
                weather: action.payload
            };

        default:
            return state;
    }
}

