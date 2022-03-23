import React from 'react';
import style from '../styles/LoadingSkeleton.module.css';

const LoadingSkeleton = () => {
    return (<>
        <div className={style.skeleton}></div>
        <div className={style.skeleton}></div>
        <div className={style.skeleton}></div>
        <div className={style.skeleton}></div>
    </>);
}

export default LoadingSkeleton;