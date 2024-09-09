import { useCallback, useEffect, useState } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let newPassword = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdedfghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_+=-`{}[]\|"
    for(let i=0;i<length;i++){
      const ind = Math.floor(Math.random()*str.length)
      newPassword += str[ind];
    }
    setPassword(newPassword)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {generatePassword()}, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 text-orange-500 px-4 py-3 my-8">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password} 
          placeholder="Password" 
          readonly 
          className="outline-none w-full px-3 py-1"/>
          <button onClick={copyPasswordToClipboard} className="bg-blue-700 px-3 py-0.5 text-white shrink-0">Copy</button>
        </div>
        <div className="flex gap-x-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange = {() => {setCharAllowed( (prev) => !prev)}}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
