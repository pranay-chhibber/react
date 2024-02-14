import { useParams } from 'react-router-dom'

const User = () => {

  const {userid} = useParams();

  return (
    <div className='bg-gray-700 text-white text-2xl mx-[20rem]  h-20  flex justify-center items-center rounded-full '  >User :  {userid} </div>
  )
}

export default User