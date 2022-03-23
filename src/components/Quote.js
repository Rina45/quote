import React from 'react';
import style from '../styles/Quote.module.css';
import LoadingSkeleton from './LoadingSkeleton';

const Quote = ({ quote, loading }) => {
    return (
        <div className={style.quoteBlock}>
            <div className={style.quoteLine}></div>
            {/* <LoadingSkeleton /> */}
            {!loading ? <q>{quote}</q> : <LoadingSkeleton />}
        </div>
    );
};

export default Quote;