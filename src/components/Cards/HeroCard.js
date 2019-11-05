import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHero } from "../../reducers/heroReducer";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./heroCard.scss";

/*
 * EVERY SINGLE HERO CARD
 */
export default function HeroCard (props) {
    const selectedHero = useSelector(state => state.hero.selectedHero);
    const dispatch = useDispatch();

    return (
        <>
            <Col lg={3} md={6} xs={12} className="text-center" >
                <Card className={selectedHero === props.id ? "card-hero selected" : "card-hero"}
                    onClick={() => { dispatch(selectHero(props.id)); }}>
                    <Card.Img variant="top" src={`${props.image}`} className="card-img" />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

HeroCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
};
