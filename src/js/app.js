import React, { Component } from 'react';

import { render } from 'react-dom';

export default class ReactRedux extends Component {
    render () {
        return (
            <div>Hello world</div>
        );
    }
}

render(<ReactRedux />, document.getElementById('app'));