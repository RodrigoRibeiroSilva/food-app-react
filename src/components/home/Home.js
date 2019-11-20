import React from 'react';

class Home extends React.Component {

    render(){
        return (
       
            <div className="jumbotron welcome-jumbotron">
                <h1>Bem vindo ao Food!</h1>
                    <p>
                            Está com fome? Peça e receba em casa.
                    </p>
                 <a className="btn btn-primary btn-lg " href="/restaurants"><b>Ver Restaurantes</b></a>
            </div>               
        );
    }
      
}

export default Home