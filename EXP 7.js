import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
const myMiddleware = (store) => (next) => (action) => {
console.log("Middleware running");
console.log("Action name:", action.type); 
return next(action);
};
const counterSlice = createSlice({
name: "counter", 
initialState; { value: 0 }, 
reducers: {
increment: (state) =&gt; {
state.value += 1; 
},
},
});
const { increment } = counterSlice.actions;

const store = configureStore({
reducer: {
counter: counterSlice.reducer, 
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(myMiddleware),
});
function Main() {
const dispatch = useDispatch(); 
const value = useSelector((state) => state.counter.value);
return (
<div>
<h2>Count: {value}</h2> {/* display count */}
<button onClick={() => dispatch(increment())}>
{/* when clicked → dispatch action */}
Click Me
</button>
</div>
);
}
export default function App() {
return (
<Provider store={store}>
{/* provide Redux store to app */}
<Main /> {/* render Main component */}
</Provider>
);
}
