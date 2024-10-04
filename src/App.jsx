import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:',.<>?/~`-="
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-orange-800">
        <h1 className="text-white mb-10">Password Generator</h1>
        <div className="flex shadow rounded-lg">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="py-1 px-3 bg-white-800 w-full rounded-md "
          />
        </div>
        <div className="flex text-sm gap-x-2 my-3">
          <input
            type="range"
            min={4}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">{length}</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="length">Numbers</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="length">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
