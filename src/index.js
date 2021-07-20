import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundary';
import BookstoreService from './services/bookstore-service'
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>  
    <ErrorBoundry>
      <BookstoreServiceProvider value={BookstoreService}>  
        <Router>
    
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
  // </React.StrictMode>, 
  ,
  document.getElementById('root')
);


