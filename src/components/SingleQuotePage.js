import React from 'react';
import Author from './Author';
import Quote from './Quote';
import style from '../styles/fullPage.module.css'

const SingleQuotePage = () => {
    return (<div className={style.fullPage}>
        <Quote />
        <Author />
    </div>
    );
}

export default SingleQuotePage;