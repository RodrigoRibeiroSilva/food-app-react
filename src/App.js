import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Restaurants from './components/restaurants/Restaurants';
import Header from './components/Header';
import Home from './components/Home';
import './App.css'



class App extends React.Component  {
  render() {
  return (
     <div class="wrapper">
            <Header></Header>
            <div class="content-wrapper bg-img">
              <div class="container">
                <Switch>
                    <Route exact path="/restaurants" component={Restaurants} />
                    <Route exact path="/home" component={Home} />
                </Switch>
              </div>
            </div>
            <footer class="main-footer">
              <div class="container">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 1.0.0
                </div>
                <strong>FOOD</strong> Angular Application
              </div>
            </footer>
        </div>
      )
  }
}

export default App;
