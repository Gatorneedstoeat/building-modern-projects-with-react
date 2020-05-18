import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';
import './NewTodoForm.css';


// this form will automaticly recieve the todo's from the state passed as a todos prop
const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    // check for a duplicate todo
                    //.some returns boolean value based on the value checked in the function
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText) {
                        //call dispatch function
                        onCreatePressed(inputValue);
                        // reset 
                        setInputValue('');
                    }

                }}
                className="new-todo-button">Create Todo</button>
        </div>
    );
};
//returns an object { todos: state.todos }
// state parameter is the entire redux state
// mapStateToProps takes state object and returns another object containing pieces of the state the componet needs access to
// this form will automaticly recieve the todo's from the state passed as a todos prop
const mapStateToProps = state => ({
    todos: getTodos(state),
});

// this function returns props and passed to this component
// dispatch is a function that allows the components to trigger redux actions that the store will respond to
// trigger a redux action when someone clicks the create todo button
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});
// connect is a higher order function from react-redux, connect()() returns a connected version of the component
// pass the above functions
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);