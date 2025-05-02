import React from "react";
import "./styles/style.css";
import MyCard from "./components/MyCard";
import { CssBaseline, Container} from "@mui/material";

const App = () => {
  return (
    <Container>
     <CssBaseline />
      <h1 className="text-red-500">Hello, React with Webpack!</h1>
      <MyCard/>
    </Container>
  );
};

export default App;
