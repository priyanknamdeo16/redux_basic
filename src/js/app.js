import React, { Component } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import  rootReducers  from './reducers';

import todos from './reducers/todos'
import AppComponent from './components/AppComponent'

//react
import A from './react/ref';

//creating store
const store = createStore(rootReducers);



//subscribe
const subs = () => {
    console.log(store.getState());
};
store.subscribe(subs);


render(<A/>, document.getElementById('app'));

//render(<AppComponent store={store}/>, document.getElementById('app'));