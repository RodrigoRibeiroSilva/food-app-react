import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../home/Home';
import Restaurants from '../restaurants/Restaurants';

class Navigable extends React.Component{

    render(){
        return (
            <div className="content-wrapper bg-img">
                <div className="container">
                  <Switch>
                      <Route exact path="/restaurants" component={Restaurants} />
                      <Route exact path="/home" component={Home} />
                  </Switch>
                </div>
            </div>
        );
    }
}

export default Navigable