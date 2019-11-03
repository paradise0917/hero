import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes } from "../../reducers/heroReducer";

import HeroCard from "./heroCard";
import Row from "react-bootstrap/Row";

import "./heroCardList.scss";


/*
 * Call API to get heroList
 */
function getHeroList(){

    const heroList = useSelector(state => state.hero.heroList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHeroes())
    }, [dispatch]);

    return heroList;
}

export default function HeroCardList (){

    const heroList = getHeroList();
    const [selectedCardID, setSelectedCardID] = useState(-1);
    
    return(
        <>
            <Row className="justify-content-md-center">
                {heroList.map(item => <HeroCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image} 
                    selected={selectedCardID === item.id ? true : false}
                    setSelectedCardID={setSelectedCardID}/>)}
            </Row>
        </>
    );

}
