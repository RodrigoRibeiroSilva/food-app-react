import React from 'react';

const MenuItem = (props) => {
    return (
        <div className="menu-item-info-box">
            <span className="menu-item-info-box-icon">
                <img src={process.env.PUBLIC_URL  +  props.imagePath}  alt=""></img>
            </span>
            <div className="menu-item-info-box-content">
                <span className="menu-item-info-box-text">{props.name}</span>
                <span className="menu-item-info-box-detail">{props.description}</span>
                <span className="menu-item-info-box-price">{props.price}</span>
                <a className="">
                    <i className="fa fa-plus-circle"></i> Adicionar
                </a>
            </div>
        </div>
    );
};

export default MenuItem