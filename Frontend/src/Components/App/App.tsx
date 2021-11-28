import React, { useEffect, useState } from 'react';
import './App.css';
import { Cat } from '../Cat/cat';
import { Search } from '../Search/Search';
import { statusCodeInfo } from '../../API/statusCodeInfo'
import { AboutStatusCodes } from '../AboutStatusCodes/AboutStatusCodes'

function App() {
  const [statusCode, setStatusCode] = useState(200);
  const [catFunFact, setCatFunFact] = useState();
  const [statusCodeMeaning, setStatusCodeMeaning] = useState();
  const [statusCodeDetails, setStatusCodeDetails] = useState();

  useEffect(() => {
    statusCodeInfo(statusCode, setStatusCodeMeaning, setStatusCodeDetails, setCatFunFact);
  }, [statusCode]);


  return (
    <div className="App">
      <h1 className="title">Do you like cats?</h1>
      <Search showStatusCodeUI={setStatusCode} />

      <div className="main-content-container">
        <AboutStatusCodes/>
        <Cat status={statusCode}
          info={statusCodeDetails}
          statusCodemeaning={statusCodeMeaning}
          catFact={catFunFact}
        />
      </div>
    </div>
  );
}

export default App;
