import React from 'react';
import './App.css';
import { Card } from './Components/Card';
import { Cat } from './Components/Cat/cat';

function App() {
  return (
    <div className="App">
        <Card title="Hey!" paragraph="I am typescript Componenet" />
        <Cat status={200} info="Hey I am some interesting cat fact"></Cat>
    </div>
  );
}

export default App;
