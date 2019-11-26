import React from 'react';

import ReviewItem from '../review/ReviewItem'
import { FOOD_API } from '../../api/Api'

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            reviews: []
        }
    }

    componentDidMount(){
        this.getReviews()
    }

    getReviews(){
        let id = this.props.id
        fetch(`${FOOD_API}/restaurants/${id}/reviews`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              reviews: result
                        
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

    renderReviews(){
        let result = []
        this.state.reviews.map((review) => {
            result.push(<ReviewItem
                            name={review.name} 
                            date={review.date}
                            rating={review.rating} 
                            comments={review.comments} 
                            restaurantId={review.restaurantId}>
                        </ReviewItem>)
        })

        return result
    }

    render(){
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded) {
            return <div>Loading...</div>;
        } else{
            return (
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            {this.renderReviews()}
                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default Review