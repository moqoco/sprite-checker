import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components"

// pages
import SpritePage from './pages/SpritePages';
import TopPage from './pages/TopPages';

const AppDiv = styled.div`
  width: 98%;
  max-width: 1000px;
  margin: auto;
`

function App() {
  return (
    <AppDiv>
      <Routes>
        <Route path="/" element={<TopPage />}/>
        <Route path="/sprite" element={<SpritePage />} />
      </Routes>
    </AppDiv>
  );
}

export default App;
