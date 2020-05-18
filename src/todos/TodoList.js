import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';
import { loadTodos, removeTodoRequest, setCompletedRequest } from './thunks';
// import { markTodoAsCompleted } from './actions';

const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
`;


// default array prevents the app from showing an error when todos is empty
const TodoList = ({ completedTodos, incompleteTodos, onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading... Todos</div>;
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo =>
                <TodoListItem
                    onCompletedPressed={onCompletedPressed}
                    onRemovedPressed={onRemovedPressed}
                    todo={todo}
                    key={todo.id} />
            )}
            <h3>Complete:</h3>
            {completedTodos.map(todo =>
                <TodoListItem
                    onCompletedPressed={onCompletedPressed}
                    onRemovedPressed={onRemovedPressed}
                    todo={todo}
                    key={todo.id} />
            )}
        </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
};
//creating selectors for this
const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(setCompletedRequest(id)),
});
// you dont have to use both functions you can use one or the other is needed
// connect(mapStateToProps) or connect(null,mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);