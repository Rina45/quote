import axios from 'axios';

const getSingleQuote = (payload) => {
    return { type: 'GET_SINGLE_QUOTE', payload };
};

const receivesError = (message) => {
    return { type: 'RECEIVES_ERROR', message }
}

export const getRandomQuote = () => (dispatch) => {
    // dispatch(startFetching('quote')); //change fetching and display quote or array
    const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
    axios.get(url).then(res => dispatch(getSingleQuote(res.data.data[0]))).catch(err => dispatch(receivesError(err.message)));
};

export const getQuoteByAuthor = () => () => {

};