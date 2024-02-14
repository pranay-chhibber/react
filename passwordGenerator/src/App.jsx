/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //^----------------------------------useRef Hook---------------------------------------
  const passRef = useRef(null)
  
  //^----------------------------------useCallback Hook---------------------------------------
  const  passwordGenerator =  useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&_-?/<>"
    
    for (let i = 0; i <= length; i++) {
      const char = Math.floor((Math.random() * str.length) + 1 )
      pass += str.charAt(char)
    }
    
    
    setPassword(pass)
    
  } ,[length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  //^----------------------------------useEffect Hook---------------------------------------
  useEffect( () => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    
  
    <div className='w-full  max-w-lg  mx-auto shadow-md rounded-xl px-4 py-5 my-10 text-orange-500 bg-gray-600 '>
    <h1 className=' text-center text-4xl bg-slate-600  text-white my-3 '>Password Generator </h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4 ' >
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3' 
      placeholder='Password'
      readOnly
      ref={passRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none rounded-e-2xl  bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>
      </div>
      <div className='flex flex-col sm:flex sm:flex-row md:flex md:flex-row text-sm gap-x-2 text-xxl'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value) }}
          />
          <label > Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          id="numberinput"
          onChange={()=>{
              setNumberAllowed((prev) =>!prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          id="charInput"
          onChange={()=>{
              setCharAllowed((prev) =>!prev)
          }}
          />
          <label htmlFor="charInput">Char</label>
        </div>
        <button
      onClick={passwordGenerator}
      className='outline-none rounded  bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Re-Generate</button>
      </div>
    </div>
    </>
  )
}

export default App
