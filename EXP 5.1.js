import React,{useContext,createContext} from "react";

 //1.Create context
 const Mycontext= createContext();

 //2.Child Component
 const ChildComponent = () => {
  const message = useContext(Mycontext);
   return <h2> {message} </h2>;
 };
 
 //3.App component

 function App()
 {
  const message = "HELLO FROM CONTEXT API !!";

  return(
    <Mycontext.Provider value={message}>
      <div style={{ textAlign:"center",marginTop:"40px"}}> 
        <ChildComponent/>
      </div>
    </Mycontext.Provider>
  );
 }
 export default App;
 
 

