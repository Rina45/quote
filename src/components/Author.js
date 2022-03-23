import React from 'react';
import { useSelector } from 'react-redux';
import Arrow from '../assets/arrow-alt.svg';
import style from '../styles/Author.module.css';

const Author = () => {
    const { author, genre } = useSelector(state => state)
    return (<button className={style.authorButton}>
        <div>
            <h4 className={style.author}>{author}</h4>
            <h6 className={style.category}>{genre}</h6>
        </div>
        <Arrow className={style.arrow} />
    </button>
    );
}

export default Author;