import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navigable from '../navigable/Navigable';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import '../../App.css'

const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <Navigable/>
                <Footer/> 
            </BrowserRouter>
        </div>
    );
};

export default App;
