"use client"
import { UserContext } from "@/contexts/UserProvider";
import { useContext, useState } from "react";

import dynamic from 'next/dynamic'
import RoomButton from "@/components/RoomButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Inventory from "@/components/Inventory";

const RoomCeiling = dynamic(() => import('@/components/RoomCeiling'), {
    loading: () => <p>Loading...</p>,
    ssr: false, // Set server-side rendering to false
})

const defaultVitals = {
    health: 200,
    mana: 40,
}

const Dungeon = () => {
    const user = useContext(UserContext)
    const [roomSelection, setRoomSelection] = useState<number | undefined>();
    const [vitals, setVitals] = useState(defaultVitals);


    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['rooms'],
        queryFn: () =>
            axios
                .get('http://localhost:3001/api/rooms')
                .then((res) => res.data),
    });

    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-4 md:p-24">
            <h1 className="text-3xl font-bold text-cyan-600 mb-4">Dungeon</h1>
            <div className="flex flex-col justify-between gap-5 w-full sm:flex-row sm:gap-0">
                <div className="flex w-full flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Welcome {user?.userName} powerful {user?.character}</h2>
                    <section className="grid grid-cols-3 gap-1 grow">
                        {data && (data.rooms.map((room: number) => {
                            return (
                                <RoomButton
                                    key={room}
                                    roomIndex={room}
                                    disabledButton={false}
                                    setRoomSelection={setRoomSelection}
                                />
                            )
                        }))}
                    </section>
                </div>
                <Inventory vitals={vitals}/>
            </div>
            {roomSelection && (
                    <RoomCeiling setVitals={setVitals} vitals={vitals}/>
                )}
        </main>
    )
}

export default Dungeon;