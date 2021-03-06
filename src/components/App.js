import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/reduxStore";

import HomeAnimation from "./common/homeAnimation";
import Container from "react-bootstrap/Container";
import HeroCardList from "./cards/heroCardList";
import HeroProfile from "./profile/heroProfile";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App () {
    return (
        <>
            <Provider store={store}>
                <HomeAnimation />
                <Container className="container">
                    <HashRouter>
                        <Route path="/" exact component={HeroCardList} />
                        <Route path="/heroes" component={HeroCardList} />
                        <HeroProfile />
                    </HashRouter>
                </Container>
            </Provider>
        </>
    );
}

export default App;
