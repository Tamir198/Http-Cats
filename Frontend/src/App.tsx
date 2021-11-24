import React from 'react';
import './App.css';
import { Cat } from './Components/Cat/cat';
import { Search } from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <h1 className="title">Do you like cats?</h1>
      <Search/>
      <Cat status={200} 
      info="Hey I am some interesting cat fact" 
      catFact="I am cat fact"/>
        
    </div>
  );
}

export default App;
