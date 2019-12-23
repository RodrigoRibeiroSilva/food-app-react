import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartItems from './CartItems'

class ShoppingCart extends React.Component {

    render(){
        return(
                <div class="box box-solid">
                    <div class="box-header">
                        <i class="fa fa-shopping-cart"></i>
                        <h3 class="box-title">Carrinho</h3>
                    </div>
                    <div class="box-body">
                        <CartItems></CartItems>
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