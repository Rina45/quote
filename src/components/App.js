import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import QuotesArray from './QuotesArray';
import RandomButton from './RandomButton';
import SingleQuotePage from './SingleQuotePage';

const App = () => {
    const singleDisplay = useSelector(state => state.singleDisplay);
    return (<>
        <RandomButton singleDisplay={singleDisplay} />
        {singleDisplay ? <SingleQuotePage />
            : <QuotesArray />}
        <Footer />
    </>);
};

export default App;

 // TODO: array

/* display quote or array
fetch array and add it to state and components
*/