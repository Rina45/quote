import React, { useCallback, useEffect } from 'react';
import Author from './Author';
import Quote from './Quote';
import style from '../styles/fullPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuote } from '../redux/quotesActions';

const SingleQuotePage = () => {
    const quote = useSelector(state => state.quoteText);
    const errMsg = useSelector(state => state.errorMsg);
    const dispatch = useDispatch();
    const start = useCallback(() => { dispatch(getRandomQuote()) }, []);
    useEffect(() => {
        start();
    }, [start]);

    return (<div className={style.fullPage}>
        {errMsg || <><Quote quote={quote} />
            <Author /></>}
    </div>
    );
}

export default SingleQuotePage;