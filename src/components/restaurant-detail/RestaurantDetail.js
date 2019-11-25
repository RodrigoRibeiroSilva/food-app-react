import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { FOOD_API } from '../../api/Api'
import '../../App.css'


class RestaurantDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          restaurant: ""
        };
    }

    componentDidMount(){
        let id = this.props.match.params.id

        fetch(`${FOOD_API}/restaurants/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                restaurant: result                      
              });
            },
            (error) => {
              this.setState({
                isLoaded: false,
                error
              });
            }
        )
       
    }

    render(){
        const { error, isLoaded, restaurant } = this.state;
        
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="container">
                    <section class="content-header">

                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                            <div className="box box-solid">
                                <div className="box-header with-border">
                                <i className="fa fa-home"></i>
                                <h3 className="box-title"> {restaurant.name}</h3><span class="pull-right"><i class="fa fa-star"></i> {restaurant.rating}</span>
                                </div>
                                <div className="box-body">                               
                                    <div className="col-sm-3 col-xs-12">
                                    <span className="place-info-box-icon"><img src={process.env.PUBLIC_URL + '/restaurants/' + restaurant.imagePath}   alt=""/></span>
                                       
                                    </div>

                                    <dl className="col-sm-9 col-xs-12">
                                        <dt>Categoria</dt>
                                        <dd>{restaurant.category}</dd>
                                        <dt>Quem somos</dt>
                                        <dd>{restaurant.about}</dd>
                                        <dt>Horários</dt>
                                        <dd>{restaurant.hours}</dd>
                                    </dl>
                                </div>
                                <div className="box-footer detail-footer">
                                <a className="pull-left" href="/menu"> Menu </a>
                                <a className="pull-right" href="/review"> Avaliações </a>
                            </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <Switch>
                                <Route exact path="/menu"  />
                                <Route exact path="/review" />
                            </Switch>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

export default RestaurantDetail