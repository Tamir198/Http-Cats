import React, { useEffect, useState } from 'react';
import './App.css';
import { Cat } from './Components/Cat/cat';
import { Search } from './Components/Search/Search';
import {statusCodeInfo} from './API/statusCodeInfo'

function App() {
  const [statusCode,setStatusCode] = useState(200);
  const [statusCodeMeaning,setStatusCodeMeaning] = useState();
  const [statusCodeDetails,setStatusCodeDetails] = useState();

  useEffect(() => {
    statusCodeInfo(statusCode,setStatusCodeMeaning,setStatusCodeDetails);
  },[statusCode]);




  return (
    <div className="App">
      <h1 className="title">Do you like cats?</h1>
      <Search showStatusCodeUI={setStatusCode}/>
      <Cat status={statusCode} 
      info={statusCodeDetails}
      statusCodemeaning={statusCodeMeaning}
      catFact="I am cat fact"/>
    </div>
  );
}

export default App;
