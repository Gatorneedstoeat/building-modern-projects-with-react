# Building Modern Projects with React

#### Best Practices
* Export the connected and unconnected versions of a component.  That way you can test the component without having to set up a fake store.

```javascript 
export const TodoList = ...  --> Our tests
```
```javascript
export default connect(...)(TodoList);   --> Our Application
```

* Keep Redux actions and async operations our of your reducers.  Reducers are specificly ment to take the current state of the redux store and combine it with an action to get the updated state.

* Think carefully about connecting components.