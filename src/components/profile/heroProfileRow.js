import React from "react";
import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./heroProgileRow.scss";

/*
 * HERO PROFILE POINT ROW
 */
export default function HeroProfileRow (props) {
    function increasePoint (type) {
        if (props.totalPoint > 0) {
            props.profilePoint[type] = props.profilePoint[type] + 1;
            props.setTotalPoint(props.totalPoint - 1);
            props.setProfilePoint(props.profilePoint);
        }
    }

    function decreasePoint (type) {
        if (props.profilePoint[type] > 0) {
            props.profilePoint[type] = props.profilePoint[type] - 1;
            props.setTotalPoint(props.totalPoint + 1);
            props.setProfilePoint(props.profilePoint);
        }
    }

    return (
        <>
            <Col xs={4} md={3} className="col-name">
                {props.name}
            </Col>
            <Col xs={8} md={7} className="col-value">
                <Button variant="light" size="sm" onClick={() => { decreasePoint(props.name); }} >-</Button>
                <div className="profile-value px-1">{props.profilePoint[props.name]}</div>
                <Button variant="light" size="sm" onClick={() => { increasePoint(props.name); }} >+</Button>
            </Col>
        </>
    );
}

HeroProfileRow.propTypes = {
    totalPoint: PropTypes.number,
    profilePoint: PropTypes.object,
    setTotalPoint: PropTypes.func,
    setProfilePoint: PropTypes.func,
    name: PropTypes.string
};
