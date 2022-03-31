import React from 'react';
import style from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <p>created by <a href='https://github.com/rina45' className={style.user}>rina45</a> <a href='https://github.com/rina45' className={style.devChallenges}>- devChallenges.io</a></p>
        </footer>
    );
}

export default Footer;