import { useState } from "react"


export const Search = () => {
const [input, setInput] = useState(0); 

const handleEnterClicked = (e:any) => {
  setInput(e.target.value)
}


  return <div>
    <label htmlFor="satusInput">Search for And press enter</label>
    <button onClick={handleEnterClicked}></button>
    <input type="number" id="satusInput"/>
    
  </div>
}

