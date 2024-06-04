import styled from '@emotion/styled'

export const Container = styled.div`
width:100%;
height:100vh;
display:grid;
`
export const Content = styled.div`
padding:30px;
background-color:white;
border:1px solid red;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
`
export const StyledInputContainer = styled.div`
display:flex;
width:100%;
justify-content:center;
`
export const StyledInput = styled.input`
width:60%;
padding:10px 20px;
outline:none;
`
export const StyledButton = styled.button`
    padding:10px 20px;
    outline:none;
    &:hover {
        background-color:red;
    }
`
export const TodoContent = styled.div`
padding:20px 0px;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
border:1px solid red;

`
export const Todo = styled.div`
    padding:10px 20px;
    width:80%;
    border:1px solid blue;
    
`