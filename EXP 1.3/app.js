import './App.css';
import { useState } from 'react';
import Student from './Student';
function App() {
const [counter, setCounter]=useState(0);
return (
<div className="App">
<h1>Welcome to my first react app!</h1>
<p>Counter value:{counter}</p>
<button onClick={()=>{setCounter(counter+1)}}>Increment</button>
<Student count={counter}></Student>
</div>
);
}
export default App;
