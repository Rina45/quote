import React from 'react';
import Footer from './Footer';
// import QuotesArray from './QuotesArray';
import RandomButton from './RandomButton';
import SingleQuotePage from './SingleQuotePage';

const App = () => {
    return (<>
        <RandomButton />
        <SingleQuotePage />
        {/* <QuotesArray /> */}
        <Footer />
    </>);
};

export default App;

 //  TODO: api fetch working
 // TODO: array