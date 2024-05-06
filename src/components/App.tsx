import { useState } from "react";
import "./App.module.scss";
import { AppBar, Container, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { lightTheme } from "./theme";

export const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return <ThemeProvider theme={lightTheme}>
    <div style={{backgroundColor:'red'}}>
          <Container style={{height:'100vh'}}><AppBar position="static" >

         <Toolbar disableGutters><Typography variant="h1">КУПИ</Typography>
        </Toolbar>
     
     
      </AppBar> </Container>
    </div>
    
    </ThemeProvider>
};
