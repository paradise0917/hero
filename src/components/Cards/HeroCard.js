import React from "react";
import Card  from "react-bootstrap/Card";

export default function HeroCard(props){
    return(
        <>
           <Card>
                <Card.Img variant="top" src={`${props.image}`} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
           </Card>
        </>
    );
}