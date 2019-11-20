import React from 'react';

class Header extends React.Component {

    render(){
        return (
             <header className="main-header">
                <nav className="navbar navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="/home" className="navbar-brand"><b>Food</b></a>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                
                        <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/restaurants">Restaurantes <span className="sr-only">(current)</span></a></li>
                                <li><a href="/Sobre">Sobre</a></li>
                            </ul>
                        </div>
                    </div>              
                </nav>
            </header>
        );
    }
      
}

export default Header