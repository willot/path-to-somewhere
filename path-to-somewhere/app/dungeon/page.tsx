"use client"
import { UserContext } from "@/contexts/UserProvider";
import { useContext, useState } from "react";

import dynamic from 'next/dynamic'

const Room1 = dynamic(() => import('@/components/Room1'), {
    loading: () => <p>Loading...</p>,
    ssr: false, // Set server-side rendering to false
})


const Dungeon = () => {
    const user = useContext(UserContext)

    const [roomSelection, setRoomSelection] = useState<string>();

    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-24">
            <h1>Dungeon</h1>
            <h1 className="text-3xl font-bold text-cyan-600">Welcome {user?.userName} powerful {user.character}</h1>
            <section className="flex flex row gap-4">
                <button
                    onClick={() => {
                        setRoomSelection('1')
                    }}>room1</button>
                <button>room2</button>
                <button>room3</button>
            </section>

            {roomSelection && (
                <Room1 />
            )}
        </main>
    )
}

export default Dungeon;