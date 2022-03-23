import initialState from "./initialState";

const putQuoteInState = (payload) => {
    return { quoteText: payload.quoteText, author: payload.quoteAuthor, genre: payload.quoteGenre }
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SINGLE_QUOTE':
            const newState = { ...state, ...putQuoteInState(action.payload) };
            console.log(newState);
            return newState;
        default:
            return state;
    }
};

export default quoteReducer;