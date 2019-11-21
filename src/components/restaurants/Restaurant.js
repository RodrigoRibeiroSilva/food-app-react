import React from 'react';
import { Link } from 'react-router-dom'

class Restaurant extends React.Component {

    constructor(props){
      super(props)
      
    }

    render(){
      let path = "/restaurant-detail/" + this.props.id
        return (        
              <div className="col-sm-6 col-xs-12">
                    <Link to={path} >
                      <div className="place-info-box">
                        <span className="place-info-box-icon"><img src={process.env.PUBLIC_URL + '/restaurants/' + this.props.image}  alt=""/></span>

                        <div className="place-info-box-content">
                          <span className="place-info-box-text">{this.props.name}</span>
                          <span className="place-info-box-star"><i class="fa fa-star"></i> {this.props.rating} </span>
                          <span className="place-info-box-detail">{this.props.category}</span>
                          <span className="place-info-box-detail">{this.props.deliveryEstimate}</span>
                        </div>
                      </div>
                    </Link>               
              </div>          
        );
    }
      
}

export default Restaurant