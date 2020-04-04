import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Recipe from './Recipe';
import App from '../App'
import ViewRecipe from "./ViewRecipe";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ App } exact />
            <Route path="/recipe/:id" component={ViewRecipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;