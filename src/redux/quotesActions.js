import axios from 'axios';

const startFetching = (singleDisplay) => {
    return { type: 'START_FETCHING', display: singleDisplay };
};

const getSingleQuote = (payload) => {
    return { type: 'GET_SINGLE_QUOTE', payload };
};

const receivesError = (message) => {
    return { type: 'RECEIVES_ERROR', message }
}

const getQuotesArray = (payload) => {
    return { type: 'GET_QUOTES_ARRAY', payload };
};

export const getRandomQuote = () => (dispatch) => {
    dispatch(startFetching(true));
    const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
    axios.get(url).then(res => dispatch(getSingleQuote(res.data.data[0]))).catch(err => dispatch(receivesError(err.message)));
};

export const getQuoteByAuthor = (author) => (dispatch) => {
    dispatch(startFetching(false));
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author.replace(/\s/g, '+')}` //+ replacing space
    axios.get(url).then(res => dispatch(getQuotesArray(res.data.data))).catch(err => dispatch(receivesError(err.message))); //then getQuotesArray(data)
};