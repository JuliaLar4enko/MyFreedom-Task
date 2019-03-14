const initialState = {
    items: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                items: action.payload
            };

        case "FETCH_USERS_ERROR":
            return state;

        case "DELETE_USER_SUCCESS":
            let id = action.payload;
            return {
                ...state,
                items: [
                    ...state.items.filter(function (item) {
                        return item._id !== id;
                    })
                ]
            };

        default:
            return state;
    }
}