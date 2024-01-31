"use client"

import CharacterProfile from "@/components/CharacterProfile";
import ImageButton from "@/components/ImageButton";
import { CharacterDetails, UserContext } from "@/contexts/UserProvider";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from "react";

export type Character = 'wizard' | 'knight' | 'monk' | 'warrior' | undefined | null;


const Profile = () => {
    const user = useContext(UserContext)
    const router = useRouter();

    const [selection, setSelection] = useState<Character>();

    useEffect(() => {
        if (user && user.characterDetails && (user.characterDetails.userName === undefined || user.characterDetails.userName === '')) {
            router.push('/');
        }
    }, [user?.characterDetails.userName])

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['characters'],
        queryFn: () =>
            axios
                .get('http://localhost:3001/api/bio')
                .then((res) => res.data),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const findCharacterInfo = () => {
        return data.characters.find((character: CharacterDetails) => {
                return character.name === selection
        })
    }

    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-24">
            <h1 className="text-3xl font-bold text-cyan-600">Welcome {user?.characterDetails.userName}</h1>
            <h2 className="text-2xl font-bold">Select your character</h2>
            <div className="grid grid-cols-2 gap-3">
                <ImageButton character={"wizard"} setter={setSelection} />
                <ImageButton character={"knight"} setter={setSelection} />
                <ImageButton character={"monk"} setter={setSelection} />
                <ImageButton character={"warrior"} setter={setSelection} />
            </div>
            {selection && (
                <>
                    <CharacterProfile character={selection} characterProfiles={data.characters} />
                </>
            )}
            <button
                disabled={!selection}
                className="bg-cyan-600 p-3 text-lg rounded-full disabled:bg-gray-500 disabled:opacity-50 hover:bg-indigo-500"
                onClick={() => {
                    console.log("findCharacterInfo", findCharacterInfo())
                    user?.setCharacterDetails({
                        ...user.characterDetails,
                        name:selection,
                        baselineVitals: findCharacterInfo().baselineVitals,
                        weapons: findCharacterInfo().weapons,
                        armor: findCharacterInfo().armor,
                    })
                    router.push('/dungeon');
                }}
            >Confirm Selection</button>
        </main>
    )
}

export default Profile;