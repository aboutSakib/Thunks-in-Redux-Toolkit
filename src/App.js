import React from "react";
import CounterApp from "./components/CounterApp";
import Theme from "./components/Theme";
import { useSelector } from "react-redux";
const App = ({ children }) => {
  const theme = useSelector((storeState) => storeState.theme);
  return (
    <div
      style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      className="app"
    >
      <CounterApp />
      <Theme />
    </div>
  );
};

export default App;
