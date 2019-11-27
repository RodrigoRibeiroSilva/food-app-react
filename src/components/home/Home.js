import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (     
        <div className="jumbotron welcome-jumbotron">
            <h1>Bem vindo ao Food!</h1>
                <p>
                    Está com fome? Peça e receba em casa.
                </p>
            <Link className="btn btn-primary btn-lg" to="/restaurants"><b>Ver Restaurantes</b></Link>              
         </div>               
    );
};
      
export default Home