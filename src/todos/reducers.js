import { CREATE_TODO, REMOVE_TODO } from './actions';
// reducer is a function that manages a resource in the redux store
// state parameter is the current state the resource is managing set the default value to [] in the function parameters
// action that was trigger object of type and payload propertys
// redux takes the return value of the todos function and updates the state

export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch(type){
        case CREATE_TODO:{
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            }
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const { text } = payload;
            //filter out the todo text from the payload and return
            return state.filter(todo => todo.text !== text);
        }
        //return the orginal state as is 
        //important to return the unchanged state if the reducer doesn't return anything
        default:
            return state;
    }
}