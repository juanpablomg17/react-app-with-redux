import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './components/results/index';
import Details from './components/details/index';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results"/>
            </Switch>
        </BrowserRouter>
       
        
  
    </div>
    </Provider>
    
  );
}

export default App;
