import initialState from "./initialState";

const putQuoteInState = (payload) => {
    return { quoteText: payload.quoteText, author: payload.quoteAuthor, genre: payload.quoteGenre, errorMsg: "", loading: false };
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_FETCHING':
            return { ...state, loading: true, singleDisplay: action.display }

        case 'GET_SINGLE_QUOTE':
            const newState = { ...state, ...putQuoteInState(action.payload) };
            return newState;

        case 'RECEIVES_ERROR':
            return { ...state, errorMsg: action.message };

        default:
            return state;
    }
};

export default quoteReducer;