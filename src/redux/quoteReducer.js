import initialState from "./initialState";

const putQuoteInState = (payload) => {
    return { quoteText: payload.quoteText, author: payload.quoteAuthor, genre: payload.quoteGenre, errorMsg: "" }
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
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