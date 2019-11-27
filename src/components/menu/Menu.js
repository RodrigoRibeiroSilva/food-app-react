import React from 'react';

import MenuItem from '../menu/MenuItem'
import ShoppingCart from '../shopping-cart/ShoppingCart';
import { FOOD_API } from '../../api/Api'

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            menu: [],    
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
              isLoaded: false,
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
                            restaurantId={menu.restaurantId}
                            handleClick={this.handleMenuItem.bind(this)}>
                        </MenuItem>)
        })

        return result
    }

    handleMenuItem(props){
       
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
                    <div className="col-md-9 col-xs-12">
                        <div className="menu-item-info-box"> 
                            {this.renderMenu()}
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <ShoppingCart handleClick={this.handleMenuItem.bind(this)}/>
                    </div>
                </div>
            );
        }
    }
}

export default Menu
