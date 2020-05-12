import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import './TodoList.css';

// default array prevents the app from showing an error when todos is empty
const TodoList = ({ todos = [], onRemovedPressed, onCompletedPressed }) => (
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

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});
// you dont have to use both functions you can use one or the other is needed
// connect(mapStateToProps) or connect(null,mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);