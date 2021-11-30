import {useState } from "react"

import './search.css'

interface SearchProps {
  showStatusCodeUI: any,
}

export const Search = (props: SearchProps) => {
  const [input, setInput] = useState<String>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return <div className="search-container">
    <label className="input-hint"
      htmlFor="satusInput">Enter status code
    </label>
    <div className="input-container">
      <input onInput={handleInputChange} type="number" id="satusInput" />
      <button onClick={() => props.showStatusCodeUI(input)}>Ok</button>
    </div>
  </div>
}

