import React, { Component } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import  rootReducers  from './reducers';

import todos from './reducers/todos'

//create store from simple reducer (not combined)
//const store = createStore(todos);

//root reducer
const rootR = (state = {}, action) => {
    return {
        todos : todos(state.todos, action)
    }
};

//creating store
const store = createStore(rootR);

const clickHandler = () => {
    store.dispatch({type: 'ADD_TODO', text : 'text'});
};

//subscribe
const subs = () => {
    console.log(store.getState());
};
store.subscribe(subs);

export default class ReactRedux extends Component {
    
    render () {
        return (
            <div onClick={this.props.clickHandler}>Hello world</div>
        );
    }
}

render(<ReactRedux clickHandler={clickHandler}/>, document.getElementById('app'));