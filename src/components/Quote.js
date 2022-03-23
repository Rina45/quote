import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/Quote.module.css';

const Quote = () => {
    const quote = useSelector(state => state.quoteText);
    return (
        <div className={style.quoteBlock}>
            <div className={style.quoteLine}></div>
            <q>{quote}</q>
        </div>
    );
};

export default Quote;