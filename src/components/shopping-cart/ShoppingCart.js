import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickValue } from '../../shoppingCartAction'


class ShoppingCart extends React.Component {


    renderCartItems(){
        if(false){
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
                            <td class="text-right"></td>
                                {this.props.items}
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

 const mapStateToProps = (state) => ({items: state.shopppingCart.items})
 

export default connect(mapStateToProps)(ShoppingCart) 