import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../reducers/heroReducer";

import HeroProfileRow from "./heroProfileRow";
import Card  from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


import "./heroProfile.scss";

function getHeroProfile(id){

    
    const profile = useSelector(state => state.hero.profile);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("firstload", id);
        if(id !== -1 && id !== "undefined"){
            dispatch(fetchProfile(id));
        }
    },[]);

	useEffect(() => {
        console.log("selectedHero", id);
        if(id !== -1 && id !== "undefined"){
            dispatch(fetchProfile(id));
        }
    },[dispatch, id]);


    return profile;
}

export default function HeroProfile(){
    
    const selectedHero = useSelector(state => state.hero.selectedHero);
    const heroData = getHeroProfile(selectedHero);
    const heroProfileRow = [];
    const [totalPoint, setTotalPoint] = useState(0); 
    const [profilePoint, setProfilePoint] = useState({str: 0,int: 0, agi: 0,luk: 0}); 

    useEffect(() => {
        if(Object.keys(heroData).length){
            setProfilePoint({
                str: heroData.str,
                int: heroData.int,
                agi: heroData.agi,
                luk: heroData.luk
            });
        }
    },[heroData]);

    function increaseLocalPoint(newProfilePoint){
        if(totalPoint > 0){
            setTotalPoint(totalPoint - 1);
            setProfilePoint(newProfilePoint);
        }
    }

    function decreaseLocalPoint(newProfilePoint){
        setTotalPoint(totalPoint + 1);
        setProfilePoint(newProfilePoint);
    }

    for(let key in heroData){
        heroProfileRow.push(<Row className="my-2"><HeroProfileRow key={key} 
        name={key} 
        totalPoint={totalPoint}
        setTotalPoint={setTotalPoint}
        profilePoint={profilePoint}
        increaseLocalPoint={increaseLocalPoint}
        decreaseLocalPoint={decreaseLocalPoint} /></Row>);
    }


    return(
        <>
        {(selectedHero !==  -1)? (
            <Card className="card-profile">
                <Card.Body>
                <Row>
                    <Col xs={8} md={9} lg={10} >
                        {heroProfileRow}
                    </Col>
                    <Col xs={4} md={3} lg={2} className="algin-bottom">
                        <div>剩餘點數：{totalPoint} </div>
                        <Button variant="primary" size="sm" block>儲存</Button>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        ) : ""}
            
        </>
    );
}