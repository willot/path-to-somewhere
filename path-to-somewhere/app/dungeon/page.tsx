"use client"
import { UserContext } from "@/contexts/UserProvider";
import { useContext, useState } from "react";

import dynamic from 'next/dynamic'
import RoomButton from "@/components/RoomButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Inventory from "@/components/Inventory";
import FightRoom from "@/components/FightRoom";

export interface Enemy {
    name: string,
    description: string,
    health: number,
    mana: number,
    hitChance: number,
    damage: number,
}

const RoomCeiling = dynamic(() => import('@/components/RoomCeiling'), {
    loading: () => <p>Loading...</p>,
    ssr: false, // Set server-side rendering to false
})

const Dungeon = () => {
    const user = useContext(UserContext);
    const [roomSelection, setRoomSelection] = useState<number | undefined>();
    const [vitals, setVitals] = useState(user?.characterDetails.baselineVitals);


    const { isPending: isRoomsPending, error: roomsError, data: roomsData, isFetching: isRoomsFetching } = useQuery({
        queryKey: ['rooms'],
        queryFn: () =>
            axios
                .get('http://localhost:3001/api/rooms')
                .then((res) => res.data),
    });

    const { isPending: isEnemyPending, error: enemyError, data: enemyData, isFetching: isEnemyFetching } = useQuery({
        queryKey: ['enemy'],
        queryFn: () =>
            axios
                .get('http://localhost:3001/api/enemy')
                .then((res) => res.data),
        staleTime: 0,
    });

    console.log("enemyData", enemyData)

    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-4 md:p-24">
            <h1 className="text-3xl font-bold text-cyan-600 mb-4">Dungeon</h1>
            {vitals && vitals?.health > 0 ? (
                <>
                    <div className="flex flex-col justify-between gap-5 w-full sm:flex-row sm:gap-0">
                        <div className="flex w-full flex-col items-center">
                            <h2 className="text-3xl font-bold mb-4">Welcome {user?.characterDetails.userName} powerful {user?.characterDetails.name}</h2>
                            <section className="grid grid-cols-3 gap-1 grow">
                                {roomsData && (roomsData.rooms.map((room: number) => {
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
                        <Inventory vitals={vitals!} />
                    </div>
                    {roomSelection && (roomSelection === 6 ? (
                        <RoomCeiling setVitals={setVitals} vitals={vitals!} />
                    ) : (<FightRoom roomIndex={roomSelection} enemies={enemyData.enemies} setVitals={setVitals} vitals={vitals!} />))}
                </>
            ): <div> you are dead...</div>}
        </main>
    )
}

export default Dungeon;