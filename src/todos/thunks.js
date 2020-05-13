// thunk is a function that returns another function which contains the actual logic we want it to perform on trigger
export const displayAlert = text =>{
    alert(`You clicked on ${text}`);
};