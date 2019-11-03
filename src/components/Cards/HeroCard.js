import React from "react";
import Card  from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./heroCard.scss";

export default function HeroCard(props){
    
    return(
        <>
            <Col lg={3} md={6} xs={12} className="text-center" >
                <Card className={props.selected === true ? "card selected" : "card"}
                        onClick={() => {props.setSelectedCardID(props.id)}}>
                        <Card.Img variant="top" src={`${props.image}`} className="card-img" />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                        </Card.Body>
                </Card>
           </Col>
        </>
    );
}