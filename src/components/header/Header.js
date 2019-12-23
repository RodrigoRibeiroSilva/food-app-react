import React from 'react';
import { Link } from 'react-router-dom'

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

export default Header