import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes } from "../../reducers/heroReducer";

import HeroCard from "./HeroCard";


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
    
    return(
        <>
            {heroList.map(item => <HeroCard 
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image} />)}
        </>
    );

}
