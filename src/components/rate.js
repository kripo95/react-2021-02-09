import React from 'react';
function mediumRating(array){

    if (Array.isArray(array.reviews)){

        return (array.reviews.reduce((sum, current) => sum + current.rating, 0) / array.reviews.length).toFixed(2);

    }
        return array.rating.toFixed(2);
}


export default function Rate(props) {
    return (
        <div>
            <p>rating {mediumRating(props)}</p>
        </div>
    )
}
