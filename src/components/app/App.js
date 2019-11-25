import React from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigable from '../navigable/Navigable';
import '../../App.css'

class App extends React.Component  {

  render() {

    return (
          <html>
            <MetaTags>
              <meta charset="utf-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <title>Food | ReactJS</title>
              <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"/>
              <title>FOOD</title>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </MetaTags>

            <body className="hold-transition skin-red layout-top-nav">
              <div className="wrapper">
                <Header/>
                <Navigable/>
                <Footer/> 
              </div>
            </body>
          </html>
        )
    }
}

export default App;
