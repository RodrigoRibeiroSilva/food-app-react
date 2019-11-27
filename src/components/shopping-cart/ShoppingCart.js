import React from 'react'
import { Link } from 'react-router-dom'

class ShoppingCart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
        }
    }

    componentDidMount(){
       this.setState({
           items: this.props.handleClick
       })

       console.log('cheguei no shoppingcart')
    }

    total(){
        return this.state.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0)
    }

    clear(){
        this.setState({
            items: []
        })
    }

    addItem(item){
        console.log(item)
        let foundItem = this.state.items.find(cartItem => cartItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.setState({
                items: this.state.items.push(foundItem)
            })
        }
    }

    removeItem(item){
        this.setState({
            items: this.state.items.splice(this.state.items.indexOf(item), 1)
        })
    }

    increaseQty(item) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item) {
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }

    isEmpty(){
        return (this.state.items.length > 0)
    }

    renderCartItems(){
        if(this.isEmpty){
            return(
                <div >
                    <p class="text-center">
                        Seu Carrinho está vazio!
                    </p>
                </div>
            );
        }else{
            return(
                <div class="table-responsive" >
                    <table class="table">
                        <tbody>
                            <tr >
                            <th></th>
                            <td class="text-right"></td>
                            <td class="text-right">
                                <Link  class="btn btn-sm danger">
                                <i class="fa fa-remove"></i>
                                </Link>
                            </td>
                            </tr>
                            <tr>
                            <th>Total:</th>
                            <td class="text-right">{ this.total() }</td>
                            </tr>  
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    render(){
        return(
                <div class="box box-solid">
                    <div class="box-header">
                    <i class="fa fa-shopping-cart"></i>

                    <h3 class="box-title">Carrinho</h3>
                    </div>

                    <div class="box-body">
                        {this.renderCartItems()}
                    </div>
                    <div class="box-footer">
                    <div class="pull-right">
                        <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i> Limpar</button>
                        <Link to="/" class="btn btn-success"><i class="fa fa-credit-card"></i> Fechar Pedido</Link>
                    </div>
                    </div>
            </div>
        );
    }
}

export default ShoppingCart