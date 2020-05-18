import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading} from './selectors';
import { loadTodos, removeTodoRequest, setCompletedRequest } from './thunks';
// import { markTodoAsCompleted } from './actions';
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
                    todo={todo}
                    key={todo.id} />
            )}
        </div>
    );

    return isLoading ? loadingMessage : content;
};
//creating selectors for this
const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(setCompletedRequest(id)),
});
// you dont have to use both functions you can use one or the other is needed
// connect(mapStateToProps) or connect(null,mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);