import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '../assets/arrow-alt.svg';
import { getQuoteByAuthor } from '../redux/quotesActions';
import style from '../styles/Author.module.css';

const Author = () => {
    const dispatch = useDispatch();
    const { author, genre } = useSelector(state => state)
    return (<button onClick={() => dispatch(getQuoteByAuthor(author))} className={style.authorButton}>
        <div>
            <h4 className={style.author}>{author}</h4>
            <h6 className={style.genre}>{genre}</h6>
        </div>
        <Arrow className={style.arrow} />
    </button>
    );
}

export default Author;