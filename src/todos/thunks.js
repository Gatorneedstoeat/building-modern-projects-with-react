import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess, createTodo, removeTodo, markTodoAsCompleted } from './actions';
// thunk is a function that returns another function which contains the actual logic we want it to perform on trigger

// this thunk the function that is returned gets two arguments (dispatch, getState) 
// dispatch used to dispatch other redux actions
// getState gets the current state of the redux store
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch("http://localhost:8080/todos-delay/");
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    }
    catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}
// Returns an async function that takes dispatch as an argument
export const addTodoRequest = text => async dispatch => {

    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body,
            });

        const todo = await response.json();
        dispatch(createTodo(todo));

    } catch (e) {
        dispatch(displayAlert(e));
    }


}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        })
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const setCompletedRequest = id => async dispatch =>{
    try{
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method:'post'
        });
        const completedTodo = await response.json();
        dispatch(markTodoAsCompleted(completedTodo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}
export const displayAlert = text => {
    alert(`${text}`);
};


