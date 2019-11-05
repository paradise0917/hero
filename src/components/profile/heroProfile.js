import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProfile, patchHeroProfile } from "../../reducers/heroReducer";

import HeroProfileRow from "./heroProfileRow";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./heroProfile.scss";

/*
 * CALL API TO GET HERO LIST
 */
function getHeroProfile (id) {
    const profile = useSelector(state => state.hero.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== -1) {
            dispatch(fetchProfile(id));
        }
    }, [dispatch, id]);

    return profile;
}

/*
 * HERO PROFILE BLOCK
 */
export default function HeroProfile () {
    const selectedHero = useSelector(state => state.hero.selectedHero);
    const dispatch = useDispatch();
    const history = useHistory();
    const heroProfilePoint = getHeroProfile(selectedHero);
    const heroProfileRow = [];

    const [totalPoint, setTotalPoint] = useState(0);
    const [profilePoint, setProfilePoint] = useState({ str: 0, int: 0, agi: 0, luk: 0 });
    const [isLoading, setLoading] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("false");

    const handleSaveBtnClick = () => setLoading(true);

    for (const key in heroProfilePoint) {
        heroProfileRow.push(<Row key={`row_${key}`} className="my-2">
            <HeroProfileRow key={key}
                name={key}
                totalPoint={totalPoint}
                setTotalPoint={setTotalPoint}
                setProfilePoint={setProfilePoint}
                profilePoint={profilePoint} /></Row>);
    }

    /*
     * RESET TOTALPOINT WHNE CHANGING CARD
     */
    useEffect(() => {
        setTotalPoint(0);
        history.push(`/heroes/${selectedHero}`);
    }, [profilePoint]);

    /*
     * SET PROFILEPOINT WHNE CHANGING HEROPROFILEPOINT
     */
    useEffect(() => {
        if (Object.keys(heroProfilePoint).length) {
            setProfilePoint({
                str: heroProfilePoint.str,
                int: heroProfilePoint.int,
                agi: heroProfilePoint.agi,
                luk: heroProfilePoint.luk
            });
        }
    }, [heroProfilePoint]);

    /*
     * SET PROFILEPOINT WHNE CHANGING HEROPROFILEPOINT
     */
    useEffect(() => {
        if (isLoading) {
            dispatch(patchHeroProfile(selectedHero, profilePoint))
                .then((result) => {
                    if (result === 200) {
                        setAlertMessage("儲存成功");
                        setTimeout(() => setSmShow(false), 1500);
                    } else {
                        setAlertMessage("儲存失敗");
                        setTimeout(() => setSmShow(false), 3000);
                    }
                    setLoading(false);
                    setSmShow(true);
                });
        }
    }, [isLoading, dispatch, smShow]);

    return (
        <>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Body>{alertMessage}</Modal.Body>
            </Modal>
            {(selectedHero !== -1) ? (
                <Card className="card-profile">
                    <Card.Body>
                        <Row>
                            <Col xs={12} md={9} lg={10} >
                                {heroProfileRow}
                            </Col>
                            <Col xs={12} md={3} lg={2} className="right-block">
                                <div className="my-3">剩餘點數：{totalPoint} </div>
                                {
                                    totalPoint > 0 ? (<Button variant="info" size="sm" block disabled>儲存</Button>)
                                        : (<Button variant="info"
                                            size="sm"
                                            disabled={isLoading}
                                            onClick={!isLoading ? handleSaveBtnClick : null}
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
