"use client"

import { UserContext } from "@/contexts/UserProvider";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import CharacterProfile from "@/components/CharacterProfile";
import axios from 'axios';
import {
    useQuery,
} from '@tanstack/react-query'
import ImageButton from "@/components/ImageButton";

export type Character = 'wizard' | 'knight' | 'monk' | 'warrior' | undefined | null;


const Profile = () => {
    const user = useContext(UserContext)
    const router = useRouter();

    const [selection, setSelection] = useState<Character>();

    useEffect(() => {
        if (user && (user.userName === null || user.userName === '')) {
            router.push('/');
        }
    }, [user?.userName])

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['characters'],
        queryFn: () =>
            axios
                .get('http://localhost:3001/api/bio')
                .then((res) => res.data),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-24">
            <h1 className="text-3xl font-bold text-cyan-600">Welcome {user?.userName}</h1>
            <h2 className="text-2xl font-bold">Select your character</h2>
            <div className="grid grid-cols-2 gap-3">
                <ImageButton character={"wizard"} setter={setSelection} />
                <ImageButton character={"knight"} setter={setSelection} />
                <ImageButton character={"monk"} setter={setSelection} />
                <ImageButton character={"warrior"} setter={setSelection} />
            </div>
            {selection && (
                <>
                    <CharacterProfile character={selection} characterProfiles={data.characters}/>
                </>
            )}
        <button 
        disabled={!selection}
        onClick={() => {
            user?.setCharacterSelection(selection);
            router.push('/dungeon');
        }}
        >Confirm Selection</button>
        </main>
    )
}

export default Profile;