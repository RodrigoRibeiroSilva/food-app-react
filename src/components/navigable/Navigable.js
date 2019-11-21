import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../home/Home';
import Restaurants from '../restaurants/Restaurants';
import About from '../about/About'
import RestaurantDetail from '../restaurant-detail/RestaurantDetail';

class Navigable extends React.Component{

    render(){
        return (
            <div className="content-wrapper bg-img">
                <div className="container">
                  <Switch>
                      <Route exact path="/restaurants" component={Restaurants} />
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/restaurant-detail/:id" component={RestaurantDetail} />
                  </Switch>
                </div>
            </div>
        );
    }
}

export default Navigable 