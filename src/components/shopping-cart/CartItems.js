import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartItems extends Component {

  removeCartItem() {

  }

  totalPrice() {
    return this.props.items
    .map(item => item.itemPrice)
    .reduce((prev, value) => prev + value, 0)
  }

  render() {
    const { items } = this.props

    if(items.length === 0) {
      return(
        <div >
            <p class="text-center">
                Seu Carrinho está vazio!
            </p>
        </div>
      );
    } else {    
      return(
        
        <div className="table-responsive" >
            <table className="table">
                <tbody>
                    {items.map((item, index) => {
                      return (
                        <tr key={item.itemName + index}>
                          <th>{`${item.quantity}x ${item.itemName}`}</th>
                          <td className="text-right">{ item.itemPrice }</td>
                          <td className="text-right">
                            <a onClick={(e) => this.removeCartItem(e)} className="btn btn-sm danger">
                                <i className="fa fa-remove"></i>Remover
                            </a>
                          </td>
                        </tr>
                      )
                    })}
                    <tr>
                    <th>Total:</th>
                    <td className="text-right"></td>
                        {this.totalPrice()}
                    </tr>  
                </tbody>
            </table>
        </div>
      );
    }
  }
}

const mapStateToProps = store => ({items: store.shoppingCart.items});

export default connect(mapStateToProps)(CartItems);
