import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;

export const getTodosLoading = state => state.todos.isLoading;

//createSelector passing getTodos selector then running final function to filter out completed todos
//you can add as many selectors as you want and use them in the final function
// *the return value only changes in createSelector functions when the passed value changes saving compute time

/*
export const getIncompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos,isLoading) => isLoading ? [] : todos.filter(todo => !todo.isCompleted),
);

*/
export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

// higher level selectors like this get its data formating from the lower level selectors like getTodos
export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);

