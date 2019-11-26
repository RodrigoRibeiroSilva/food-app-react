import React from 'react';

class MenuItem extends React.Component {

    render(){
        return (
           <div class="menu-item-info-box">
                <span class="menu-item-info-box-icon">
                    <img src={process.env.PUBLIC_URL  +  this.props.imagePath}  alt=""></img>
                </span>
                <div class="menu-item-info-box-content">
                    <span class="menu-item-info-box-text">{this.props.name}</span>
                    <span class="menu-item-info-box-detail">{this.props.description}</span>
                    <span class="menu-item-info-box-price">{this.props.price}</span>
                    <a class="">
                        <i class="fa fa-plus-circle"></i> Adicionar
                    </a>
                </div>
            </div>
        );
    }
}

export default MenuItem