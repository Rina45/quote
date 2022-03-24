import React from 'react';
import Author from './Author';
import Quote from './Quote';
import style from '../styles/fullPage.module.css'
import { useSelector } from 'react-redux';

const SingleQuotePage = () => {
    const quote = useSelector(state => state.quoteText);
    const errMsg = useSelector(state => state.errorMsg);
    const loading = useSelector(state => state.loading);

    return (<div className={style.fullPage}>
        {errMsg || <><Quote quote={quote} loading={loading} />
            <Author /></>}
    </div>
    );
}

export default SingleQuotePage;