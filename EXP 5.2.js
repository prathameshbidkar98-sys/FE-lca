import React,{useState} from "react";
function withcounter(WrappedComponent){
  return function CounterComponent(props){
    const [count,setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return( <WrappedComponent 
      count={count}
      increment={increment}
      {...props}
    />
  );
};
}
function ClickCounter({count,increment}){
  return(
    <button onClick={increment}>
      Clicked {count} times
    </button>
    );
  }
  const EnhancedClickCounter = withcounter(ClickCounter);
function App(){
return(
  <div style = {{textAlign:"center",marginTop:"50px"}}>
    <h2>HIGHER ORDER COMPONENT EXAMPLE</h2>
    <EnhancedClickCounter/>
  </div>
);
}
export default App;
