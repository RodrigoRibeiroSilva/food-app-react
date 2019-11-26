import React from 'react';

class ReviewItem extends React.Component {

    renderRatingImage(){
        let rating = this.props.rating
        let path = ""
        
        if(rating < 3){
            path = "/reactions/pissed.png"
        }else if (rating >= 3 && rating <= 4){
            path = "/reactions/soso.png"
        }else {
            path = "/reactions/loved.png"
        }

        return <img className="img-circle" src={process.env.PUBLIC_URL  +  path}  alt=""></img>
    }

    render(){
        return (
           <div className="box box-solid">
                <div className="box-header with-border">
                    <span className="review-score pull-right"><i className="fa fa-star"></i> {this.props.rating}</span>
                    <div className="user-block">
                        {this.renderRatingImage()}
                        <span className="username">{this.props.name}</span>
                        <span className="description">{this.props.date}</span>
                    </div>
                </div>
                <div className="box-body">
                    <p>{this.props.comments}</p>
                </div>
            </div>
        );
    }
}

export default ReviewItem