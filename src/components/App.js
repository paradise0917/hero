import React from "react";
import { Provider } from "react-redux";
import store from "../store/reduxStore";

import HeroCardList from "./cards/heroCardList";
import Container from "react-bootstrap/Container";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App(){
    return(
        <>
            <Provider store={store}>
                <Container className="container">
                    <HeroCardList />
                </Container>
            </Provider>
        </>
    );
}

export default App;