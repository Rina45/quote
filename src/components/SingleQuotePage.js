import React, { useCallback, useEffect } from 'react';
import Author from './Author';
import Quote from './Quote';
import style from '../styles/fullPage.module.css'
import { useDispatch } from 'react-redux';
import { getRandomQuote } from '../redux/quotesActions';

const SingleQuotePage = () => {
    const dispatch = useDispatch();
    const start = useCallback(() => { dispatch(getRandomQuote()) });
    useEffect(() => {
        start();
    }, [start]);

    return (<div className={style.fullPage}>
        <Quote />
        <Author />
    </div>
    );
}

export default SingleQuotePage;