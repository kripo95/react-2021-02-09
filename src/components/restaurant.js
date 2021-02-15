import React from 'react'
import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";

export default function Restaurant(props) {

    return (
        <div>
            <Menu menu={props.restaurant.menu} />
            <Reviews review={props.restaurant.reviews}/>
            <Rate reviews={props.restaurant.reviews} />
        </div>
    )
}