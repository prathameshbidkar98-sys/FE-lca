import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { increment, decrement } from "./store";
function Counter() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
return (
<div style={{ textAlign: "center" }}>
<h1>{count}</h1>
<button onClick={() => dispatch(increment())}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>
</div>
);
}
export default function App() {
return (
<Provider store={store}>
<Counter />
</Provider>
);
}
