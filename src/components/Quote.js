import React from 'react';
import style from '../styles/Quote.module.css';

const Quote = ({ quote }) => {
    return (
        <div className={style.quoteBlock}>
            <div className={style.quoteLine}></div>
            <q>{quote}</q>
        </div>
    );
};

export default Quote;