import "./App.module.scss";
import { Container } from "@mui/material";
import { Main } from "../pages/main-page/Main";

export const App = () => {
  return <Container maxWidth={false} disableGutters sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Main />
    </Container >;
};
