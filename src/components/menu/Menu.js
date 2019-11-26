import React from 'react';

import MenuItem from '../menu/MenuItem'
import { FOOD_API } from '../../api/Api'

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            menu: []       
        }
    }

    componentDidMount(){
        this.getMenu()
    }

    
    getMenu(){
        let id = this.props.id
        fetch(`${FOOD_API}/restaurants/${id}/menu`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              menu: result
                        
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

    renderMenu(){
        let result = []
        console.log(this.state.menu)
        this.state.menu.map((menu) => {
            result.push(<MenuItem
                            id={menu.id}
                            imagePath={menu.imagePath} 
                            name={menu.name} 
                            description={menu.description} 
                            price={menu.price} 
                            restaurantId={menu.restaurantId}>
                        </MenuItem>)
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
                <div className="container">  
                    <div class="col-md-9 col-xs-12">
                        <div class="menu-item-info-box"> 
                            {this.renderMenu()}
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-12">

                    </div>
                </div>
            );
        }
    }
}

export default Menu
