import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, patchHeroProfile } from "../../reducers/heroReducer";

import HeroProfileRow from "./heroProfileRow";
import Card  from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./heroProfile.scss";

function getHeroProfile(id){

    const profile = useSelector(state => state.hero.profile);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(id !== -1 && id !== "undefined"){
            dispatch(fetchProfile(id));
        }
    },[]);

	useEffect(() => {
        if(id !== -1 && id !== "undefined"){
            dispatch(fetchProfile(id));
        }
    },[dispatch, id]);

    return profile;
}

export default function HeroProfile(){
    
    const selectedHero = useSelector(state => state.hero.selectedHero);
    const dispatch = useDispatch();
    const heroData = getHeroProfile(selectedHero);
    const heroProfileRow = [];
    
    const [totalPoint, setTotalPoint] = useState(0); 
    const [profilePoint, setProfilePoint] = useState({str: 0,int: 0, agi: 0,luk: 0}); 
    const [isLoading, setLoading] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("false");

    const handleClick = () => setLoading(true);

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
        heroProfileRow.push(<Row key={`row_${key}`} className="my-2"><HeroProfileRow key={key} 
        name={key} 
        totalPoint={totalPoint}
        setTotalPoint={setTotalPoint}
        profilePoint={profilePoint}
        increaseLocalPoint={increaseLocalPoint}
        decreaseLocalPoint={decreaseLocalPoint} /></Row>);
    }

    useEffect(() => {
        setTotalPoint(0);
    },[profilePoint]);

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

    useEffect(() => {
        if (isLoading) {
            dispatch(patchHeroProfile(selectedHero, profilePoint))
            .then((result) => {
                if(result === 200){
                    setAlertMessage("儲存成功");
                    setTimeout(() => setSmShow(false), 1500);
                }else{
                    setAlertMessage("儲存失敗");
                    setTimeout(() => setSmShow(false), 3000);
                }
                setLoading(false);
                setSmShow(true);
            });
            
        }
      }, [isLoading, dispatch, smShow]);

    return(
        <>
        <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Body>{alertMessage}</Modal.Body>
        </Modal>
        {(selectedHero !==  -1)? (
            <Card className="card-profile">
                <Card.Body>
                <Row>
                    <Col xs={8} md={9} lg={10} >
                        {heroProfileRow}
                    </Col>
                    <Col xs={4} md={3} lg={2} className="algin-bottom">
                        <div>剩餘點數：{totalPoint} </div>
                        {
                            totalPoint > 0 ? (<Button variant="primary" size="sm" block disabled>儲存</Button>) :
                            (<Button variant="primary" 
                                size="sm" 
                                disabled={isLoading}
                                onClick={!isLoading ? handleClick : null}
                                block>
                                {isLoading ? "Loading…" : "儲存"}
                            </Button>)
                        }
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        ) : ""}
        </>
    );
}
