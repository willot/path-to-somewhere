"use client"

import { UserContext } from "@/contexts/UserProvider";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Profile = () => {
    const user = useContext(UserContext)
    const router = useRouter();

    useEffect(() => {
        if(user && (user.userName === null || user.userName ==='')){
            router.push('/');
        }

    },[user?.userName])
    return (
        <>
            <h1>Create your character</h1>
            <h2>Welcome {user?.userName}</h2>
        </>
    )
}

export default Profile;