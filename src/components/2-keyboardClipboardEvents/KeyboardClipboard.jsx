import { useState } from "react"


const KeyboardClipboard = () => {
    const [inputValue , setInputValue] = useState("")
    const handleInputChange = () => {

    }

    const handleKeyDown = (e) => {
        e.keyCode === 13 && alert("Enter submit")

    }
  return (
    <div >
        <h2>Clickboard Event</h2>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />

        <p>{inputValue.toUpperCase()}</p>
    </div>
  )
}

export default KeyboardClipboard