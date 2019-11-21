import React from 'react';

import { FOOD_API } from '../../api/Api'

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
    
    render(){
        const { error, isLoaded, restaurants } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded) {
            return <div>Loading...</div>;
        } else{
            return (            
                <ul>
                {restaurants.map(item => (
                    <li key={item.name}>
                    {item.name} 
                    </li>
                ))}
            </ul>
            );
        }
    }
      
}

export default Restaurants