import React from "react";
import ImageSlider from "./ImageSlider";

const App = () => {

  const [count, setCount] = React.useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>RESET</button>

      <button onClick={increment}>+</button>

      <ImageSlider />

    </div>
  );
};

export default App;