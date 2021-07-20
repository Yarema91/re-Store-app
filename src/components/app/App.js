import React from "react";
import './app.css';
import { withBookstoreService } from '../hoc';
import { Route, Switch } from "react-router";
import { HomePage, CardPage } from '../pages';

const App = ({ bookstoreService }) => {
  // console.log(bookstoreService.getBooks());
  return (
    <div className="App">
      <Switch >
        <Route exact path='/' component={ HomePage } />
        <Route path='/card' component={ CardPage } />
      </Switch>
    </div>
  )
};

export default withBookstoreService()(App);
