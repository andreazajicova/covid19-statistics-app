import React from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
    <div className="App">
      <Board />
    </div>
    </>
  );
}

export default App;
