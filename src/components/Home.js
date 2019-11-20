import React from 'react';
import Restaurants from './restaurants/Restaurants'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends React.Component {

    render(){
        return (
            <Router>          
                <div class="jumbotron welcome-jumbotron">
                    <h1>Bem vindo ao Food!</h1>
                        <p>
                            Está com fome? Peça e receba em casa.
                        </p>
                        <a class="btn btn-primary btn-lg " href="/restaurants"><b>Ver Restaurantes</b></a>
                </div>
            </Router>                  
        );
    }
      
}

export default Home