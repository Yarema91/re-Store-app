import React from "react";
import { Route, Switch } from "react-router";
// import { withBookstoreService } from '../hoc';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  // console.log(bookstoreService.getBooks());
  return (
    // <div className="App">
      <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
        <Switch >
          <Route
           exact path='/' 
          component={HomePage} 
          />
          <Route 
          path='/cart' 
          component={CartPage}
          />
        </Switch>
      </main>
    // </div>
  )
};

export default App;
