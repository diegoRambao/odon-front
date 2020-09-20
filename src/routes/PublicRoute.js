import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/Authentication.service';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/main" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;