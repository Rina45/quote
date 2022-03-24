import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuote } from '../redux/quotesActions';
import Footer from './Footer';
import QuotesArray from './QuotesArray';
import RandomButton from './RandomButton';
import SingleQuotePage from './SingleQuotePage';

const App = () => {
    const singleDisplay = useSelector(state => state.singleDisplay);
    const dispatch = useDispatch();
    const start = useCallback(() => { dispatch(getRandomQuote()) }, []);
    useEffect(() => {
        start();
    }, [start]);

    return (<>
        <RandomButton singleDisplay={singleDisplay} />
        {singleDisplay ? <SingleQuotePage />
            : <QuotesArray />}
        <Footer />
    </>);
};

export default App;

 // TODO: style array author header