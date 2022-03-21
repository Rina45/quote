import React from 'react';
import LoopIcon from '../assets/loop.svg';
import style from '../styles/RandomButton.module.css';

const RandomButton = () => {
    return (
        <button className={style.button}><p>random</p> <LoopIcon className={style.loop} /></button>
    );
}

export default RandomButton;