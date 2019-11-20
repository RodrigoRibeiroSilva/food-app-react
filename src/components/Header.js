import React from 'react';

class Header extends React.Component {

    render(){
        return (
             <header class="main-header">
                <nav class="navbar navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <a href="/home" class="navbar-brand"><b>Food</b></a>
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                <i class="fa fa-bars"></i>
                            </button>
                        </div>
                
                        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="/restaurants">Restaurantes <span class="sr-only">(current)</span></a></li>
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