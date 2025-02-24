//Actions are json object consists of two things action type string naming the action and a payload of additional data

//action type / name
export const CREATE_TODO = 'CREATE_TODO';
//action creator
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo },
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';

export const markTodoAsCompleted = todo => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { todo },
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';

export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

// passed todos that were loaded
export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
})