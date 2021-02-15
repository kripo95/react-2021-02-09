import React from 'react';
import Review from './oneReview'
export default function Reviews(props) {
    return (
        <div>
            <h3>Reviews</h3>
            {props.review.map(item => <Review key={item.id} review={item}/>)}
        </div>

    )
}