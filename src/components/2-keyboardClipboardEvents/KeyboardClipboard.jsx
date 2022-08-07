import { useState } from "react"


const KeyboardClipboard = () => {
    const [inputValue , setInputValue] = useState("")
    const handleInputChange = () => {

    }

    const handleKeyDown = (e) => {
        e.keyCode === 13 && alert("Enter submit")

    }

    const handleAreaPaste = (e) =>{
        e.target.value = e.clipboardData.getData("text").toLowerCase();
        e.target.style.border = "3px solid red";
        e.target.style.backgroundColor = "green"
        e.preventDefault();
    }

    const handleAreaChange = (e) => {
        if(e.target.value){
            e.target.style.border = "1px solid black";
        e.target.style.backgroundColor = "white"
        }
    }
  return (
    <div >
        <h2>Clickboard Event</h2>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />

        <p onCopy={() => alert("Dikkat Kopyalandı")}>{inputValue.toUpperCase()}</p>
        <textarea name="area" id="area" cols="50" rows="10" onPaste={handleAreaPaste} onChange={handleAreaChange}></textarea>
    </div>
  )
}

export default KeyboardClipboard