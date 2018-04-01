//usage
//import A from './react/ref';
//render(<A/>, document.getElementById('app'));

import React, {Component} from 'react';
import createRef from 'create-react-ref/lib/createRef';

class A extends Component {
    constructor(props) {
        super(props);
       
        //create ref 
        this.textInput = createRef();
        
        //binding this to handler
        this.clickHandler = this.clickHandler.bind(this);
    }

    //handler
    clickHandler() {
       this.textInput.current.focus();
    }

    render () {
        return (
            <div>
            <span>one</span>
               <input ref={this.textInput}/>
               <input type="button" value="click" onClick={this.clickHandler}/>
            </div>
        );
    }
}

export default A;