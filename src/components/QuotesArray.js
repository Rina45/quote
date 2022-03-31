import React from 'react';
import { useSelector } from 'react-redux';
import Quote from './Quote';
import style from '../styles/QuotesArray.module.css';

const QuotesArray = () => {
    const author = useSelector(state => state.author);
    const loading = useSelector(state => state.loading);
    const array = useSelector(state => state.quoteArray);
    return (
        <>
            <h1 className={style.authorHeader}>{author}</h1>
            {
                array.map(quote => <Quote quote={quote.quoteText} key={quote.id} loading={loading} />)
            }
        </>
    );
}

export default QuotesArray;