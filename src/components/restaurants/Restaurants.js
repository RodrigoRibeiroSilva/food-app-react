import React from 'react';
import Restaurant from './Restaurant';

class Restaurants extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>          
                <section class="content-header">
                    <h1>
                        Todos os Restaurantes
                    </h1>
                </section>
                
                <section class="content">
                    <div class="row">
                        <Restaurant></Restaurant>
                        <Restaurant></Restaurant>
                        <Restaurant></Restaurant>
                        <Restaurant></Restaurant>
                        <Restaurant></Restaurant>
                        <Restaurant></Restaurant>
                    </div>
                </section>
            </div>
        );
    }
      
}

export default Restaurants