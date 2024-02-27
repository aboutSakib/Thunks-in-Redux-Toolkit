import React from "react";
import { useDispatch } from "react-redux";
import { changeBgColor, changeTextColor } from "../action/theme";

const Theme = () => {
  const dispatch = useDispatch();
  return (
    <div className="theme">
      <div className="bg-btn-group">
        <button onClick={() => dispatch(changeBgColor("red"))}>
          Change Bg Color To Red
        </button>
        <button onClick={() => dispatch(changeBgColor("green"))}>
          Change Bg Color To green
        </button>
        <button onClick={() => dispatch(changeBgColor("blue"))}>
          Change Bg Color To blue
        </button>
      </div>
      <div className="bg-btn-group">
        <button onClick={() => dispatch(changeTextColor("yellow"))}>
          Change Text Color To Yello
        </button>
        <button onClick={() => dispatch(changeTextColor("tomato"))}>
          Change Text Color To Tomato
        </button>
        <button onClick={() => dispatch(changeTextColor("purple"))}>
          Change Text Color To Purple
        </button>
      </div>
      <button onClick={() => dispatch({ type: "theme/reset" })}>
        Reset Theme
      </button>
    </div>
  );
};

export default Theme;
