import { useParams } from "react-router-dom"

const User = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            {params.id}  
        </div>
    )
}

export default User
