import React from 'react';
import { Switch } from 'react-router-dom';
import Extension from 'app/modules/extension/extension';
import PageNotFound from 'app/shared/error/page-not-found';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Personal from 'app/modules/personal/personal';
import Login from 'app/modules/login/login';
import Sharepage from 'app/modules/public/sharepage';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/personal" component={Personal} />
      <ErrorBoundaryRoute path="/sharepage" component={Sharepage} />
      <ErrorBoundaryRoute path="/" exact component={Extension} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
