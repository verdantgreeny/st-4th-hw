import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import BoxContainer from "./components/BoxContainer";

// TODO: GlobalStyle 컴포넌트를 만들고 styled-reset 패키지로 스타일 초기화하고 App 컴포넌트에 적용해 보세요.
const GlobalStyle = createGlobalStyle`
  ${reset}
  div {
    margin: 0 auto;
    text-align: center;
  }

`;

function App() {
  // Box 를 클릭하면 해당 Box만 파란색이 되도록 해야 합니다. components/ 안의 컴포넌트들안에서 TODO를 확인하세요.
  return (
    <div>
      <GlobalStyle />
      <h1
        style={{ fontSize: "30px", fontWeight: "1000", marginBottom: "10px" }}
      >
        Clickable Boxes
      </h1>
      <BoxContainer />
    </div>
  );
}

export default App;
