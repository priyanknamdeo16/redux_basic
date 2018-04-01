import React, { Component } from 'react';

export default class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue : '1'
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onClickHandler () {
        this.props.clickHandler(this.state.inputValue);
    }

    onChangeHandler(e) {
       this.setState({
            inputValue: e.target.value
        });
    }

    render () {
        return (
            <div>
           <div> {this.state.inputValue} </div> 
                <input value={this.state.inputValue} onChange={this.onChangeHandler}/>
                <button onClick={this.onClickHandler}>Add</button>
            </div>
        );
    }
}