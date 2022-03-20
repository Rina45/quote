import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/Quote.module.css';

const Quote = () => {
    const quote = useSelector(state => state.quote);
    const dispatch = useDispatch();
    dispatch({ type: 'MAKE_ACTION' });
    return (
        <div className={style.quoteBlock}>
            <div className={style.quoteLine}></div>
            <q>{quote}</q>
        </div>
    );
};

export default Quote;