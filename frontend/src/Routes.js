import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import any pages that need routes

export const Routes = () => {
    return(
        <Router>
            <Switch>
                {/* <Route path="/some-page" component={SomePage} /> */}
                {/* <Route path="/another-page" component={AnotherPage} /> */}
            </Switch>
        </Router>
    )
}