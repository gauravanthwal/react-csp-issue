import React from "react";
import "./styles/style.css";
import MyCard from "./components/MyCard";

const App = () => {
  return (
    <div>
      <h1 className="text-red-500">Hello, React with Webpack!</h1>
      <MyCard/>
    </div>
  );
};

export default App;
