import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';
// reducer is a function that manages a resource in the redux store

// IS LOADING REDUCER

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}


// TODOS REDUCER
// state parameter is the current state the resource is managing set the default value to [] in the function parameters
// action that was trigger object of type and payload propertys
// redux takes the return value of the todos function and updates the state

export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo);
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            //filter out the todo text from the payload and return
            return state.filter(todo => todo.id !== todoToRemove.id);
        }
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;
            return state.map(todo => {
                // use spread operator to Keep the old state and add or overwrite the isCompleted property.
                if (todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        }
        case LOAD_TODOS_SUCCESS:{
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        //return the orginal state as is 
        //important to return the unchanged state if the reducer doesn't return anything
        default:
            return state;
    }
}