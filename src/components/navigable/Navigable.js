import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../home/Home';
import Restaurant from '../restaurants/Restaurant';
import About from '../about/About'
import RestaurantDetail from '../restaurant-detail/RestaurantDetail';

const Navigable = () => {  
    return (
        <div className="content-wrapper bg-img">
             <div className="container">
                <Switch>
                    <Route exact path="/restaurants" component={Restaurant} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/restaurant-detail/:id" component={RestaurantDetail} />
                </Switch>             
             </div>
        </div>
    );
};

export default Navigable 