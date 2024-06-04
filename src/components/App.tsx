import { useState } from "react";
import "./App.module.scss";
import { Container, Content, StyledButton, StyledInput, Todo, TodoContent,StyledInputContainer } from "./styledComponents";


export const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return <Container>
    <Content>
      <StyledInputContainer>
              <StyledInput/>
            <StyledButton>ADD</StyledButton>
      </StyledInputContainer>

      <TodoContent>
      <Todo>hi</Todo>
      <Todo>hi</Todo>
      <Todo>hi</Todo>
    </TodoContent>
    </Content>
    
  </Container>
};
