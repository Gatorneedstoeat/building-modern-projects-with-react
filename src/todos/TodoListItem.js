import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom:${props => (new Date(props.createdAt)) > new Date(Date.now() - 8640000 * 5)
        ? 'none'
        : '2px solid red'};
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;
const Button = styled.button`
font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

const CompletedButton = styled(button)`
   
    display: inline-block;
    background-color: #22ee22;
`;

const RemovedButton = styled(button)`
   
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`;
const TodoListItem = ({ todo, onRemovedPressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
        <Container createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>
                Created at: &nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <ButtonsContainer>
                {!todo.isCompleted &&
                    <CompletedButton
                        className="completed-button"
                        onClick={() => onCompletedPressed(todo.id)}>Mark As Completed</CompletedButton>
                }
                <RemovedButton
                    className="remove-button"
                    onClick={() => onRemovedPressed(todo.id)}>Remove</RemovedButton>
            </ButtonsContainer>
        </Container>
    );
}

export default TodoListItem;