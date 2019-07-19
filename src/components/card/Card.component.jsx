import React from 'react';

import './Card.styles.css';


export const Card = props => {
    return(
    <div className="Card">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&`}>{props.img}</img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    )
}