import { useState } from "react"
import { useEffect } from "react"

const Github = () => {

   const [data,SetData]=  useState([])

  useEffect(()=>{
    fetch("https://api.github.com/users/pranay-chhibbeR")
    .then((response) => response.json())
    .then((data) => 
    {
      console.log(data);
      SetData(data)
    })
  })

  return (
    <>
    <div className="flex justify-center items-center p-5 my-20 " >
    <img  className="h-[8rem]" src={data.avatar_url} alt="" />
    <div className="ml-10 p-5 rounded-xl text-xl " >
    <div> <strong>Username :</strong> {data.login} </div>
    <div> <strong>Name :</strong> {data.name} </div>
    <div> <strong>Total Repos :</strong> {data.public_repos} </div>
    <div> <strong>Followers :</strong> {data.followers} </div>
    </div>
    </div>
    </>
  )
}

export default Github