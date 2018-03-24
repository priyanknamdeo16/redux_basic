let nextTodo = 0;

export const constants = {
    ADD_TODO : 'ADD_TODO'
};
 
 
export const addItem = (text) => {
    return {
        type : 'ADD_TODO',
        id : nextTodo ++,
        text : text
    };
};

export const removeItem = () => {
    //todo
};