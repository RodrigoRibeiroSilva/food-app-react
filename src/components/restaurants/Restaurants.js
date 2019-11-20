import React from 'react';
import Restaurant from './Restaurant';

class Restaurants extends React.Component {
    
    render(){
        return (
            <div>          
                <section className="content-header">
                    <h1>
                        Todos os Restaurantes
                    </h1>
                </section>
                
                <section className="content">
                    <div className="row">
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