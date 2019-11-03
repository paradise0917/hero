import React from "react";
import { Provider } from "react-redux";
import store from "../store/reduxStore";

import HeroCardList from "./Cards/HeroCardList";

import "bootstrap/dist/css/bootstrap.min.css";

function App(){
    return(
        <>
            <Provider store={store}>
                <HeroCardList />
            </Provider>
        </>
    );
}

export default App;