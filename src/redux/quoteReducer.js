import initialState from "./initialState";

const putQuoteInState = (payload) => {
    return { quoteText: payload.quoteText, author: payload.quoteAuthor, genre: payload.quoteGenre, errorMsg: "", loading: false };
};

const processQuotesArray = (payload) => {
    const quoteArray = payload.map(quote => { return { id: quote._id, quoteText: quote.quoteText } })
    return { quoteArray, errorMsg: "", loading: false };
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_FETCHING':
            return { ...state, loading: true, singleDisplay: action.display }

        case 'GET_SINGLE_QUOTE':
            return { ...state, ...putQuoteInState(action.payload) };

        case 'GET_QUOTES_ARRAY':
            return { ...state, ...processQuotesArray(action.payload) };

        case 'RECEIVES_ERROR':
            return { ...state, errorMsg: action.message };

        default:
            return state;
    }
};

export default quoteReducer;