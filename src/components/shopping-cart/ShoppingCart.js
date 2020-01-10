import React from 'react'
import { Link } from 'react-router-dom'

import CartItems from './CartItems'

class ShoppingCart extends React.Component {

    render(){
        return(
                <div className="box box-solid">
                    <div className="box-header">
                        <i className="fa fa-shopping-cart"></i>
                        <h3 className="box-title">Carrinho</h3>
                    </div>
                    <div className="box-body">
                        <CartItems></CartItems>
                    </div>
                    <div className="box-footer">
                        <div className="pull-right">
                            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i> Limpar</button>
                            <Link to="/" className="btn btn-success"><i className="fa fa-credit-card"></i> Fechar Pedido</Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ShoppingCart