import { useState } from "react";
import "./App.css";

function App() {
  let [count, counter] = useState(5);

  // var addValue = () =>{
    // console.log("clicked" ,count);
    // count++;
    // counter(count +1)
  // }

  var decValue = () => {
    if (count > 0) {
      counter(count - 1);
    }
  };

  return (
    <>
      <h1>React Code</h1>
      <h2>Counter value : {count}</h2>

      <button onClick={() => counter(count + 1)}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
