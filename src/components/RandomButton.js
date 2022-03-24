import React from 'react';
import { useDispatch } from 'react-redux';
import LoopIcon from '../assets/loop.svg';
import { getRandomQuote } from '../redux/quotesActions';
import style from '../styles/RandomButton.module.css';

const RandomButton = ({ singleDisplay }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(getRandomQuote())} className={style.button}><p>{singleDisplay ? 'random' : 'random quote'}</p> <LoopIcon className={style.loop} /></button>
    );
}

export default RandomButton;