import React from 'react';
import Arrow from '../assets/arrow-alt.svg';
import style from '../styles/Author.module.css';

const Author = () => {
    return (<button className={style.authorButton}>
        <div>
            <h4 className={style.author}>Author</h4>
            <h6 className={style.category}>category</h6>
        </div>
        <Arrow className={style.arrow} />
    </button>
    );
}

export default Author;