import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../homepage/Homepage";
import Aboutus from "../aboutus/Aboutus";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import FinishLogin from "../auth/FinishLogin";
import EVList from "../evs/EvList";
import FavoriteList from "../favorites/FavoriteList";
import Profile from "../profiles/Profile"
import EV from "../evs/EV"

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
                <Route exact path="/signup"><SignupForm /></Route>
                <Route exact path="/aboutus"><Aboutus /></Route>
                <Route exact path="/finishlogin"><FinishLogin login={login}/></Route>


                <PrivateRoute exact path="/addev"></PrivateRoute>
                <PrivateRoute exact path="/profile"><Profile /></PrivateRoute>
                <PrivateRoute exact path="/evs/"><EVList /></PrivateRoute>
                <PrivateRoute exact path="/evs/:id"><EV /></PrivateRoute>
                <PrivateRoute exact path="/evs/compare"></PrivateRoute>
                <PrivateRoute exact path="/favorites"><FavoriteList /> </PrivateRoute>

                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default Routes;