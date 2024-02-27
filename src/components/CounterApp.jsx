import React from "react";
import { useDispatch, useSelector } from "react-redux";
const CounterApp = () => {
  const counter = useSelector((storeState) => storeState.counter);

  const dispatch = useDispatch();
  return (
    <div>
      <p> the Value Of Counter {counter} </p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        {" "}
        Increase By 10
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 20 })}>
        Increase By 20
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 20 })}>
        Decarease By 20
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decarease By 10
      </button>
    </div>
  );
};

export default CounterApp;
