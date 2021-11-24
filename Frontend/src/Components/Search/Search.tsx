import { useState } from "react"

import './search.css'


export const Search = () => {
const [input, setInput] = useState(0); 

const handleEnterClicked = (e:any) => {
  setInput(e.target.value)
}


  return <div className="search-container">
      <label className="input-hint"
       htmlFor="satusInput">Enter a number and watch http cat
       </label>
       <div className="input-container">
        <input type="number" id="satusInput"/>
        <button onClick={handleEnterClicked}>Give me a cat</button>
       </div>
  </div>
}

