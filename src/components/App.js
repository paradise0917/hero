import React from "react";
import { Provider } from "react-redux";
import store from "../store/reduxStore";

import HeroCardList from "./cards/heroCardList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App(){
    return(
        <>
            <Provider store={store}>
                <Container className="container">
                    <Row className="justify-content-md-center">
                        <Col style={{border:"solid 1px #ccc"}} md="auto" className="main">
                            <HeroCardList />
                        </Col>
                    </Row>
                    
                </Container>
                
            </Provider>
        </>
    );
}

export default App;