import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {MainPage} from "./pages";
import "./App.scss";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
