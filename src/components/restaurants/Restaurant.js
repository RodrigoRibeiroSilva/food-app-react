import React from 'react';
import ImgRestaurant from '../../assets/img/restaurants/tasty.png'

class Restaurant extends React.Component {

    render(){
        return (          
            <div className="col-sm-6 col-xs-12">
                  <a href="/restaurant">
                    <div className="place-info-box">
                      <span className="place-info-box-icon"><img src={ImgRestaurant} alt="Tasty"/></span>

                      <div className="place-info-box-content">
                        <span className="place-info-box-text">Tasty Treats</span>
                        <span className="place-info-box-star"><i class="fa fa-star"></i> 4.5</span>
                        <span className="place-info-box-detail">Bakery</span>
                        <span className="place-info-box-detail">40-65m</span>
                      </div>
                    </div>
                  </a>               
            </div>               
        );
    }
      
}

export default Restaurant