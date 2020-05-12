# Building Modern Projects with React
#### Spread Operator for Updating State
[Stack Overflow ...spread in redux](https://stackoverflow.com/questions/52702146/the-spread-operator-in-redux-reducer)
[https://redux.js.org/recipes/using-object-spread-operator](https://redux.js.org/recipes/using-object-spread-operator)
#### Best Practices
* Export the connected and unconnected versions of a component.  That way you can test the component without having to set up a fake store.

```javascript 
export const TodoList = ...  --> Our tests
```
```javascript
export default connect(...)(TodoList);   --> Our Application
```

* Keep Redux actions and async operations our of your reducers.  Reducers are specificly ment to take the current state of the redux store and combine it with an action to get the updated state.

* Think carefully about connecting components.  If you would like to reuse the componet else-where in the app use a parent component that is connected to the store and passed the correct data to each child.

