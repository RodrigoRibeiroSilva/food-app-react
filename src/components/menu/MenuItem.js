import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from '../../actions/index'

class MenuItem extends Component {

    addCartItem() {
        this.props.addItem(this.props.name, this.props.price)
    }
    
    render() {
        return (
            <div className="menu-item-info-box">
                <span className="menu-item-info-box-icon">
                    <img src={process.env.PUBLIC_URL  +  this.props.imagePath}  alt=""></img>
                </span> 
                <div className="menu-item-info-box-content">
                    <span className="menu-item-info-box-text">{this.props.name}</span>
                    <span className="menu-item-info-box-detail">{this.props.description}</span>
                    <span className="menu-item-info-box-price">{this.props.price}</span>
                    <a className="" onClick={(e) => this.addCartItem(e)}> 
                        <i className="fa fa-plus-circle" ></i> Adicionar
                    </a>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({ addItem }, dispatch); 

export default connect(null, mapDispatchToProps)(MenuItem)