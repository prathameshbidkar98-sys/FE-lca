Function student({count})
{
  Let text=count;
  return(
    <>
    <h3>Hello from Child</h3>
  <p>Count from parent is {text+1}</p>
    </>;
}
export default student;
