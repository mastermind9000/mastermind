import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
let i;
const ColorPalette = styled.div`
  background-color: grey;
  height: 400px;
  width: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Color = styled.button`
  height: 80px;
  width: 80%;
  border-radius: 50%;
  /* border: 2px solid black; */
  outline: none;
  background-color: ${props => {
    return props.colorProp;
  }};
  border: ${props => {
    if (props.status === true) {
      return "3px solid black;";
    }
    return;
  }};
`;

function App() {
  const [colors, setStatus] = React.useState(Array(4).fill(false));
  function handleClick(index) {
    const colorsClone = [...colors];
    for (i = 0; i < 4; i++) {
      colorsClone[i] = false;
    }
    if (colorsClone[index] === false) {
      colorsClone[index] = true;
    }
    setStatus(colorsClone);
  }
  return (
    <div className="App">
      <GlobalStyles />
      <ColorPalette>
        <Color
          colorProp="green"
          status={colors[0]}
          onClick={() => handleClick(0)}
        />
        <Color
          colorProp="red"
          status={colors[1]}
          onClick={props => handleClick(1)}
        />
        <Color
          colorProp="blue"
          status={colors[2]}
          onClick={() => handleClick(2)}
        />
        <Color
          colorProp="yellow"
          status={colors[3]}
          onClick={() => handleClick(3)}
        />
      </ColorPalette>
    </div>
  );
}
export default App;
