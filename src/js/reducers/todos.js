import {addItem } from '../actions'

const todos = (state = [], action) => {
    switch(action.type) {
        case  'ADD_TODO' : {
            return [
                ...state,
                addItem(action.text)
            ]; 
        }
        default : {
            return state;
        }
    }
};

export default todos; 