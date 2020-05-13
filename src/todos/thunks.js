import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess } from './actions';
// thunk is a function that returns another function which contains the actual logic we want it to perform on trigger

// this thunk the function that is returned gets two arguments (dispatch, getState) 
// dispatch used to dispatch other redux actions
// getState gets the current state of the redux store
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch("http://localhost:8080/todos");
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    }
    catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e)); 
    }
}

export const displayAlert = text => {
    alert(`${text}`);
};


