import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import './common/_globals.scss';
import 'modern-normalize/modern-normalize.css';
import { Routes, Route } from 'react-router-dom';
import { GamePage } from './pages/GamePage';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:slug" element={<GamePage />} />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
