import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is recieved', () => {
        const fakeTodo = { text: 'hello', isCompleted: false };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
            },
        };
        //structure of todos in redux store
        const originalState = { isLoading: false, data: [] };
        //the expexted return
        const expected = {
            isLoading: false,
            data: [fakeTodo]
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});