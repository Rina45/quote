import React from 'react';
import { useDispatch } from 'react-redux';
import LoopIcon from '../assets/loop.svg';
import { getRandomQuote } from '../redux/quotesActions';
import style from '../styles/RandomButton.module.css';

const RandomButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(getRandomQuote())} className={style.button}><p>random</p> <LoopIcon className={style.loop} /></button>
    );
}

export default RandomButton;