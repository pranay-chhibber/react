import { useLoaderData } from "react-router-dom"

// import  { useEffect, useState } from 'react'
const   Github = () => {

     const data = useLoaderData()

    // const [data,setData] =  useState([])
    
    // useEffect(()=> { 
    //     fetch('https://api.github.com/users/pranay-chhibber')
    //     .then(response=> response.json())
    //     .then(data => 
    //         {console.log(data);
    //         setData(data)
    //         })
            
    //  })
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl' >Github Repos : {data.public_repos}
    <img className='w-20' src={data.avatar_url} alt="" />
    </div>
  )
}

export const githubInfoloader = async () =>{
    const response =  await fetch('https://api.github.com/users/pranay-chhibber')
    return response.json()
}

export default Github

