import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Booking from './Booking';

const School = React.lazy(() => import('./School'));
const About = React.lazy(() => import('./About'));

const Main = () => (
  <React.Suspense fallback="...Loading">
    <School />
  </React.Suspense>
);

export const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/booking/:id" component={Booking} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
