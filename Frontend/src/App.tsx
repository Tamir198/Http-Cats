import React, { useState } from 'react';
import './App.css';
import { Cat } from './Components/Cat/cat';
import { Search } from './Components/Search/Search';
//@ts-ignore
import {getCatImgae} from './API/HttpCatt.ts'

function App() {
  const [statusCode,setStatusCode] = useState(200);

  return (
    <div className="App">
      <h1 className="title">Do you like cats?</h1>
      <Search showStatusCodeUI={setStatusCode}/>
      <Cat status={statusCode} 
      info="Hey I am some interesting cat fact" 
      catFact="I am cat fact"/>
    </div>
  );
}

export default App;
