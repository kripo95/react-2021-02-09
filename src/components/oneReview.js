import React from 'react';

import Rate from "./rate";

import style from './oneReview.module.css'

export default function Review(props){

    return (
        <div className={style.wrapperReview}>
            <p>User: {props.review.user}</p>
            <p>Comment: {props.review.text}</p>
            <Rate rating={props.review.rating} />
        </div>
    )
}