//Actions are json object consists of two things action type string naming the action and a payload of additional data

//action type / name
export const CREATE_TODO = 'CREATE_TODO';
//action creator
export const creatTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
})
