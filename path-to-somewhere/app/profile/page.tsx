"use client"

import { UserContext } from "@/contexts/UserProvider";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import CharacterProfile from "@/components/CharacterProfile";


export type Character = 'wizard' | 'knight' | 'monk' | 'warrior' | undefined;


const Profile = () => {
    const user = useContext(UserContext)
    const router = useRouter();

    const [selection, setSelection] = useState<Character>();

    useEffect(() => {
        if (user && (user.userName === null || user.userName === '')) {
            router.push('/');
        }
    }, [user?.userName])
    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-24">
            <h1 className="text-3xl font-bold text-cyan-600">Welcome {user?.userName}</h1>
            <h2 className="text-2xl font-bold">Select your character</h2>
            <div className="grid grid-cols-2 gap-3">
                <button className="hover:opacity-50" aria-label="Wizard"
                    onClick={() => { setSelection('wizard') }}>
                    <img className="max-w-48 max-h-48 rounded-sm" src="/wizard.png" />
                </button>
                <button className="hover:opacity-50" aria-label="Knight"
                    onClick={() => { setSelection('knight') }}>
                    <img className="max-w-48 max-h-48 rounded-sm" src="/knight.png" />
                </button>
                <button className="hover:opacity-50" aria-label="Monk"
                    onClick={() => { setSelection('monk') }}>
                    <img className="max-w-48 max-h-48 rounded-sm" src="/monk.png" />
                </button>
                <button className="hover:opacity-50" aria-label="Warrior"
                    onClick={() => { setSelection('warrior') }}>
                    <img className="max-w-48 max-h-48 rounded-sm" src="/warrior.png" />
                </button>
            </div>
            {selection && (
                <>
                    <CharacterProfile character={selection}/>
                </>
            )}
        </main>
    )
}

export default Profile;