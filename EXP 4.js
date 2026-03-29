import React, { useState,useEffect} from "react";
function App()
{
  const[time,setTime] = useState(new Date());
  useEffect(()=>{
    console.log("CLOCK MOUNTED");

    const interval=setInterval(()=>{
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("CLOCK UNMOUNTED");
      clearInterval(interval);
    };
  },[]);
  return(
    <div style = {{textAlign:"center",marginTop:"50px"}}>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );

}
export default App;