/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"

const StateManag = () => {

    const [color , setColor] = useState("olive")
    const [containerColor , setContainerColor] = useState("white")

    const Rcolors = () =>{
       
            setColor("white")
            setContainerColor("black")
        
    }
        const colored = () =>{
            setContainerColor("white")
        }    
  return (

    <div className="bg-black h-screen duration-500 w-screen " style={{backgroundColor: color}} >
        <div className="h-15 bg-white w-screen fixed bottom-20 flex justify-center  rounded-xl   " style={{backgroundColor : containerColor }} >
                <div>
                    <button className="bg-red-700 rounded-xl py-2 px-5 m-2"     onClick={() => {setColor("red")   ; colored() }  }  >Red</button>
                    <button className="bg-blue-700 rounded-xl py-2 px-5 m-2"    onClick={() => {setColor("blue")  ; colored()} } >Blue</button>
                    <button className="bg-green-700 rounded-xl py-2 px-5 m-2"   onClick={() => {setColor("green") ; colored()}}>Green</button>
                    <button className="bg-cyan-700 rounded-xl py-2 px-5 m-2  "  onClick={() => {setColor("cyan")  ; colored()}}>Cyan</button>
                    <button className="bg-black text-white rounded-xl py-2 px-5 m-2  "  onClick={Rcolors}>Reset</button>
                </div>
        </div>
    </div>
  )
}

export default StateManag