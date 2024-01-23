"use client"

import { UserContext } from "@/contexts/UserProvider";
import { useContext } from "react";

const Profile = () => {
    const user = useContext(UserContext)
    return (
        <>
            <h1>Create your character</h1>
            <h2>Welcome {user?.userName}</h2>
        </>
    )
}

export default Profile;