import React from 'react';
import './App.css';
import { Cat } from './Components/Cat/cat';
import { Search } from './Components/Search';

function App() {
  return (
    <div className="App">
        <Search/>
        <Cat status={200} info="Hey I am some interesting cat fact" catFact="I am cat fact"/>
        
    </div>
  );
}

export default App;
