/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nikecard from './components/nikecard'
import Card from './components/Card'

function App() {
  
      let myObj = [{
        name: "Pranay",
        Age : 22,
        Company : "XYZ"
      },{
        name: "Tushar",
        Age : 21,
        Company : "ABC"
      },{
        name: "Pulkit",
        Age : 21,
        Company : "C"
      },{
        name: "Vikas",
        Age : 21,
        Company : "D"
      },{
        name: "Amit",
        Age : 21,
        Company : "E"
      },{
        name: "Abhishek",
        Age : 21,
        Company : "F"
      }
    ]


  return (
    <>
     <h1 className='bg-green-400 text-5xl text-black p-4 rounded-xl  mb-5 ' >Tailwind Test</h1>


      < div className="flex flex-row justify-center flex-wrap gap-2 space-x-5">
      {myObj.map ((e) =>{
        return(
          <Card key={e} username={e.name} btnText={e.Company} />
        )
        })}
      <Card username="ABC" btnText="ABC Click" />
      <Card username="BCD"  btnText="BCD Click" />
      <Card username="CDE" btnText="CDE Click" />
      <Nikecard/> 
      </div>
    </>
  )
}

export default App
