import { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return <div></div>;
};
