import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAlllowed, setCharAlllowed] = useState(false);
  const [password, setPassword] = useState(8);
  const [isCopy, setIsCopy] = useState(null);

  //@ ---------------------useCallback hook starts here---------------------
  const passwordGenerate = useCallback(() => {
    setIsCopy(null);
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAlllowed) str += "!@#$%^&*?/><";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAlllowed, setPassword]);
  //* ---------------------useCallback hook ends here---------------------

  //@ ---------------------useRef hook starts here--------------------
  const passRef = useRef(null);
  //* ---------------------useRef hook ends here---------------------

  //@ -------------------copyToClipboard fn starts here----------------

  // const handelCopy = () =>{
  //     passRef.current?.selected();
  // }
  const handelCopy = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setIsCopy("Text Copied Successfully!");
  }, [password]);

  //@ ----------------------useEffect hook starts here--------------------------
  useEffect(() => {
    passwordGenerate();
    // setIsCopy(null)
  }, [length, numberAllowed, charAlllowed, passwordGenerate]);

  return (
    <>
      <div className="bg-gray-500 w-full max-w-lg shadow-md mx-auto py-5 px-5 rounded-md my-10 ">
        <h1 className="text-center text-4xl text-white my-3">
          Password Generator{" "}
        </h1>
        <div className="flex  rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="outline-none w-full py-1"
            readOnly
            ref={passRef}
          />
          <button
            className="outline-none w-[5rem] rounded-e-2xl bg-blue-700 text-white px-.3 py-.5 "
            onClick={handelCopy}
          >
            Copy
          </button>
        </div>
        <div>
          <h1 className="">{isCopy}</h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex sm:flex-row md:flex md:flex-row text-sm gap-x-2 text-xxl">
          <div className=" flex flex-col gap-x-1">
            {/*  length function */}
            <input
              type="range"
              className=" cursor-pointer"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            {/* add length */}
            <label>Length is : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            {/* add number input fn  */}
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            {/* add char input fn  */}
            <input
              type="checkbox"
              id="charInput"
              checked={charAlllowed}
              onChange={() => {
                setCharAlllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Chars</label>
          </div>
          <button
            onClick={passwordGenerate}
            className="bg-red-600 m-3 outline-none rounded g-blue-700 text-white px-3 py-1.5 pb-2 shrink-0  "
          >
            Re-Renerate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
