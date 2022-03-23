import React from 'react';
import style from '../styles/Author.module.css';

const Author = () => {
    return (<button className={style.authorButton}>
        <div>
            <h4 className={style.author}>Author</h4>
            <h6 className={style.category}>category</h6>
        </div>
    </button>
    );
}

export default Author;