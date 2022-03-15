import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SingleQuote = () => {
    const quote = useSelector(state => state.quote);
    const dispatch = useDispatch();
    dispatch({ type: 'MAKE_ACTION' });
    return (
        <>
            <q>quote from someone</q>
            <p>{quote}</p>
        </>
    );
};

export default SingleQuote;