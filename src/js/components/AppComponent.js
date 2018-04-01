import React, { Component } from 'react';
import InputComponent from '../components/InputComponent';
export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
       // this.props.store.subscribe(this.render);
    }
    clickHandler (e) {
        this.props.store.dispatch({type: 'ADD_TODO', text : e});
    };
    render () {
        return (
            <div>
                <InputComponent clickHandler={this.clickHandler}/>
                { this.props.store && this.props.store.todos && this.props.store.todos.map(function(item) {
                        return <div>{item}</div>
                    })
                }
            </div>
        );
    }
}