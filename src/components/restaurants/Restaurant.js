import React from 'react';
import image from '../../assets/img/restaurants/tasty.png'
class Restaurant extends React.Component {

    render(){
        return (
              
            <div className="col-sm-6 col-xs-12">
                  <a href="/restaurant">
                    <div className="place-info-box">
                      <span className="place-info-box-icon"><img src={process.env.PUBLIC_URL + '/restaurants/' + this.props.image}  alt=""/></span>

                      <div className="place-info-box-content">
                        <span className="place-info-box-text">{this.props.name}</span>
                        <span className="place-info-box-star"><i class="fa fa-star"></i> {this.props.rating} </span>
                        <span className="place-info-box-detail">{this.props.category}</span>
                        <span className="place-info-box-detail">{this.props.deliveryEstimate}</span>
                      </div>
                    </div>
                  </a>               
            </div>               
        );
    }
      
}

export default Restaurant