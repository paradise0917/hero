import React from "react";
import Card  from "react-bootstrap/Card";

import "./heroCard.scss";

export default function HeroCard(props){
    
    return(
        <>
           <Card className={props.selected === true ? "card selected" : "card"}
                onClick={() => {props.setSelectedCardID(props.id)}}>
                <Card.Img variant="top" src={`${props.image}`} className="card-img" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
           </Card>
        </>
    );
}