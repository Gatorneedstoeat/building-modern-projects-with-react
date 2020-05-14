import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest } from './thunks';
import { markTodoAsCompleted } from './actions';
import './TodoList.css';

// default array prevents the app from showing an error when todos is empty
const TodoList = ({ todos = [], onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading... Todos</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo =>
                <TodoListItem
                    onCompletedPressed={onCompletedPressed}
                    onRemovedPressed={onRemovedPressed}
                    todo={todo} />
            )}
        </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});
// you dont have to use both functions you can use one or the other is needed
// connect(mapStateToProps) or connect(null,mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);