import React from 'react';

const ReviewItem = (props) => {
    return (
        <div className="box box-solid">
            <div className="box-header with-border">
                <span className="review-score pull-right"><i className="fa fa-star"></i> {props.rating}</span>
                <span className="user-block">
                    {renderRatingImage(props.rating)}
                    <span className="username">{props.name}</span>
                    <span className="description">{props.date}</span>
                </span>
            </div>
            <div className="box-body">
                    <p>{props.comments}</p>
            </div>
        </div>
    );
};

const renderRatingImage = (rating) => {
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

export default ReviewItem