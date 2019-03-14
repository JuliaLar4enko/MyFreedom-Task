const initialState = {
    currency: {},
    weather: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_EXCHANGE_RATE":
            return {
                ...state,
                currency: action.payload
            };

        case "FETCH_CURRENT_WEATHER":
            return {
                ...state,
                weather: action.payload
            };

        default:
            return state;
    }
}