"use client"
import Room1 from "@/components/Room1";
import { UserContext } from "@/contexts/UserProvider";
import { useContext, useState } from "react";

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

            {roomSelection && (<section>
                <Room1/>
            </section>)}
        </main>
    )
}

export default Dungeon;