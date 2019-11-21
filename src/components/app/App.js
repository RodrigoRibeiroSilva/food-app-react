import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigable from '../navigable/Navigable';
import '../../App.css'

class App extends React.Component  {

  render() {

    return (
          <div class="wrapper">
            <Header/>
            <Navigable/>
            <Footer/>   
          </div>
        )
    }
}

export default App;
