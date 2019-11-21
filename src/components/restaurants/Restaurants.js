import React from 'react';

import { FOOD_API } from '../../api/Api'
import Restaurant from './Restaurant';

class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          restaurants: []
        };
    }

    componentDidMount() {
        this.getRestaurants();
    }

    getRestaurants(){
        fetch(`${FOOD_API}/restaurants`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                restaurants: result
                          
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }

    renderRestaurants() {
        let result = []
        this.state.restaurants.map((restaurant) => {
            result.push(<Restaurant
                            image={restaurant.imagePath} 
                            name={restaurant.name} 
                            rating={restaurant.rating} 
                            category={restaurant.category} 
                            deliveryEstimate={restaurant.deliveryEstimate} >
                        </Restaurant>)
        })

        return result
    }
    
    render(){
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded) {
            return <div>Loading...</div>;
        } else{
            return (
            <div>          
                <section className="content-header">
                    <h1>
                        Todos os Restaurantes
                    </h1>
                </section>
                
                <section className="content">
                    <div className="row">
                        {this.renderRestaurants()}
                    </div>
                </section>
            </div>                        
            );  
        }
    }  
}


export default Restaurants