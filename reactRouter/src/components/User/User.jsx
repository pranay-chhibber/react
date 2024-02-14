import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams()
  return (
    <div className="flex justify-center  bg-gray-600">User : {userid}</div>
  )
}

export default User