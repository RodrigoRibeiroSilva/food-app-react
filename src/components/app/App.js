import React from 'react';
import MetaTags from 'react-meta-tags';
import { BrowserRouter, Link } from 'react-router-dom'

import Navigable from '../navigable/Navigable';
import '../../App.css'

const App = () => {
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
                <BrowserRouter>
                  <Header/>
                  <Navigable/>
                  <Footer/> 
                </BrowserRouter>
              </div>
            </body>
          </html>
        );
};

const Header = () => {
      return (
           <header className="main-header">
                <nav className="navbar navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to="/home" className="navbar-brand"><b>Food</b></Link>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                
                        <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <Link to="/restaurants"> Restaurantes
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li><Link to="/about">Sobre</Link></li>
                            </ul>
                        </div>
                    </div>              
                </nav>
            </header>
      );
};

const Footer = () => {
      return (
           <footer className="main-footer">
                <div className="container">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 1.0.0
                    </div>
                    <strong>FOOD</strong> ReactJS Application
                </div>
            </footer>
      );
};


export default App;
