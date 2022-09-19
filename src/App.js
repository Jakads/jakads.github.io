import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
  background: white;
  text-align: center;
`

function App() {
  return (
    <div className="App">
      <Container>
        <p>hi :)</p>
      </Container>
    </div>
  );
}

export default App;
