import styled from "styled-components";

export const TarefaStyle = styled.li`
  width: 97.5%;
  height: 40px;
  border-radius: 8px;
  background: #E5A47F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  div {
    display: flex;
    gap: 8px;
  }
  
  input[type=checkbox]  {
    border: 0px;
    width: 20px;
}
/* input[type=checkbox]:checked {
  background-color: red;
} */
`