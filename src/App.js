import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TitleContainer = styled.div`
  background: palegreen;
  text-align: center;
  padding: 50px;
`

const Title = styled.h1`
  color: black;
  -webkit-text-fill-color: lime;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
  
  letter-spacing: 10px;
  text-shadow: 5px 5px white, 0 0 10px black;
  font-size: 100px;
`

const TitleLink = styled.a`
  display: inline;
  font-size: 50px;
  font-weight: bold;
  padding: 30px;

  text-decoration: none;
  color: ${props => props.color || "black"};

  &:hover {
    text-shadow: 0 0 10px white;
  }

  &:visited {
    color: ${props => props.color || "black"};
  }
`

const ContentContainer = styled.div`
  padding: 50px;
  font-size: 20px;
`

function App() {
  return (
    <div className="App">
      <TitleContainer>
        <Title>Jakads</Title>
        <TitleLink color="#ff0000" href="http://youtube.com/wkzkeotmd" target="_blank">YouTube</TitleLink>
        <TitleLink color="#1da1f2" href="http://twitter.com/Jakads" target="_blank">Twitter</TitleLink>
        <TitleLink color="#9146ff" href="http://twitch.tv/Jakads" target="_blank">Twitch</TitleLink>
      </TitleContainer>
      <ContentContainer>
        <p>temporary page (planning on being awesome)</p>
        <p>임시 페이지 (이쁘장해질 예정)</p>
        <p>テンポラリーページ　（あと少しでカッコ良くなる予定）</p>
        <p></p>
      </ContentContainer>
    </div>
  );
}

export default App;
