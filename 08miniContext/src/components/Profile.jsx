import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please login</div>

    return (
        <>
            <h2>Profile</h2>
            <div>Welcom {user.userName}</div>
        </>
    )
}