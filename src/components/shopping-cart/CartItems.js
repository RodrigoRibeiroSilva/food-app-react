import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartItems extends Component {

  render() {
    const { items, totalPrice } = this.props

    if(false) {
      return(
        <div >
            <p class="text-center">
                Seu Carrinho está vazio!
            </p>
        </div>
    );
    }else {
      return(
        <div class="table-responsive" >
            <table class="table">
                <tbody>
                    <tr >
                    <th></th>
                    <td class="text-right"></td>
                    <td class="text-right">
                      
                    </td>
                    </tr>
                    <tr>
                    <th>Total:</th>
                    <td class="text-right"></td>
                        {totalPrice}
                    </tr>  
                </tbody>
            </table>
        </div>
    );
    }
  }
}

const mapStateToProps = store => ({items: store.shoppingCart.items}, {totalPrice: store.shoppingCart.totalPrice});

export default connect(mapStateToProps)(CartItems);
