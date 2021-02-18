
import React from 'react';
import Footer from './Footer';
import Header from './Header';

/**
 * Default site layout component
 */
const DefaultLayout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;