import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes } from "../../reducers/heroReducer";

import HeroCard from "./heroCard";
import Loader from "../commmon/loader";
import Row from "react-bootstrap/Row";

/*
 * CALL API TO GET LIST HEROES
 */
function getHeroList () {
    const heroList = useSelector(state => state.hero.heroList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHeroes());
    }, [dispatch]);

    return heroList;
}

/*
 * HERO LISTS COMPONENT
 */
export default function HeroCardList () {

    const heroList = getHeroList();
    return (
        <>
            <Row className="justify-content-md-center">
                {heroList.length > 0
                    ? heroList.map(item => <HeroCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image} />)
                    : <Loader />}
            </Row>
        </>
    );
}
