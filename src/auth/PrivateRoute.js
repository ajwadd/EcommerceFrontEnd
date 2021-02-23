import React, { Component} from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthanticated } from "./helpers";

const PrivateRoute = ({ component : Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthanticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin"
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;