import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';
// reducer is a function that manages a resource in the redux store


// TODOS REDUCER
// state parameter is the current state the resource is managing set the default value to [] in the function parameters
// action that was trigger object of type and payload propertys
// redux takes the return value of the todos function and updates the state
/* * converting to use selectors
    state.todos: {
        isloading: true,
        data: [...]
    }

*/
const initialState = { isloading: false, data: [] };

export const todos = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo),
            }
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            //filter out the todo text from the payload and return
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id),
            }
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: todoCompleted } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    // use spread operator to Keep the old state and add or overwrite the isCompleted property.
                    if (todo.id === todoCompleted.id) {
                        return { ...todo, isCompleted: true };
                    }
                    return todo;
                }),
            }
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos,
            }
        }
        case LOAD_TODOS_IN_PROGRESS:
            return{
                ...state,
                isLoading: true,
            }
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        //return the orginal state as is 
        //important to return the unchanged state if the reducer doesn't return anything
        default:
            return state;
    }
}