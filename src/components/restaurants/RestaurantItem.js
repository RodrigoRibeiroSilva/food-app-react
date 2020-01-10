import React from 'react';
import { Link } from 'react-router-dom'

const Restaurant = (props) => {   
    return (        
        <div className="col-sm-6 col-xs-12">
          <Link to={`/restaurant-detail/${props.id}`} >
            <div className="place-info-box">
              <span className="place-info-box-icon"><img src={process.env.PUBLIC_URL + '/restaurants/' + props.image}  alt=""/></span>
              <div className="place-info-box-content">
                <span className="place-info-box-text">{props.name}</span>
                <span className="place-info-box-star"><i className="fa fa-star"></i> {props.rating} </span>
                <span className="place-info-box-detail">{props.category}</span>
                <span className="place-info-box-detail">{props.deliveryEstimate}</span>
              </div>
            </div>
          </Link>               
        </div>          
    );
};
      


export default Restaurant