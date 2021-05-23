import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../homepage/Homepage"
import Aboutus from "../aboutus/Aboutus"
import LoginForm from "../auth/LoginForm"

function Routes({ login, signup }){
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return(
        <div>
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route exact path="/login"><LoginForm /></Route>
                <Route exact path="/signup"></Route>
                <Route exact path="/aboutus"><Aboutus /></Route>


                <PrivateRoute exact path="/addev"></PrivateRoute>
                <PrivateRoute exact path="/profile"></PrivateRoute>
                <PrivateRoute exact path="/evs/"> </PrivateRoute>
                <PrivateRoute exact path="/evs/:id"> </PrivateRoute>
                <PrivateRoute exact path="/evs/compare"> </PrivateRoute>
                <PrivateRoute exact path="/profile"></PrivateRoute>

                {/* <Redirect to="/"/> */}
            </Switch>
        </div>
    )
}

export default Routes;