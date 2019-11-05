import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./heroProgileRow.scss";

export default function HeroProfileRow(props){

    function increasePoint(type){
        if(props.totalPoint > 0){
            props.profilePoint[type] = props.profilePoint[type] + 1;
            props.increaseLocalPoint(props.profilePoint);
        }
    }

    function decreasePoint(type){
        if(props.profilePoint[type] > 0){
            props.profilePoint[type] = props.profilePoint[type] - 1;
            props.decreaseLocalPoint(props.profilePoint);
        }
    }

    return(
        <>
            <Col xs={4} md={3} className="col-name">
                {props.name}
            </Col>
            <Col xs={8} md={7} className="col-value">
                <Button variant="info" size="sm" onClick={() => {decreasePoint(props.name)}}  >-</Button>
                <div className="profile-value px-1">{props.profilePoint[props.name]}</div>
                <Button variant="info" size="sm" onClick={() => {increasePoint(props.name)}} >+</Button>
            </Col>
        </>
    );
}