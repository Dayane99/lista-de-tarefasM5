import styled from "styled-components";

export const MainContentStyle = styled.main`
display: flex;
flex-direction: column;
align-items: center;

  .inserirBuscar {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .todo {
    width: 1450px;
    min-height: 400px;
    padding: 50px;
    border-radius: 0px 8px 8px 8px;
    background: #EBBA82;
    display: flex;
    flex-direction: column;
  }

  .lista {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  > footer {
    position: relative;
    text-align: center;
    top: -40px;
  }
`